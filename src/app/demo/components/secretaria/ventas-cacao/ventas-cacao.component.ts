import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ProveedorService } from 'src/app/demo/service/proveedor.service';
import { VentaCacaoService } from 'src/app/demo/service/venta-cacao.service';
import { CompraCacaoService } from 'src/app/demo/service/compra-cacao.service';
import { Proveedor } from 'src/app/models/proveedor.model';
import { OrdenVentaCacao, DetalleVentaCacao, TipoCacao } from 'src/app/models/venta-cacao.model';
import { CuentaBancariaService } from 'src/app/demo/service/cuenta-bancaria.service';
import { CuentaBancaria } from 'src/app/demo/api/caja-bancos';

@Component({
    selector: 'app-ventas-cacao',
    templateUrl: './ventas-cacao.component.html',
    styleUrls: ['./ventas-cacao.component.scss']
})
export class VentasCacaoComponent implements OnInit, OnDestroy {
    // Pestañas
    activeTabIndex: number = 0;

    // Listas
    ventas: OrdenVentaCacao[] = [];
    proveedores: Proveedor[] = [];
    tiposCacao: TipoCacao[] = [];
    cuentasBancarias: CuentaBancaria[] = [];
    
    saldoPendienteCalculado: number = 0;

    // Loadings
    loadingVentas: boolean = false;
    loadingProveedores: boolean = false;
    guardandoVenta: boolean = false;
    guardandoProveedor: boolean = false;

    // Buscadores
    terminoBusquedaVentas: string = '';
    terminoBusquedaProveedores: string = '';
    private searchVentasSubject = new Subject<string>();
    private searchProveedoresSubject = new Subject<string>();
    private searchVentasSub!: Subscription;
    private searchProveedoresSub!: Subscription;

    // Modales y Formularios
    displayVentaDialog: boolean = false;
    displayProveedorDialog: boolean = false;
    displayDetailDialog: boolean = false;

    ventaForm!: FormGroup;
    proveedorForm!: FormGroup;
    selectedVenta: OrdenVentaCacao | null = null;

    editingVentaId: number | null = null;
    editingProveedorId: number | null = null;

    formasPago = [
        { label: 'Efectivo', value: 'E' },
        { label: 'Transferencia', value: 'T' }
    ];

    constructor(
        private fb: FormBuilder,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private confirmService: ConfirmationService, // the parameter is already confirmationService, let me just keep it
        private proveedorService: ProveedorService,
        private ventaCacaoService: VentaCacaoService,
        private compraCacaoService: CompraCacaoService,
        private cuentaBancariaService: CuentaBancariaService
    ) {}

    ngOnInit(): void {
        this.initFormularios();
        this.cargarVentas();
        this.cargarProveedores();
        this.cargarTiposCacao();
        this.cargarCuentasBancarias();

        // Configuración de búsqueda reactiva (debounce)
        this.searchVentasSub = this.searchVentasSubject.pipe(debounceTime(350)).subscribe(term => {
            this.ejecutarBusquedaVentas(term);
        });

        this.searchProveedoresSub = this.searchProveedoresSubject.pipe(debounceTime(350)).subscribe(term => {
            this.ejecutarBusquedaProveedores(term);
        });
    }

    ngOnDestroy(): void {
        if (this.searchVentasSub) this.searchVentasSub.unsubscribe();
        if (this.searchProveedoresSub) this.searchProveedoresSub.unsubscribe();
    }

    private initFormularios() {
        this.proveedorForm = this.fb.group({
            razonSocial: ['', Validators.required],
            ruc: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(13)]],
            direccion: [''],
            celular: ['', [Validators.pattern('^[0-9]+$')]],
            correo: ['', [Validators.email]]
        });

        this.ventaForm = this.fb.group({
            proveedor: [null, Validators.required],
            formaPago: ['E', Validators.required],
            montoPagado: [0, Validators.required],
            cuentaBancariaId: [null],
            notas: [''],
            quintales: [{ value: 0, disabled: true }],
            total: [{ value: 0, disabled: true }],
            detalles: this.fb.array([], Validators.required)
        });

        this.ventaForm.get('montoPagado')?.valueChanges.subscribe(val => {
            this.calcularSaldoPendiente();
        });
    }

    cargarCuentasBancarias() {
        this.cuentaBancariaService.listarCuentasBancariasActivas().subscribe(res => {
            this.cuentasBancarias = res;
        });
    }

    // ─── CARGA DE DATOS GENERALES ──────────────────────────────────────────
    cargarVentas() {
        this.loadingVentas = true;
        this.ventaCacaoService.listarVentasActivas().subscribe({
            next: (data) => {
                this.ventas = data;
                this.loadingVentas = false;
            },
            error: (err) => {
                console.error(err);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar las ventas.' });
                this.loadingVentas = false;
            }
        });
    }

    cargarProveedores() {
        this.loadingProveedores = true;
        this.proveedorService.listarProveedoresActivos().subscribe({
            next: (data) => {
                this.proveedores = data;
                this.loadingProveedores = false;
            },
            error: (err) => {
                console.error(err);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los proveedores.' });
                this.loadingProveedores = false;
            }
        });
    }

    cargarTiposCacao() {
        this.compraCacaoService.obtenerTiposCacao().subscribe({
            next: (data) => {
                this.tiposCacao = data;
            },
            error: (err) => console.error('Error al cargar tipos de cacao:', err)
        });
    }

    // ─── BÚSQUEDAS REACTIVAS ───────────────────────────────────────────────
    onBusquedaVentasChange() {
        this.searchVentasSubject.next(this.terminoBusquedaVentas);
    }

    onBusquedaProveedoresChange() {
        this.searchProveedoresSubject.next(this.terminoBusquedaProveedores);
    }

    ejecutarBusquedaVentas(term: string) {
        if (!term.trim()) {
            this.cargarVentas();
            return;
        }
        this.loadingVentas = true;
        this.ventaCacaoService.buscarVentas(term).subscribe({
            next: (data) => {
                this.ventas = data;
                this.loadingVentas = false;
            },
            error: (err) => {
                console.error(err);
                this.loadingVentas = false;
            }
        });
    }

    ejecutarBusquedaProveedores(term: string) {
        if (!term.trim()) {
            this.cargarProveedores();
            return;
        }
        this.loadingProveedores = true;
        this.proveedorService.buscarProveedores(term).subscribe({
            next: (data) => {
                this.proveedores = data;
                this.loadingProveedores = false;
            },
            error: (err) => {
                console.error(err);
                this.loadingProveedores = false;
            }
        });
    }

    // ─── LÓGICA DE PROVEEDORES (CRUD) ──────────────────────────────────────
    openNewProveedorDialog() {
        this.editingProveedorId = null;
        this.proveedorForm.reset();
        this.displayProveedorDialog = true;
    }

    editProveedor(proveedor: Proveedor) {
        this.editingProveedorId = proveedor.id || null;
        this.proveedorForm.patchValue({
            razonSocial: proveedor.razonSocial,
            ruc: proveedor.ruc,
            direccion: proveedor.direccion,
            celular: proveedor.celular,
            correo: proveedor.correo
        });
        this.displayProveedorDialog = true;
    }

    onSubmitProveedor() {
        if (this.proveedorForm.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Formulario Inválido', detail: 'Por favor complete todos los datos obligatorios.' });
            return;
        }

        this.guardandoProveedor = true;
        const formValue = this.proveedorForm.value;

        if (this.editingProveedorId) {
            this.proveedorService.actualizarProveedor(this.editingProveedorId, formValue).subscribe({
                next: () => {
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proveedor actualizado correctamente.' });
                    this.guardandoProveedor = false;
                    this.displayProveedorDialog = false;
                    this.cargarProveedores();
                },
                error: (err) => {
                    console.error(err);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al actualizar el proveedor.' });
                    this.guardandoProveedor = false;
                }
            });
        } else {
            this.proveedorService.registrarProveedor(formValue).subscribe({
                next: () => {
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proveedor registrado correctamente.' });
                    this.guardandoProveedor = false;
                    this.displayProveedorDialog = false;
                    this.cargarProveedores();
                },
                error: (err) => {
                    console.error(err);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al registrar el proveedor.' });
                    this.guardandoProveedor = false;
                }
            });
        }
    }

    desactivarProveedor(proveedor: Proveedor) {
        this.confirmationService.confirm({
            key: 'confirm',
            header: 'Confirmación de Eliminación',
            message: `¿Estás seguro de desactivar el proveedor "${proveedor.razonSocial}"? Esta acción no se puede deshacer.`,
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí, eliminar',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.proveedorService.desactivarProveedor(proveedor.id!).subscribe({
                    next: () => {
                        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Proveedor desactivado correctamente.' });
                        this.cargarProveedores();
                    },
                    error: (err) => {
                        console.error(err);
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo desactivar el proveedor.' });
                    }
                });
            }
        });
    }

    // ─── LÓGICA DE VENTAS CACAO (CRUD & DINÁMICA) ──────────────────────────
    get detallesFormArray(): FormArray {
        return this.ventaForm.get('detalles') as FormArray;
    }

    openNewVentaDialog() {
        this.editingVentaId = null;
        this.ventaForm.reset({
            formaPago: 'E',
            montoPagado: 0,
            cuentaBancariaId: null,
            quintales: 0,
            total: 0
        });
        // Limpiar filas anteriores
        while (this.detallesFormArray.length !== 0) {
            this.detallesFormArray.removeAt(0);
        }
        // Fila inicial por defecto
        this.addDetailRow();
        this.displayVentaDialog = true;
    }

    addDetailRow(detalle?: DetalleVentaCacao) {
        const row = this.fb.group({
            id: [detalle?.id || null],
            tipoCacao: [detalle ? this.tiposCacao.find(t => t.id === detalle.tipoCacao.id) : { id: 1 }, Validators.required],
            quintales: [detalle?.quintales || null, [Validators.required, Validators.min(0.01)]],
            precioPorQuintal: [detalle?.precioPorQuintal || null, [Validators.required, Validators.min(0.01)]],
            total: [{ value: detalle?.total || 0, disabled: true }]
        });

        row.valueChanges.subscribe(() => {
            this.calcularFila(row);
            this.calcularTotales();
        });

        this.detallesFormArray.push(row);
        if (detalle) {
            this.calcularFila(row);
        }
    }

    removeDetailRow(index: number) {
        if (this.detallesFormArray.length > 1) {
            this.detallesFormArray.removeAt(index);
            this.calcularTotales();
        } else {
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe ingresar al menos un detalle en la venta.' });
        }
    }

    calcularFila(row: FormGroup) {
        const q = parseFloat(row.get('quintales')?.value) || 0;
        const p = parseFloat(row.get('precioPorQuintal')?.value) || 0;
        row.get('total')?.patchValue(q * p, { emitEvent: false });
    }

    calcularTotales() {
        const detalles = this.detallesFormArray.controls;
        let totalQuintales = 0;
        let totalDinero = 0;

        detalles.forEach((control) => {
            const q = parseFloat(control.get('quintales')?.value) || 0;
            const p = parseFloat(control.get('precioPorQuintal')?.value) || 0;
            totalQuintales += q;
            totalDinero += (q * p);
        });

        this.ventaForm.patchValue({
            quintales: totalQuintales.toFixed(2),
            total: totalDinero.toFixed(2)
        }, { emitEvent: false });
        
        this.calcularSaldoPendiente();
    }

    calcularSaldoPendiente() {
        const total = parseFloat(this.ventaForm.get('total')?.value) || 0;
        const cobrado = parseFloat(this.ventaForm.get('montoPagado')?.value) || 0;
        this.saldoPendienteCalculado = total - cobrado;
        if (this.saldoPendienteCalculado < 0) this.saldoPendienteCalculado = 0;
    }

    editVenta(venta: OrdenVentaCacao) {
        this.editingVentaId = venta.id || null;
        
        this.ventaForm.reset({
            proveedor: this.proveedores.find(p => p.id === venta.proveedor.id),
            formaPago: venta.formaPago,
            montoPagado: venta.montoPagado || venta.total || 0,
            cuentaBancariaId: venta.cuentaBancariaId ? this.cuentasBancarias.find(c => c.id === venta.cuentaBancariaId) : null,
            notas: venta.notas,
            quintales: venta.quintales,
            total: venta.total
        });

        // Limpiar filas anteriores
        while (this.detallesFormArray.length !== 0) {
            this.detallesFormArray.removeAt(0);
        }

        // Agregar las filas recuperadas
        venta.detalles.forEach(d => {
            this.addDetailRow(d);
        });

        this.displayVentaDialog = true;
    }

    onSubmitVenta() {
        if (this.ventaForm.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Formulario Inválido', detail: 'Por favor complete todos los datos obligatorios.' });
            return;
        }

        this.guardandoVenta = true;
        const formValue = this.ventaForm.value;

        // Mapear los detalles del FormArray asegurando que traiga la estructura de tipoCacao id
        const detallesMapeados: DetalleVentaCacao[] = this.detallesFormArray.getRawValue().map((d: any) => ({
            id: d.id,
            tipoCacao: { id: d.tipoCacao.id },
            quintales: parseFloat(d.quintales),
            precioPorQuintal: parseFloat(d.precioPorQuintal)
        }));

        const payload: OrdenVentaCacao = {
            id: this.editingVentaId || undefined,
            fecha: this.formatearFechaLocal(new Date()),
            proveedor: { id: formValue.proveedor.id } as Proveedor,
            formaPago: formValue.formaPago,
            montoPagado: parseFloat(formValue.montoPagado),
            cuentaBancariaId: formValue.cuentaBancariaId?.id,
            notas: formValue.notas,
            detalles: detallesMapeados
        };

        if (this.editingVentaId) {
            this.ventaCacaoService.actualizarVenta(this.editingVentaId, payload).subscribe({
                next: () => {
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Orden de venta actualizada correctamente.' });
                    this.guardandoVenta = false;
                    this.displayVentaDialog = false;
                    this.cargarVentas();
                },
                error: (err) => {
                    console.error(err);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al actualizar la orden de venta.' });
                    this.guardandoVenta = false;
                }
            });
        } else {
            this.ventaCacaoService.registrarVenta(payload).subscribe({
                next: () => {
                    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Orden de venta registrada correctamente.' });
                    this.guardandoVenta = false;
                    this.displayVentaDialog = false;
                    this.cargarVentas();
                },
                error: (err) => {
                    console.error(err);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al registrar la orden de venta.' });
                    this.guardandoVenta = false;
                }
            });
        }
    }

    desactivarVenta(venta: OrdenVentaCacao) {
        this.confirmationService.confirm({
            key: 'confirm',
            header: 'Confirmación de Eliminación',
            message: `¿Estás seguro de desactivar esta orden de venta? Esta acción no se puede deshacer.`,
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí, eliminar',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.ventaCacaoService.desactivarVenta(venta.id!).subscribe({
                    next: () => {
                        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Orden de venta desactivada correctamente.' });
                        this.cargarVentas();
                    },
                    error: (err) => {
                        console.error(err);
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo desactivar la orden de venta.' });
                    }
                });
            }
        });
    }

    verDetalles(venta: OrdenVentaCacao) {
        this.selectedVenta = venta;
        this.displayDetailDialog = true;
    }

    descargarPdf(id: number) {
        this.ventaCacaoService.descargarPdf(id).subscribe({
            next: () => {
                this.messageService.add({ severity: 'success', summary: 'Descarga exitosa', detail: 'El comprobante PDF ha sido descargado.' });
            },
            error: (err) => {
                console.error(err);
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo generar o descargar el archivo PDF.' });
            }
        });
    }

    formatearFechaLocal(fecha: Date): string {
        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${fecha.getFullYear()}-${pad(fecha.getMonth() + 1)}-${pad(fecha.getDate())}` +
               `T${pad(fecha.getHours())}:${pad(fecha.getMinutes())}:${pad(fecha.getSeconds())}`;
    }
}
