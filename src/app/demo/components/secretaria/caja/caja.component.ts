import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { CajaService } from 'src/app/demo/service/caja.service';
import { LoginService } from 'src/app/demo/service/login.service';

@Component({
    selector: 'app-caja',
    templateUrl: './caja.component.html',
    styleUrls: ['./caja.component.scss'],
})
export class CajaComponent implements OnInit {
    menuItems!: MenuItem[];

    //para abrir caja;
    openCajaModal: boolean = false;
    openCajaForm: FormGroup;
    timeInterval: any;

    //Para registrar Transaccion
    openTransaccionModal: boolean = false;
    openTransaccionForm: FormGroup;
    tipoTransaccion: any[] = [];

    //Para ver todas las transacciones
    openViewCajaModal: boolean = false;
    // openViewCajaForm: FormGroup;
    ingresos: any[] = [];
    egresos: any[] = [];

    totalIngresos: number = 0;
    totalEgresos: number = 0;

    cajasRegistradas: any[] = [];

    cajaDetalle: any;
    openDetalleCajaModal: boolean = false;

    //para cerrar caja
    closeCajaModal: boolean = false;
    closeCajaForm: FormGroup;

    idCaja: number;
    isGerente: boolean;
    isSecretario: boolean;

    constructor(
        private fb: FormBuilder,
        private cajaService: CajaService,
        private messageService: MessageService,
        private datePipe: DatePipe,
        private confirmationService: ConfirmationService,
        private loginService: LoginService,
        private router: Router
    ) {
        this.idCaja = 0;
        this.openCajaForm = this.fb.group({
            idCaja: [null],
            fechaApertura: [null, Validators.required],
            saldoInicial: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
        });

        this.closeCajaForm = this.fb.group({
            idCaja: [null],
            fechaCierre: [null, Validators.required],
            efectivoCaja: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
        });

        this.openTransaccionForm = this.fb.group({
            idCaja: [null],
            tipoTransaccion: [null, Validators.required],
            fechaHora: [null, Validators.required],
            descripcion: [null, Validators.required],
            monto: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
        });
        this.isGerente = this.loginService.isGerente();
        this.isSecretario = this.loginService.isSecretario();
    }

    ngOnInit(): void {
        this.registrarAperturaCaja();
        this.listarCaja();
        this.obtenerTiposTransaccion();
    }

    isNuevaTransaccionButtonDisabled(caja: any): boolean {
        return this.isSecretario && caja.estado === false;
    }

    isEliminarTransaccionButtonDisabled(transaccion: any, idCaja: number): boolean {
        const caja = this.cajasRegistradas.find(c => c.id === idCaja); 
        return this.isSecretario && caja && caja.estado === false;
    }


    //Metodos para abrir Caja
    openCajaDialog() {
        this.openCajaModal = true;
        this.updateTime();
        this.timeInterval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    closeCajaDialog() {
        this.openCajaModal = false;
        this.openCajaForm.reset();
        clearInterval(this.timeInterval);
    }

    registrarAperturaCaja() {
        this.openCajaForm.patchValue({
            fechaApertura: new Date(),
        });
    }

    updateTime() {
        this.openCajaForm.patchValue({
            fechaApertura: new Date(),
        });
    }

    ngOnDestroy(): void {
        clearInterval(this.timeInterval);
    }

    onSubmitOpenCaja(): void {
        if (this.openCajaForm.valid) {
            this.cajaService.abrirCaja(this.openCajaForm.value).subscribe({
                next: (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Caja abierta correctamente',
                    });
                    this.closeCajaDialog();
                    this.listarCaja();
                },
                error: (err) => {
                    console.log(err);

                    const errorMessage =
                        err.error?.message || 'Error desconocido';
                    if (
                        err.status === 400 &&
                        errorMessage === 'Ya existe una caja abierta.'
                    ) {
                        this.messageService.add({
                            severity: 'warn',
                            summary: 'Advertencia',
                            detail: 'Ya existe una caja abierta. Cierra la caja actual antes de abrir una nueva.',
                        });
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: errorMessage,
                        });
                    }
                },
            });
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Formulario inválido',
            });
        }
    }
    //Metodos oaea registrar transaccion en caja
    openTransaccionDialog(idCaja: number) {
        this.openTransaccionModal = true;
        this.openTransaccionForm.patchValue({ idCaja: idCaja });
        this.updateTimeTransaccion();
        this.timeInterval = setInterval(() => {
            this.updateTimeTransaccion();
        }, 1000);
    }

    closeTransaccionDialog() {
        this.openTransaccionModal = false;
        this.openTransaccionForm.reset();
    }

    registrarTransaccionCaja() {
        this.openTransaccionForm.patchValue({
            fechaHora: new Date(),
        });
    }

    updateTimeTransaccion() {
        this.openTransaccionForm.patchValue({
            fechaHora: new Date(),
        });
    }

    obtenerTiposTransaccion() {
        this.cajaService.obtenerTiposTransaccion().subscribe((data) => {
            this.tipoTransaccion = data;
        });
    }

    onSubmitTransaccion() {
        if (this.openTransaccionForm.valid) {
            const fechaHoraLocal = this.openTransaccionForm.value.fechaHora;

            // Crear objeto Date con la fecha y hora local
            const fechaHora = new Date(fechaHoraLocal);

            // Convertir a UTC
            const fechaHoraUTC = new Date(
                Date.UTC(
                    fechaHora.getFullYear(),
                    fechaHora.getMonth(),
                    fechaHora.getDate(),
                    fechaHora.getHours(),
                    fechaHora.getMinutes(),
                    fechaHora.getSeconds()
                )
            ).toISOString();

            const transaccionData = {
                caja: {
                    id: this.openTransaccionForm.value.idCaja,
                },
                tipoTransaccion: {
                    id: this.openTransaccionForm.value.tipoTransaccion.id,
                },
                fechaHora: fechaHoraUTC, // Enviar en formato UTC
                descripcion: this.openTransaccionForm.value.descripcion,
                monto: parseFloat(this.openTransaccionForm.value.monto),
            };

            console.log('Datos enviados:', transaccionData);

            this.cajaService.registrarTransaccion(transaccionData).subscribe({
                next: (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Transacción registrada correctamente',
                    });
                    this.closeTransaccionDialog();
                    this.listarCaja();
                },
                error: (err) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al registrar la transacción',
                    });
                },
            });
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Formulario inválido',
            });
        }
    }

    //para ver todas las transacciones
    openViewCajaDialog(idCaja: number) {
        this.idCaja = idCaja;
        this.openViewCajaModal = true;
        const idTipoTransaccionIngreso = 1;
        const idTipoTransaccionEgreso = 2;
        this.listarTransacciones(
            idCaja,
            idTipoTransaccionIngreso,
            idTipoTransaccionEgreso
        );
    }

    listarTransacciones(
        idCaja: number,
        idTipoTransaccionIngreso: number,
        idTipoTransaccionEgreso: number
    ): void {
        this.cajaService
            .obtenerTransaccionesPorCaja(idCaja, idTipoTransaccionIngreso)
            .subscribe(
                (data: any[]) => {
                    this.ingresos = data;
                    this.totalIngresos = this.ingresos.reduce(
                        (sum, ingreso) => sum + ingreso.monto,
                        0
                    );
                },
                (error) => {
                    console.error('No se pueden cargar los ingresos', error);
                }
            );

        this.cajaService
            .obtenerTransaccionesPorCaja(idCaja, idTipoTransaccionEgreso)
            .subscribe(
                (data: any[]) => {
                    this.egresos = data;
                    this.totalEgresos = this.egresos.reduce(
                        (sum, egreso) => sum + egreso.monto,
                        0
                    );
                },
                (error) => {
                    console.error('No se pueden cargar los egresos', error);
                }
            );
    }

    formatHora(hora: string): string {
        // Suponiendo que hora esté en formato "HH:mm:ss"
        const [hours, minutes] = hora.split(':');
        return `${hours}:${minutes}`;
    }

    closeViewCajaDialog() {
        this.resetModal();
        this.openViewCajaModal = false;
        
    }

    resetModal() {
        this.ingresos = []; 
        this.egresos = [];
        this.totalIngresos = 0; 
        this.totalEgresos = 0; 
        
    }

    listarCaja(): void {
        this.cajaService.listarCajasDescendente().subscribe(
            (data: any[]) => {
                this.cajasRegistradas = data.map((caja) => {
                    caja.fechaApertura = this.datePipe.transform(
                        caja.fechaApertura,
                        'dd-MM-yyyy HH:mm'
                    );
                    caja.fechaCierre = caja.fechaCierre
                        ? this.datePipe.transform(
                              caja.fechaCierre,
                              'dd-MM-yyyy HH:mm'
                          )
                        : null;
                    return caja;
                });
            },
            (error) => {
                console.error(
                    'No se puede cargar los registros de caja',
                    error
                );
            }
        );
    }

    openViewDetalleCajaDialog(idCaja: number) {
        this.cajaService.obtenerCajaPorId(idCaja).subscribe(
            (data: any) => {
                this.cajaDetalle = data;
                this.openDetalleCajaModal = true;
            },
            (error) => {
                console.error('Error al obtener detalles de la caja', error);
            }
        );
    }

    closeViewDetalleCajaDialog() {
        this.openDetalleCajaModal = false;
        
    }

    //metodos para el cierre de caja
    onSubmitcloseCaja(): void {
        if (this.closeCajaForm.valid) {
            const formValue = this.closeCajaForm.value;
            const fechaCierreLocal = new Date(formValue.fechaCierre);
            const fechaCierreUTC = new Date(
                Date.UTC(
                    fechaCierreLocal.getFullYear(),
                    fechaCierreLocal.getMonth(),
                    fechaCierreLocal.getDate(),
                    fechaCierreLocal.getHours(),
                    fechaCierreLocal.getMinutes(),
                    fechaCierreLocal.getSeconds()
                )
            );
    
            const cierreCajaData = {
                cajaId: formValue.idCaja,
                fechaCierre: fechaCierreUTC.toISOString(),
                efectivoCaja: parseFloat(formValue.efectivoCaja),
            };
    
            const cajaId = this.closeCajaForm.get('idCaja')?.value;
    
            this.cajaService.cerrarCaja(cajaId, cierreCajaData).subscribe({
                next: (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Caja cerrada correctamente',
                    });
                    this.closeCerrarCaja();
                    this.listarCaja();
                },
                error: (err) => {
                    const errorMessage =
                        err.error?.message || 'Error desconocido';
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: errorMessage,
                    });
                },
            });
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Formulario inválido',
            });
        }
    }

    openCerrarCaja(cajaId: number) {
        this.closeCajaModal = true;
        this.closeCajaForm.patchValue({ idCaja: cajaId });
        this.updateTimeClose();
        this.timeInterval = setInterval(() => {
            this.updateTimeClose();
        }, 1000);
    }

    closeCerrarCaja() {
        this.closeCajaModal = false;
        this.closeCajaForm.reset();
    }

    updateTimeClose() {
        this.closeCajaForm.patchValue({
            fechaCierre: new Date(),
        });
    }

    //Para eliminar una transacion
    eliminarTransaccion(transaccion: any, idCaja: number) {
        const idTipoTransaccionIngreso = 1;
        const idTipoTransaccionEgreso = 2;
    
        this.cajaService.eliminarTransaccion(transaccion.id).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Transacción eliminada correctamente',
                });
    
                // Actualiza las listas de ingresos y egresos después de eliminar la transacción
                this.listarTransacciones(
                    idCaja,
                    idTipoTransaccionIngreso,
                    idTipoTransaccionEgreso
                );
                this.listarCaja();
            },
            error: (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: error.error.message || 'Error al eliminar la transacción',
                });
            }
        });
    }

    confirmDeleteTransaccion(transaccion: any, idCaja: number) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar esta transacción?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarTransaccion(transaccion, idCaja);
            },
        });
    }

    generarReporte(idCaja: number) {
        // Redirige a la ruta del reporte en otra ventana o en la misma, pasándole el ID de la caja
        const url = this.router.serializeUrl(
            this.router.createUrlTree(['/secretaria/caja/reporte'], { queryParams: { id: idCaja } })
        );
        window.open(url, '_blank');
    }
}
