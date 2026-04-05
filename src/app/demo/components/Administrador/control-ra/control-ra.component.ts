import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Console, error } from 'console';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ControlRaService } from 'src/app/demo/service/control-ra.service';
import { Contrato } from 'src/app/models/contrato';
import { ControlRA } from 'src/app/models/controlRa';

@Component({
    selector: 'app-control-ra',
    templateUrl: './control-ra.component.html',
    styleUrls: ['./control-ra.component.scss'],
})
export class ControlRaComponent implements OnInit {
    dialogRegistroTonelada: boolean = false;
    registroToneladaForm: FormGroup;
    controles: ControlRA[] = [];
    isEditMode: boolean = false;
    controlRASeleccionado: ControlRA | null = null;

    dialogContrato: boolean = false;
    newContratoForm: FormGroup;
    contratos: Contrato[] = [];
    contratosFiltrados: Contrato[] = [];
    //para editar
    selectedContrato: Contrato | null = null;
    editing: boolean = false;
    isDetail: boolean = false;

    currentLote: string = '';

    isSaving = false;

    //Para convertir de quilogramos a Kg
    kilogramosToQuintales: number = 0;

    estadoOptions: any[] = [
        { label: 'No Pagado', value: false },
        { label: 'Pagado', value: true },
    ];

    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
        private controlraService: ControlRaService,
        private confirmationService: ConfirmationService
    ) {
        this.registroToneladaForm = this.fb.group({
            tnAsignada: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            fechaInicio: [null, Validators.required],
            fechaFin: [null, Validators.required],
        });
        this.newContratoForm = this.fb.group({
            fecha: [null, Validators.required],
            kilogramos: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            contrato: [null, Validators.required],
            lote: [null],
            observacion: [null],
            estado: [null],
            placa: [null],
            fechaPago: [null],
        });
    }
    ngOnInit(): void {
        this.cargarControlesRa();
        this.cargarContratosRegistrados();
    }

    onKilogramosChange() {
        const kilogramos = this.newContratoForm.get('kilogramos')!.value;
        this.kilogramosToQuintales = kilogramos
            ? Math.floor((kilogramos / 45.36) * 100) / 100 +
              (Math.floor(((kilogramos / 45.36) * 1000) % 10) > 5 ? 0.01 : 0)
            : 0;
    }

    confirmDeactivate(control: ControlRA) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: '¿Deseas dar por finalizado este período?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deactivateControlRA(control);
            },
            reject: () => {
                console.log('Cambio de estado rechazado');
            },
            acceptLabel: 'Sí',
            rejectLabel: 'No',
        });
    }

    deactivateControlRA(control: ControlRA) {
        // Cambia el estado en el objeto
        const id = control.id ?? 0;
        this.controlraService.actualizarEstado(id).subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Estado cambiado a inactivo de forma exitosa',
                });
                this.cargarControlesRa();
            },
            (error) => {
                const errorMessage =
                    error.error.message ||
                    'Ocurrió un error al cambiar el estado';
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                });
            }
        );
    }

    confirmDeleteContrato(contrato: Contrato) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar el contrato con lote ${contrato.lote}?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarContrato(contrato);
            },
        });
    }

    eliminarContrato(contrato: Contrato) {
        this.controlraService.eliminarContrato(contrato.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Contrato eliminado correctamente',
                });
                this.cargarContratosRegistrados();
                this.cargarControlesRa();
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Erro al eliminar el contrato',
                });
            }
        );
    }

    closeRegistroTnDialog() {
        this.dialogRegistroTonelada = false;
        this.registroToneladaForm.reset();
    }
    openRegistroTnDialog() {
        this.registroToneladaForm.patchValue({
            fechaInicio: new Date(),
            fechaFin: new Date(),
        });
        this.dialogRegistroTonelada = true;
    }

    openEditTnDialog(controlRA: ControlRA) {
        this.isEditMode = true;
        this.controlRASeleccionado = controlRA;
        const fechaI = controlRA.fechaInicio
            ? new Date(controlRA.fechaInicio + 'T00:00:00')
            : null;
        const fechaF = controlRA.fechaFin
            ? new Date(controlRA.fechaFin + 'T00:00:00')
            : null;
        this.registroToneladaForm.patchValue({
            fechaInicio: fechaI,
            fechaFin: fechaF,
            tnAsignada: controlRA.tnAsignada,
        });
        this.dialogRegistroTonelada = true;
    }

    registrarTnAsignadas() {
        const formValue = this.registroToneladaForm.value;
        const fechaDesde = new Date(formValue.fechaInicio);
        const fechaHasta = new Date(formValue.fechaFin);
        const desdeUTC = this.convertToUTC(fechaDesde);
        const hastaUTC = this.convertToUTC(fechaHasta);

        const controlra: ControlRA = {
            id: 0,
            fechaInicio: desdeUTC.toISOString(),
            fechaFin: hastaUTC.toISOString(),
            tnAsignada: parseFloat(formValue.tnAsignada),
        };

        if (
            this.isEditMode &&
            this.controlRASeleccionado &&
            this.controlRASeleccionado.id !== undefined
        ) {
            const codigo = this.controlRASeleccionado.id;
            // Aquí iría el código para actualizar
            this.controlraService
                .actualizarTnAsignada(codigo, controlra)
                .subscribe(
                    (response) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Actualización de asignación de Tn realizada de forma exitosa',
                        });
                        this.closeRegistroTnDialog();
                        this.cargarControlesRa();
                    },
                    (error) => {
                        const errorMessage =
                            error.error.message ||
                            'Ocurrió un error en la actualización';
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: errorMessage,
                        });
                    }
                );
        } else {
            // Registrar nuevo ControlRA
            console.log('Estas en registro');
            this.controlraService.registrarTnAsignada(controlra).subscribe(
                (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Registro de asignación de Tn realizada de forma exitosa',
                    });
                    this.closeRegistroTnDialog();
                    this.cargarControlesRa();
                },
                (error) => {
                    const errorMessage =
                        error.error.message ||
                        'Ocurrió un error en el registro';
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: errorMessage,
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

    cargarControlesRa() {
        this.controlraService.obtenerControles().subscribe(
            (data: ControlRA[]) => {
                this.controles = data;
            },
            (error) => {
                console.error('Error al cargar los datos', error);
            }
        );
    }

    saveContrato() {
        const contrato: Contrato = this.newContratoForm.value;

        if (contrato.kilogramos != null && !isNaN(contrato.kilogramos)) {
            let quintalesExactos = contrato.kilogramos / 45.36;
            let truncado = Math.floor(quintalesExactos * 100) / 100; 
            let tercerDecimal = Math.floor((quintalesExactos * 1000) % 10);
        
            contrato.quintales = tercerDecimal > 5 ? truncado + 0.01 : truncado;
        } else {
            contrato.quintales = 0;
        }

        this.isSaving = true;

        if (this.editing && this.selectedContrato) {
            // Actualizamos contrato
            contrato.id = this.selectedContrato.id;
            this.controlraService.registrarContrato(contrato).subscribe(
                (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Contrato actualizado exitosamente',
                    });
                    this.closeContratoDialog();
                    this.cargarContratosRegistrados();
                    this.cargarControlesRa();
                    this.filtrarContratosPorLote(this.currentLote);
                },
                (error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al actualizar el contrato',
                    });
                },
                //poner segundos para desbailitar el boton
                () => {
                    setTimeout(() => {
                        this.isSaving = false;
                    }, 3000);
                }
            );
        } else {
            // Registra nuevo contrato
            this.controlraService.registrarContrato(contrato).subscribe(
                (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Contrato registrado correctamente',
                    });
                    this.closeContratoDialog();
                    this.cargarContratosRegistrados();
                    this.cargarControlesRa();
                },
                (error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al registrar el contrato',
                    });
                },
                () => {
                    setTimeout(() => {
                        this.isSaving = false;
                    }, 3000);
                }
            );
        }
    }

    closeContratoDialog() {
        this.dialogContrato = false;
        this.newContratoForm.reset();
        this.inicializarFecha();
        this.selectedContrato = null;
        this.editing = false;
    }

    openContratoDetailsDialog(contrato: Contrato) {
        this.dialogContrato = true;
        this.editing = false;
        this.isDetail = true;

        console.log('Estado al abrir el detalle:', {
            editing: this.editing,
            isDetail: this.isDetail,
        });

        // Asigna los valores del contrato al formulario
        const fechaContrato = contrato.fecha
            ? new Date(contrato.fecha + 'T00:00:00')
            : null;
        const fechaPago = contrato.fechaPago
            ? new Date(contrato.fechaPago + 'T00:00:00')
            : null;

        this.newContratoForm.patchValue({
            ...contrato,
            fecha: fechaContrato,
            fechaPago: fechaPago,
        });
    }

    inicializarFecha() {
        this.newContratoForm.patchValue({
            fecha: new Date(),
        });
    }

    openContratoDialog(contrato?: Contrato) {
        this.inicializarFecha();
        this.dialogContrato = true;

        if (contrato) {
            this.editing = true;
            this.isDetail = false;
            this.selectedContrato = contrato;

            const kilogramos = contrato.quintales
                ? Math.floor(contrato.quintales * 45.36)
                : 0;

            const fechaContrato = contrato.fecha
                ? new Date(contrato.fecha + 'T00:00:00')
                : null;
            const fechaPago = contrato.fechaPago
                ? new Date(contrato.fechaPago + 'T00:00:00')
                : null;

            this.newContratoForm.patchValue({
                ...contrato,
                kilogramos: kilogramos,
                fecha: fechaContrato,
                fechaPago: fechaPago,
            });
        } else {
            this.editing = false;
            this.isDetail = false;
            this.selectedContrato = null;
            this.newContratoForm.reset();
            this.inicializarFecha();
        }
    }
    cargarContratosRegistrados() {
        this.currentLote = '';
        this.controlraService.obtenerContratos().subscribe(
            (data: Contrato[]) => {
                this.contratos = data;
                this.contratosFiltrados = data;
            },
            (error) => {
                console.error('Error al cargar los datos', error);
            }
        );
    }

    getInputValue(event: Event): string {
        const target = event.target as HTMLInputElement;
        return target ? target.value : '';
    }

    filtrarContratosPorLote(lote: string) {
        this.currentLote = lote;
        if (lote.trim() === '') {
            this.contratosFiltrados = this.contratos;
        } else {
            this.controlraService.obtenerContratosPorLote(lote).subscribe(
                (data: Contrato[]) => {
                    this.contratosFiltrados = data;
                },
                (error) => {
                    console.error('Error al filtrar los datos', error);
                }
            );
        }
    }
}
