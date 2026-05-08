import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { ArticuloService } from 'src/app/demo/service/articulo.service';
import { Articulo } from 'src/app/models/articulo';
import { IngresoStock } from 'src/app/models/ingresoStock';

@Component({
    selector: 'app-inventario',
    templateUrl: './inventario.component.html',
    styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent implements OnInit {
    registerForm: FormGroup;
    errorMessage: string | null = null;
    msgs: Message[] = [];
    registerFormArticulo: FormGroup;
    updateFormIngresoStock: FormGroup;
    articulos: Articulo[] = [];
    ordenesIngreso:any[] = [];
    isEditMode: boolean = false;
    articuloSeleccionado: Articulo | null = null;

    //para un modal
    displayModal: boolean = false;
    ordenesIngresosModal: boolean = false;
    updateOrdenesIngresoModal: boolean = false;

    idArticuloSeleccionado: number = 0;
    idOrdenIngresoSeleccionado: number = 0;


    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
        private articuloService: ArticuloService,
        private confirmationService: ConfirmationService
    ) {
        this.registerForm = this.fb.group({
            codigo: [null, Validators.required],
            nombreArticulo: [{ value: '', disabled: true }],
            fechaIngreso: [new Date(), Validators.required],
            fechaVencimiento: [new Date(), Validators.required],
            unidades: [
                '',
                [Validators.required, Validators.pattern('^[0-9]*$')],
            ],
            precioVenta: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],

            precioCompra: [
                '',
                [
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
        });

        this.updateFormIngresoStock=this.fb.group({
            nombreArticulo: [{ value: '', disabled: true }],
            fechaIngreso: [new Date(), Validators.required],
            fechaVencimiento: [new Date(), Validators.required],
            unidades: [
                '',
                [Validators.required, Validators.pattern('^[0-9]*$')],
            ],
            precioVenta: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],

            precioCompra: [
                '',
                [
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
        });

        this.registerFormArticulo = this.fb.group({
            nombreArticulo: ['', Validators.required],
            descripcion: [''],
            permiteFracciones: [false]
        });
    }
    onClear() {
        this.registerForm.reset();
        this.registerForm.patchValue({
            fechaIngreso: new Date(),
            fechaVencimiento: new Date(),
        });
    }

    showArticuloModalDialog() {
        this.isEditMode = false;
        this.displayModal = true;
    }

    showEditArticuloDialog(articulo: Articulo, event: Event): void {
        event.stopPropagation();
        this.isEditMode = true; // Modo edición activado
        this.articuloSeleccionado = articulo;
        // Pre-cargar el formulario con los datos del artículo seleccionado
        this.registerFormArticulo.patchValue({
            nombreArticulo: articulo.nombreArticulo,
            descripcion: articulo.descripcion,
            permiteFracciones: articulo.permiteFracciones || false
        });

        this.displayModal = true;
    }

    closeModalDialog() {
        this.registerFormArticulo.reset();
        this.articuloSeleccionado = null;
        this.displayModal = false;
    }


    openOrdenesIngresoModalDialog(){
        this.ordenesIngresosModal = true;
        this.listarIngresosOrdenesArticulos();
    }

    closeDialogOrdenesIngreso(){
        this.ordenesIngresosModal=false;
    }

    /** Convierte cualquier valor de fecha (string YYYY-MM-DD, array [y,m,d], timestamp o Date) en un objeto Date válido */
    private parseFecha(valor: any): Date {
        if (!valor) return new Date();
        // Si ya es un Date válido, devuélvelo tal cual
        if (valor instanceof Date && !isNaN(valor.getTime())) return valor;
        // Si es un array [year, month, day] (formato que devuelve Jackson a veces)
        if (Array.isArray(valor) && valor.length >= 3) {
            return new Date(valor[0], valor[1] - 1, valor[2]);
        }
        // Si es string, forzar interpretación local añadiendo T00:00:00
        if (typeof valor === 'string') {
            const conHora = valor.includes('T') ? valor : valor + 'T00:00:00';
            const d = new Date(conHora);
            if (!isNaN(d.getTime())) return d;
        }
        // Último recurso: intentar conversión directa
        const fallback = new Date(valor);
        return isNaN(fallback.getTime()) ? new Date() : fallback;
    }

    openDialogUpdateIngresoStock(ingreso:any){

        const fechaIngreso = this.parseFecha(ingreso.fechaIngreso);
        const fechaVencimiento = this.parseFecha(ingreso.fechaVencimiento);

        this.idArticuloSeleccionado=ingreso.articulo.id;

        console.log("ID del artículo seleccionado:", this.idArticuloSeleccionado);
        console.log("fechaIngreso raw:", ingreso.fechaIngreso, "→ parseada:", fechaIngreso);
        console.log("fechaVencimiento raw:", ingreso.fechaVencimiento, "→ parseada:", fechaVencimiento);
        this.idOrdenIngresoSeleccionado=ingreso.id;
    
        // Asignar las fechas al formulario
        this.updateFormIngresoStock.patchValue({
            nombreArticulo: ingreso.articulo.nombreArticulo,
            fechaIngreso: fechaIngreso,
            fechaVencimiento: fechaVencimiento,
            unidades: ingreso.unidades,
            precioVenta: ingreso.precioVenta,
            precioCompra: ingreso.precioCompra
        });
    
        // Abrir el modal
        this.updateOrdenesIngresoModal = true;
    }


    closeUpdateIngresoStock(){
        this.updateOrdenesIngresoModal=false;
    }

    onUpdateIngresoStock(){
        if (this.updateFormIngresoStock.invalid) {
            // Si el formulario no es válido, no procedas
            console.error("Formulario inválido");
            return;
        }
    
        // Construir el objeto que será enviado al backend
        const ingresoStock = {
            id: this.idOrdenIngresoSeleccionado, // id del registro que se actualiza
            articulo: {
                id: this.idArticuloSeleccionado // id del artículo seleccionado
            },
            fechaIngreso: this.updateFormIngresoStock.value.fechaIngreso.toISOString().split('T')[0], // Convertir a formato "YYYY-MM-DD"
            fechaVencimiento: this.updateFormIngresoStock.value.fechaVencimiento.toISOString().split('T')[0], // Igual que la fecha de ingreso
            unidades: this.updateFormIngresoStock.value.unidades,
            precioVenta: this.updateFormIngresoStock.value.precioVenta,
            precioCompra: this.updateFormIngresoStock.value.precioCompra
        };

        console.log("JSON enviado al backend:", ingresoStock);
    
        // Llamar al servicio para actualizar
        this.articuloService.actualizarIngresoStock(ingresoStock.id, ingresoStock).subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Orden de ingreso de artículo actualizada correctamente.',
                });
                this.closeUpdateIngresoStock(); 
                this.listarIngresosOrdenesArticulos();
            },
            (error) => {
                const errorMessage =
                    error.error?.message || 'Error al actualizar la orden.';this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                });
            }
        );
    }


    listarIngresosOrdenesArticulos(){
        this.articuloService.obtenerOrdenesIngresoArticulos().subscribe(
            (data) => {
                this.ordenesIngreso = data;
            },
            (error) => {
                console.error('Error al obtener las ordenes de ingreso:', error);
            }
        );
    }

    registrarOrdenIngresoStock() {
        const formValue = this.registerForm.value;
        console.log('Código del artículo:', formValue.codigo);
        const ordenData: IngresoStock = {
            id: 0,
            articulo: { id: formValue.codigo },
            fechaIngreso: formValue.fechaIngreso,
            unidades: formValue.unidades,
            precioVenta: formValue.precioVenta,
            precioCompra: formValue.precioCompra,
            fechaVencimiento: formValue.fechaVencimiento,
        };

        console.log('JSON enviado:', JSON.stringify(ordenData, null, 2));

        this.articuloService.registrarOrden(ordenData).subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Orden de ingreso de artículo registrado exitosamente.',
                });
                this.onClear();
                //this.registerForm.reset();
            },
            (error) => {
                const errorMessage =
                    error.error?.message || 'Error al registrar la orden.';this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                });
                console.error('Error al registrar la orden:', error);
            }
        );
    }


    confirmDeleteArticulo(articulo:Articulo,event: Event): void {
        event.stopPropagation();
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar el artículo ${articulo.nombreArticulo}?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarArticulo(articulo);
            },
        });
    }

    eliminarArticulo(articulo:Articulo){
        this.articuloService.eliminarUsuario(articulo.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Artículo eliminado correctamente',
                });
                this.cargarArticulos();
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al eliminar el artículo',
                });
            }
        );
    }

    onSubmitArticulo() {
        if (this.registerFormArticulo.valid) {
            const articuloData: Articulo = this.registerFormArticulo.value;

            if (this.isEditMode && this.articuloSeleccionado) {
                // Actualizar el artículo existente
                this.articuloService
                    .actualizarArticulo(
                        this.articuloSeleccionado.id,
                        articuloData
                    )
                    .subscribe({
                        next: () => {
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Éxito',
                                detail: 'Artículo actualizado con éxito',
                            });
                            this.cargarArticulos();
                            this.closeModalDialog();
                        },
                        error: (error) => {
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Error',
                                detail: 'Error al actualizar el artículo',
                            });
                            console.error(error);
                        },
                    });
            } else {
                // Registrar nuevo artículo
                this.articuloService.registrarArticulo(articuloData).subscribe({
                    next: (articulo) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Artículo registrado con éxito',
                        });
                        this.cargarArticulos(); // Recargar la lista de artículos
                        this.closeModalDialog();
                    },
                    error: (error) => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Error al registrar el artículo',
                        });
                        console.error(error);
                    },
                });
            }
        }
    }

    cargarArticulos() {
        this.articuloService.listarArticulos().subscribe(
            (data: Articulo[]) => {
                this.articulos = data;
            },
            (error) => {
                console.error('Error al obtener los articulos:', error);
            }
        );
    }

    ngOnInit(): void {
        this.cargarArticulos();
    }

    onTermInput(event: any) {
        const term = event.target.value;
        if (term.length >= 1) {
            this.articuloService.buscarArticulosPorNombre(term).subscribe(
                (data: Articulo[]) => {
                    this.articulos = data;
                },
                (error) => {
                    console.error('Error al buscar el artículo:', error);
                }
            );
        } else {
            this.cargarArticulos();
        }
    }

    onRowArticuloSeleccionado(event: any) {
        const articulo = event.data;
        console.log('Articulo seleccionado:', articulo);
        if (articulo) {
            this.registerForm.patchValue({
                codigo: articulo.id,
                nombreArticulo: articulo.nombreArticulo,
            });
        }
    }
}
