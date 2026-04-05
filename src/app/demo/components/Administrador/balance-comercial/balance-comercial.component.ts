import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { BalanceService } from 'src/app/demo/service/balance.service';
import {
    Balance,
    Gasto,
    TipoGasto,
    TransaccionBalance,
} from 'src/app/models/balance';

@Component({
    selector: 'app-balance-comercial',
    templateUrl: './balance-comercial.component.html',
    styleUrls: ['./balance-comercial.component.scss'],
})
export class BalanceComercialComponent implements OnInit {
    balances: Balance[] = [];
    selectedBalance: Balance | null = null;
    transaccionesCompra: TransaccionBalance[] = [];
    transaccionesVenta: TransaccionBalance[] = [];
    gastos: any[] = [];
    openViewBalanceModel: boolean = false;

    dialogTransaccion: boolean = false;
    transaccionForm: FormGroup;
    tipoTransaccion: 'compra' | 'venta' = 'compra';
    selectedTransaccionId: number | null = null;

    dialogUpdateTransaccion: boolean = false;
    updateTransaccionForm: FormGroup;

    tiposGastos: any[] = [];
    dialogGastos: boolean = false;
    gastosForm: FormGroup;

    currentBalanceId: number = 0;

    totalQqCompra: number = 0;
    totalCompra: number = 0;
    promedioCompra: number = 0;

    totalQqVenta: number = 0;
    totalVenta: number = 0;
    promedioVenta: number = 0;

    totalGastos: number = 0;
    sacosVenta: number = 0;
    sacosCompra: number = 0;
    perdidaQQ: number = 0;
    porcentajePerdidaQQ: number = 0;

    sumaTotal: number = 0;
    utilidadNeta: number = 0;

    isEditMode: boolean = false;
    selectedGastoId: number | null = null;
    selectedTipo: TipoGasto | null = null;

    labelQQ: string = 'Pérdida QQ';
    labelPorcentaje: string = '% de Pérdida';
    qqColor: string = 'red';


    constructor(
        private balanceService: BalanceService,
        private messageService: MessageService,
        private fb: FormBuilder,
        private confirmationService: ConfirmationService
    ) {
        this.transaccionForm = this.fb.group({
            id: [null],
            fecha: [null, Validators.required],
            descripcion: [null, Validators.required],
            qqNetos: [null, Validators.required],
            precio: [null, Validators.required],
        });

        this.updateTransaccionForm = this.fb.group({
            id: [null],
            fecha: [null, Validators.required],
            descripcion: [null, Validators.required],
            qqNetos: [null, Validators.required],
            precio: [null, Validators.required],
            tipo: [null, Validators.required],
        });
        this.gastosForm = this.fb.group({
            id: [null],
            tipoGasto: [null, Validators.required],
            montoPagado: [null, Validators.required],
        });
    }

    ngOnInit(): void {
        this.listarBalances();
        this.obtenerTiposGastos();
    }

    openViewBalance(codBalance: number): void {

        const balance = this.balances.find(b => b.id === codBalance);

        
        if (balance) {
          this.selectedBalance = balance;
          this.openViewBalanceModel = true;
          this.currentBalanceId = codBalance;
      
          // Listar transacciones y otros datos asociados a este balance
          this.listarTransaccionesComprasPorBalance(codBalance);
          this.listarTransaccionesVentasPorBalance(codBalance);
          this.listarGastosPorBalance(codBalance);
        } else {
          // Si no se encuentra el balance, tal vez mostrar un mensaje de error o tomar alguna acción
          console.error('Balance no encontrado con el id:', codBalance);
        }
    }
    closeViewBalance() {
        this.openViewBalanceModel = false;
    }

    openTransaccionDialog(tipo: 'compra' | 'venta') {
        this.tipoTransaccion = tipo;
        this.dialogTransaccion = true;
        this.transaccionForm.patchValue({ fecha: new Date() });
    }

    closeTransaccionDialog() {
        this.dialogTransaccion = false;
        this.transaccionForm.reset();
    }

    confirmDeleteTransaccion(trancaccion: TransaccionBalance) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar este registro?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarTransaccion(trancaccion);
            },
        });
    }

    confirmDeleteGasto(gasto: Gasto) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar este registro?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarGasto(gasto);
            },
        });
    }

    eliminarTransaccion(trancaccion: TransaccionBalance) {
        const tipo = trancaccion.tipo;
        this.balanceService.eliminarTransaccion(trancaccion.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Registro eliminado correctamente',
                });
                if (tipo === 'C') {
                    this.listarTransaccionesComprasPorBalance(
                        this.currentBalanceId
                    );
                } else {
                    this.listarTransaccionesVentasPorBalance(
                        this.currentBalanceId
                    );
                }
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al elimminar el registro',
                });
            }
        );
    }


    eliminarGasto(gasto:Gasto){
        this.balanceService.eliminarGasto(gasto.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Registro eliminado correctamente',
                });
                this.listarGastosPorBalance(this.currentBalanceId);
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al elimminar el registro',
                });
            }
        );
    }


    openUpdTransaccionDialog(transaccion: TransaccionBalance) {
        this.selectedTransaccionId = transaccion.id;
        const tipoTransaccion = transaccion.tipo === 'C' ? 'Compra' : 'Venta';
        let fechaT = null;
        if (transaccion.fecha) {
            // Creamos un objeto Date sin concatenar 'T00:00:00' si ya es un string ISO válido
            const fechaLocal = new Date(transaccion.fecha);
            if (!isNaN(fechaLocal.getTime())) {
                // Verificamos que sea una fecha válida
                fechaT = fechaLocal;
            }
        }

        this.updateTransaccionForm.patchValue({
            ...transaccion,
            fecha: fechaT,
            tipo: tipoTransaccion,
        });

        this.dialogUpdateTransaccion = true;
    }

    closeUpdTransaccionDialog() {
        this.dialogUpdateTransaccion = false;
        this.updateTransaccionForm.reset();
    }

    openGastoDialog() {
        this.isEditMode = false;
        this.dialogGastos = true;
        this.obtenerTiposGastos();
    }

    openGastoDialogUpd(gasto: Gasto) {
        this.isEditMode = true;
        this.selectedGastoId = gasto.id;
        this.selectedTipo = gasto.tiposGastos;
        this.gastosForm.patchValue({
            id: gasto.id,
            tipoGasto: this.selectedTipo,
            montoPagado: gasto.montoPagado,
        });
        console.log(this.tiposGastos);
        this.dialogGastos = true;
    }

    closeGastoDialog() {
        this.dialogGastos = false;
        this.selectedGastoId = null;
        this.selectedTipo = null;
        this.gastosForm.reset();
    }

    listarBalances() {
        this.balanceService.listarBalances().subscribe(
            (data: Balance[]) => {
                this.balances = data;
            },
            (error) => {
                console.error('Error al cargar los datos:', error);
            }
        );
    }

    listarTransaccionesComprasPorBalance(codBalance: number): void {
        this.balanceService
            .listarTransaccionesCompraPorBalance(codBalance)
            .subscribe(
                (data: TransaccionBalance[]) => {
                    this.transaccionesCompra = data;
                    this.calcularTotales();
                },

                (error) => {
                    console.error('Error al cargar las transacciones:', error);
                }
            );
    }

    listarTransaccionesVentasPorBalance(codBalance: number): void {
        this.balanceService
            .listarTransaccionesVentaPorBalance(codBalance)
            .subscribe(
                (data: TransaccionBalance[]) => {
                    this.transaccionesVenta = data;
                    this.calcularTotales();
                },
                (error) => {
                    console.error('Error al cargar las transacciones:', error);
                }
            );
    }

    listarGastosPorBalance(codBalance: number): void {
        this.balanceService.listarGastosPorBalance(codBalance).subscribe(
            (data: any[]) => {
                this.gastos = data;
                this.calcularTotales();
            },
            (error) => {
                console.error('Error al cargar los gastos:', error);
            }
        );
    }

    registrarTransaccion() {
        const fechaLocal = this.transaccionForm.value.fecha; // Obtén la fecha local
        const fechaUTC = this.convertToUTC(fechaLocal); // Convierte a UTC

        const transaccionData: TransaccionBalance = {
            id: 0,
            fecha: fechaUTC,
            descripcion: this.transaccionForm.value.descripcion,
            qqNetos: this.transaccionForm.value.qqNetos,
            precio: this.transaccionForm.value.precio,
            total: this.transaccionForm.value.total,
            tipo: this.tipoTransaccion === 'compra' ? 'C' : 'V', // Define el tipo automáticamente
        };

        console.log(`Registrando ${this.tipoTransaccion}:`, transaccionData);

        this.balanceService.registrarTransaccion(transaccionData).subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Transacción registrada correctamente.',
                });
                this.closeTransaccionDialog();
                this.listarTransaccionesComprasPorBalance(
                    this.currentBalanceId
                );
                this.listarTransaccionesVentasPorBalance(this.currentBalanceId);
            },
            (error) => {
                console.error('Error al registrar la transacción:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo registrar la transacción.',
                });
            }
        );
    }

    //Para actualizar una transaccion
    actualizarTransaccion() {
        const fechaLocal = this.updateTransaccionForm.value.fecha; // Obtén la fecha local
        const fechaUTC = this.convertToUTC(fechaLocal);

        const trancaccion: TransaccionBalance = {
            id: this.updateTransaccionForm.get('id')?.value,
            fecha: fechaUTC,
            descripcion: this.updateTransaccionForm.get('descripcion')?.value,
            qqNetos: this.updateTransaccionForm.get('qqNetos')?.value,
            precio: this.updateTransaccionForm.get('precio')?.value,
        };
        if (this.selectedTransaccionId !== null) {
            this.balanceService
                .actualizarRegistro(this.selectedTransaccionId, trancaccion)
                .subscribe(
                    (response) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Transacción actualizada correctamente.',
                        });
                        this.closeUpdTransaccionDialog();
                        this.listarTransaccionesComprasPorBalance(
                            this.currentBalanceId
                        );
                        this.listarTransaccionesVentasPorBalance(
                            this.currentBalanceId
                        );
                    },
                    (error) => {
                        console.error(
                            'Error al registrar la transacción:',
                            error
                        );
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'No se pudo registrar la transacción.',
                        });
                    }
                );
        }
    }

    convertToUTC(fechaLocal: Date): Date {
        return new Date(
            Date.UTC(
                fechaLocal.getFullYear(),
                fechaLocal.getMonth(),
                fechaLocal.getDate(),
                fechaLocal.getHours(),
                fechaLocal.getMinutes(),
                fechaLocal.getSeconds()
            )
        );
    }

    obtenerTiposGastos() {
        this.balanceService.obtenerTiposGastos().subscribe((data) => {
            this.tiposGastos = data;
            console.log('Tipos de gastos cargados: ', this.tiposGastos);
        });
    }

    registrarGasto() {
        const selectedTipoGasto = this.gastosForm.value.tipoGasto;

        const gasto: Gasto = {
            id: this.selectedGastoId ?? 0, // Usar el ID del gasto seleccionado si estamos en modo de edición
            tiposGastos: {
                id: selectedTipoGasto?.id ?? selectedTipoGasto, // Manejar el caso donde el valor sea un objeto o un ID
            },
            montoPagado: parseFloat(this.gastosForm.value.montoPagado),
        };

        let request$: Observable<Gasto>;

        if (this.isEditMode) {
            // Llamada al servicio para actualizar el gasto existente
            request$ = this.balanceService.actualizarGasto(
                this.selectedGastoId || 0,
                gasto
            );
        } else {
            // Llamada al servicio para registrar un nuevo gasto
            request$ = this.balanceService.registrarGasto(gasto);
        }

        request$.subscribe(
            (response) => {
                const successMessage = this.isEditMode
                    ? 'Gasto actualizado correctamente.'
                    : 'Gasto registrado correctamente.';
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: successMessage,
                });
                this.closeGastoDialog();
                this.listarGastosPorBalance(this.currentBalanceId); // Actualiza la lista de gastos
            },
            (error) => {
                const errorMessage = this.isEditMode
                    ? 'No se pudo actualizar el gasto.'
                    : 'No se pudo registrar el gasto.';
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                });
            }
        );
    }

    calcularTotales(): void {
        this.totalQqCompra = parseFloat(
            this.transaccionesCompra
                .reduce((sum, item) => sum + (item.qqNetos || 0), 0)
                .toFixed(2)
        );

        this.totalCompra = parseFloat(
            this.transaccionesCompra
                .reduce((sum, item) => sum + (item.total || 0), 0)
                .toFixed(3)
        );

        this.promedioCompra =
            this.totalQqCompra > 0
                ? parseFloat((this.totalCompra / this.totalQqCompra).toFixed(3))
                : 0;

        this.totalQqVenta = parseFloat(
            this.transaccionesVenta
                .reduce((sum, item) => sum + (item.qqNetos || 0), 0)
                .toFixed(2)
        );

        this.totalVenta = parseFloat(
            this.transaccionesVenta
                .reduce((sum, item) => sum + (item.total || 0), 0)
                .toFixed(2)
        );
        this.promedioVenta =
            this.totalQqVenta > 0
                ? parseFloat((this.totalVenta / this.totalQqVenta).toFixed(3))
                : 0;

        this.totalGastos = parseFloat(
            this.gastos
                .reduce((sum, item) => sum + (item.montoPagado || 0), 0)
                .toFixed(2)
        );

        //sacos
        this.sacosVenta = Math.floor((this.totalQqVenta / 1.5) * 100) / 100;
        this.sacosCompra = Math.floor((this.totalQqCompra / 1.5) * 100) / 100;


        //Perdida de QQ
        this.perdidaQQ = parseFloat(
            (this.totalQqVenta - this.totalQqCompra).toFixed(3)
        );
        this.porcentajePerdidaQQ = parseFloat(
            ((this.perdidaQQ / this.totalQqCompra) * 100).toFixed(2)
        );


        this.labelQQ = this.perdidaQQ >= 0 ? 'Ganancia QQ' : 'Pérdida QQ';
        this.labelPorcentaje = this.perdidaQQ >= 0 ? '% de Ganancia' : '% de Pérdida';
        this.qqColor = this.perdidaQQ >= 0 ? 'green' : 'red';
        this.perdidaQQ = Math.abs(this.perdidaQQ);
        this.porcentajePerdidaQQ=Math.abs(this.porcentajePerdidaQQ);

        //Utilidad Neta
        this.sumaTotal = parseFloat(
            (this.totalVenta - this.totalCompra).toFixed(2)
        );
        this.utilidadNeta = parseFloat(
            (this.sumaTotal - this.totalGastos).toFixed(2)
        );
    }
}
