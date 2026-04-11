import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError, Observable, of, tap } from 'rxjs';
import { FijacionesService } from 'src/app/demo/service/fijaciones.service';
import { DetalleFijacion } from 'src/app/models/detalleFijacion';
import { Fijacion } from 'src/app/models/fijacion';

interface ExpandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-fijaciones',
    templateUrl: './fijaciones.component.html',
    styleUrls: ['./fijaciones.component.scss'],
})
export class FijacionesComponent implements OnInit {
    fijaciones: any[] = [];
    loading: boolean = true;
    expandedRows: ExpandedRows = {};
    isExpanded: boolean = false;

    searchForm: FormGroup;

    //para los modals
    dialogDetalleFijados: boolean = false;
    detalleFijadosForm: FormGroup;

    dialogDetalleEnviados: boolean = false;
    detalleEnviadosForm: FormGroup;

    totalQQFijados: number = 0;
    totalQQEnviados: number = 0;
    totalMultiplicacion: number = 0;
    qqPendientes: number = 0;
    totalCustodia: number = 0;
    totalTransporte: number = 0;
    sacosPendientes: number = 0;
    precioPromedio: number = 0;
    retencion: number = 0;
    precioNeto: number = 0;

    allFijacionesCortadas: boolean = true;

    esEdicion: boolean = false;

    constructor(
        private fijacionesService: FijacionesService,
        private messageService: MessageService,
        private fb: FormBuilder,
        private datePipe: DatePipe,
        private confirmationService: ConfirmationService
    ) {
        console.log('Constructor del componentr llamado');
        this.detalleFijadosForm = this.fb.group({
            id: [null],
            codFijacion: [null, Validators.required],
            fecha: [null, Validators.required],
            qqFijados: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            precio: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
        });
        this.detalleEnviadosForm = this.fb.group({
            id: [null],
            codFijacion: [null, Validators.required],
            fecha: [null, Validators.required],
            qqEnviados: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            custodia: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            transporte: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            totalTransporte: [{ value: '', disabled: true }],
            totalCustodia: [{ value: '', disabled: true }],
        });

        this.searchForm = this.fb.group({
            fechaI: [null],
            fechaF: [null],
        });
    }

    ngOnInit(): void {
        console.log('ngOnInit del componente llamado');
        this.listarFijaciones();
        this.inicializarFecha();
        
        this.detalleEnviadosForm.get('qqEnviados')?.valueChanges.subscribe(() => {
            this.calcularTotales();
        });

        this.detalleEnviadosForm.get('custodia')?.valueChanges.subscribe(() => {
            this.calcularTotales();
        });
    
        this.detalleEnviadosForm.get('transporte')?.valueChanges.subscribe(() => {
            this.calcularTotales();
        });
        
    }


    calcularTotales(): void {
        const qqEnviados = parseFloat(this.detalleEnviadosForm.get('qqEnviados')?.value) || 0;
        const custodia = parseFloat(this.detalleEnviadosForm.get('custodia')?.value) || 0;
        const transporte = parseFloat(this.detalleEnviadosForm.get('transporte')?.value) || 0;
    
        const totalCustodia = qqEnviados * custodia;
        const totalTransporte = qqEnviados * transporte;
    
        this.detalleEnviadosForm.get('totalCustodia')?.setValue(totalCustodia.toFixed(2), { emitEvent: false });
        this.detalleEnviadosForm.get('totalTransporte')?.setValue(totalTransporte.toFixed(2), { emitEvent: false });
    }



    inicializarFecha() {
        this.searchForm.patchValue({
            fechaI: new Date(),
            fechaF: new Date(),
        });
    }

    confirmDeleteDetalleFijacion(detalle: DetalleFijacion, fijacion: Fijacion) {
        this.confirmationService.confirm({
            key: 'confirmDelReg',
            message: `¿Deseas eliminar este registro?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.deleteRegistro(detalle.id, fijacion.id);
            },
        });
    }

    deleteRegistro(id: number, fijacionId: number) {
        this.fijacionesService.eliminarDetalle(id).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Registro eliminado',
                    detail: `El registro con ID ${id} ha sido eliminado correctamente.`,
                });

                // Imprimir el ID de la fijación
                console.log(`ID de la fijación eliminada: ${fijacionId}`);

                // Recalcular totales y listar detalles de la fijación actual
                const fijacion = this.fijaciones.find(
                    (f) => f.id === Number(fijacionId)
                );

                if (fijacion) {
                    this.listarDetallesFijaciones(fijacion).subscribe(
                        (detalles: DetalleFijacion[]) => {
                            if (detalles.length === 0) {
                                // Si no hay más registros, resetear los campos
                                console.log(
                                    'No quedan detalles, se procederá a resetear los campos.'
                                );
                                this.resetearCampos();
                            } else {
                                // Calcular totales con los detalles restantes
                                this.calcularTotalesFijacion(detalles);
                            }
                        }
                    );
                }

                // Cerrar el diálogo de confirmación
                this.confirmationService.close();
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Hubo un error al eliminar el registro.',
                });
                console.error('Error al eliminar el registro:', err);
            },
        });
    }
    registrarFijacion() {
        console.log('Método registrarFijacion llamado');
        this.fijacionesService.registrarFijacion().subscribe(
            (response) => {
                console.log('Respuesta recibida:', response);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Fijación registrada exitosamente.',
                });
                this.fijaciones.push(response);
                this.listarFijaciones();
            },
            (error) => {
                console.log('Error recibido:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al registrar la fijación.',
                });
            }
        );
    }

    confirmHacerCorteFijacion(fijacion: Fijacion) {
        this.confirmationService.confirm({
            key: 'confirmHaCorte',
            message: `¿Deseas finalizar este periodo de Fijacion?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.FinalizarCorte(fijacion);
            },
        });
    }

    FinalizarCorte(fijacion: Fijacion) {
        if (this.expandedRows[fijacion.id]) {
            // Si está expandida, la colapsamos
            delete this.expandedRows[fijacion.id];
        }
        this.fijacionesService.registrarCorte(fijacion.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Corte registrado exitosamente.',
                });
                this.listarFijaciones();
            },
            (error) => {
                console.error('Error al registrar el corte:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Ocurrió un error al registrar el corte.',
                });
            }
        );
    }

    listarFijaciones() {
        this.loading = true;
        this.fijacionesService.obtenerFijaciones().subscribe(
            (data) => {
                // Inicializa detalleFijacion para cada fijación
                this.fijaciones = data.map((fijacion) => ({
                    ...fijacion,
                    detalleFijacion: fijacion.detalleFijacion || [], // Inicializa como array vacío
                }));
                this.loading = false;
                this.checkAllFijacionesCortadas();
            },
            (error) => {
                console.error('Error al obtener las fijaciones', error);
                this.loading = false;
            }
        );
    }

    checkAllFijacionesCortadas() {
        this.allFijacionesCortadas =
            this.fijaciones.length === 0 ||
            this.fijaciones.every((fijacion) => fijacion.fechaCorte != null);
    }

    listarDetallesFijaciones(fijacion: Fijacion): Observable<any> {
        return this.fijacionesService
            .obtenerDetalleFijacionesId(fijacion.id)
            .pipe(
                tap((data) => {
                    fijacion.detalleFijacion = data || []; // Asegúrate de que sea un array
                    console.log(
                        `detalle de fijaciones para la fijacion ${fijacion.id}:`,
                        fijacion.detalleFijacion
                    );
                    this.calcularTotalesFijacion(fijacion.detalleFijacion);
                }),
                catchError((error) => {
                    console.error(
                        `Error al obtener los detalles de la fijacion ${fijacion.id}:`,
                        error
                    );
                    fijacion.detalleFijacion = []; // Asegúrate de restablecer a un array vacío
                    return of([]); // Retorna un array vacío para manejar errores
                })
            );
    }

    toggleRow(fijacion: Fijacion) {
        // Asegúrate de que detalleFijacion siempre sea un array
        if (!fijacion.detalleFijacion) {
            fijacion.detalleFijacion = [];
        }

        if (this.expandedRows[fijacion.id]) {
            delete this.expandedRows[fijacion.id];
        } else {
            this.expandedRows = {};

            // Verificar si la fijación no tiene detalles
            if (fijacion.detalleFijacion.length === 0) {
                this.resetearCampos();
                this.listarDetallesFijaciones(fijacion).subscribe(
                    (detalles: DetalleFijacion[]) => {
                        this.expandedRows[fijacion.id] = true;
                        fijacion.detalleFijacion = detalles;

                        // Si se cargaron detalles, realizar los cálculos
                        if (detalles.length > 0) {
                            this.calcularTotalesFijacion(detalles);
                        }
                    }
                );
            } else {
                // Si ya tiene detalles, simplemente expandir la fila y hacer los cálculos
                this.expandedRows[fijacion.id] = true;
                this.calcularTotalesFijacion(fijacion.detalleFijacion);
            }
        }
    }

    //Para registrar los detalles
    guardarOActualizarFijacion() {
        console.log('guardarOActualizarFijacion llamado');
        const formValue = this.detalleFijadosForm.value;
        const fechaLocal = new Date(formValue.fecha);
        const fechaUTC = this.convertToUTC(fechaLocal);

        // Crea el objeto DetalleFijacion
        const detalleFijados: DetalleFijacion = {
            id: this.esEdicion ? formValue.id : undefined, // Solo asignar ID si está en edición
            fijacion: { id: formValue.codFijacion },
            fecha: fechaUTC.toISOString(),
            qqFijados: parseFloat(formValue.qqFijados),
            precio: parseFloat(formValue.precio),
        };

        // Llama al servicio correspondiente según si está en modo de edición
        const accion = this.esEdicion
            ? this.fijacionesService.actualizarDetalle(
                  detalleFijados.id,
                  detalleFijados
              )
            : this.fijacionesService.registrarDetalle(detalleFijados);

        accion.subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: this.esEdicion
                        ? 'Fijación actualizada exitosamente'
                        : 'Fijación registrada exitosamente',
                });

                // Cerrar el diálogo y resetear el formulario
                this.closeFijadoDialog();
                this.detalleFijadosForm.reset();

                // Actualizar la lista de detalles de la fijación
                const fijacionId = formValue.codFijacion;
                const fijacion = this.fijaciones.find(
                    (f) => f.id === Number(fijacionId)
                );

                if (fijacion) {
                    this.listarDetallesFijaciones(fijacion).subscribe(
                        (detalles: DetalleFijacion[]) => {
                            this.calcularTotalesFijacion(detalles);
                        }
                    );
                }
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail:
                        'Ocurrió un error al ' +
                        (this.esEdicion ? 'actualizar' : 'registrar') +
                        ' la fijación.',
                });
            }
        );
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

    

    openDialogEdicion(detalle: DetalleFijacion) {
        this.esEdicion = true;
        const fecha = detalle.fecha
            ? new Date(detalle.fecha + 'T00:00:00')
            : null;

        if (detalle.qqFijados != null) {
            // Si qqFijados no es null, abre el diálogo de Fijados
            this.detalleFijadosForm.patchValue({
                id: detalle.id,
                codFijacion: detalle.fijacion.id,
                fecha: fecha,
                qqFijados: detalle.qqFijados,
                precio: detalle.precio,
            });
            this.dialogDetalleFijados = true;
        } else {
            // Si qqFijados es null, abre el diálogo de Enviados
            this.detalleEnviadosForm.patchValue({
                id: detalle.id,
                codFijacion: detalle.fijacion.id,
                fecha: fecha,
                qqEnviados: detalle.qqEnviados,
                custodia: detalle.custodia,
                transporte: detalle.transporte,
            });
            this.dialogDetalleEnviados = true;
        }
    }

    openNuevoFijadosDialog(fijacion: Fijacion) {
        this.esEdicion = false;
        this.detalleFijadosForm.patchValue({
            codFijacion: fijacion.id,
            fecha: new Date(),
        });
        this.dialogDetalleFijados = true;
    }

    closeFijadoDialog() {
        this.dialogDetalleFijados = false;
        this.detalleFijadosForm.reset();
    }

    /*openEnviadosDialog(detalle:DetalleFijacion) {
        this.esEdicion=true;
        const fechaEnvio= detalle.fecha?new Date(detalle.fecha+'T00:00:00'):null;
        this.detalleEnviadosForm.patchValue({
            id:detalle.id,
            codFijacion: detalle.fijacion.id,
            fecha: fechaEnvio,
            qqEnviados:detalle.qqEnviados,
            custodia:detalle.custodia,
            transporte:detalle.transporte
        });
        this.dialogDetalleEnviados = true;
    }*/
    openNewEnviadosDialog(fijacion: Fijacion) {
        this.esEdicion = false;
        this.detalleEnviadosForm.patchValue({
            codFijacion: fijacion.id,
            fecha: new Date(),
        });
        this.dialogDetalleEnviados = true;
    }
    closeEnviadosDialog() {
        this.dialogDetalleEnviados = false;
        this.detalleEnviadosForm.reset();
    }

    registrarDetalleEnviados() {
        console.log('registrarDetalleEnviadosllamado');
        const formValueEnviado = this.detalleEnviadosForm.value;
        const fechaLocal = new Date(formValueEnviado.fecha);
        const fechaUTC = this.convertToUTC(fechaLocal);

        const detalleEnviados: DetalleFijacion = {
            id: this.esEdicion ? formValueEnviado.id : undefined,
            fijacion: { id: formValueEnviado.codFijacion },
            fecha: fechaUTC.toISOString(),
            qqEnviados: parseFloat(formValueEnviado.qqEnviados),
            custodia: parseFloat(formValueEnviado.custodia),
            transporte: parseFloat(formValueEnviado.transporte),
        };
        console.log('JSON enviado:', JSON.stringify(detalleEnviados, null, 2));

        const accion = this.esEdicion
            ? this.fijacionesService.actualizarDetalle(
                  detalleEnviados.id,
                  detalleEnviados
              )
            : this.fijacionesService.registrarDetalle(detalleEnviados);

        accion.subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: this.esEdicion
                        ? 'Registro de envio actualizada exitosamente'
                        : 'Registro de envio registrada exitosamente',
                });
                this.closeEnviadosDialog();
                this.detalleEnviadosForm.reset();
                const fijacionId = formValueEnviado.codFijacion;
                const fijacion = this.fijaciones.find(
                    (f) => f.id === Number(fijacionId)
                );

                if (fijacion) {
                    this.listarDetallesFijaciones(fijacion).subscribe(
                        (detalles: DetalleFijacion[]) => {
                            this.calcularTotalesFijacion(detalles);
                        }
                    );
                }
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail:
                        'Ocurrió un error al ' +
                        (this.esEdicion ? 'actualizar' : 'registrar') +
                        ' el registro de envio.',
                });
            }
        );
    }
    calcularTotalesFijacion(detalles: DetalleFijacion[]): void {
        if (!detalles || detalles.length === 0) {
            console.log('No hay detalles de fijación.');
            return;
        }
        this.totalQQFijados = detalles.reduce(
            (sum, detalle) => sum + (detalle.qqFijados || 0),
            0
        );
        this.totalQQEnviados = detalles.reduce(
            (sum, detalle) => sum + (detalle.qqEnviados || 0),
            0
        );

        this.totalMultiplicacion = detalles.reduce(
            (sum, detalle) =>
                sum + (detalle.qqFijados || 0) * (detalle.precio || 0),
            0
        );

        this.qqPendientes = +(
            this.totalQQFijados - this.totalQQEnviados
        ).toFixed(2);
        this.sacosPendientes = +(this.qqPendientes / 1.5).toFixed(2);

        this.precioPromedio =
            this.totalQQFijados > 0
                ? +(this.totalMultiplicacion / this.totalQQFijados).toFixed(2)
                : 0;

        this.retencion =
            this.precioPromedio > 0
                ? +((this.precioPromedio * 1.75) / 100).toFixed(3)
                : 0;

        const totalCustodia = detalles.reduce(
            (sum, detalle) => sum + (detalle.custodia || 0),
            0
        );
        const totalTransporte = detalles.reduce(
            (sum, detalle) => sum + (detalle.transporte || 0),
            0
        );

        this.precioNeto = +(
            this.precioPromedio -
            this.retencion -
            totalCustodia -
            totalTransporte
        ).toFixed(2);
    }

    resetearCampos(): void {
        this.totalQQFijados = 0;
        this.totalQQEnviados = 0;
        this.totalMultiplicacion = 0;
        this.qqPendientes = 0;
        this.sacosPendientes = 0;
        this.precioPromedio = 0;
        this.retencion = 0;
        this.precioNeto = 0;
    }

    cargarFijacionesPorFecha() {
        const fechaInicio = this.searchForm.get('fechaI')?.value;
        const fechaFin = this.searchForm.get('fechaF')?.value;
        const formattedFechaInicio =
            this.datePipe.transform(fechaInicio, 'yyyy-MM-dd') || '';
        const formattedFechaFin =
            this.datePipe.transform(fechaFin, 'yyyy-MM-dd') || '';

        this.fijacionesService
            .obtenerobtenerFijacionesPorFecha(
                formattedFechaInicio,
                formattedFechaFin
            )
            .subscribe(
                (data: Fijacion[]) => {
                    this.fijaciones = data;
                },
                (error) => {
                    console.error('Error al obtener las fijaciones');
                }
            );
    }
    limpiarControles() {
        this.searchForm.reset();
        this.listarFijaciones();
        this.inicializarFecha();
    }
}
