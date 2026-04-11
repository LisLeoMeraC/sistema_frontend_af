import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CompraCacaoService } from 'src/app/demo/service/compra-cacao.service';

@Component({
    selector: 'app-compra-cacao',
    templateUrl: './compra-cacao.component.html',
    styleUrls: ['./compra-cacao.component.scss'],
})
export class CompraCacaoComponent implements OnInit {
    //para el modal
    registerFormCompraCacao: FormGroup;
    searchForm: FormGroup;
    displayModalCompraCacao: boolean = false;
    displayModalCompraCacaoTodas: boolean = false;
    tipoClientes: any[] = [];
    tiposCacao: any[] = [];
    comprasCacao: any[] = [];
    comprasCacaoTodas: any[]=[];
    totalCacao: any[] = [];

    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
        private compraCacaoService: CompraCacaoService,
        private confirmationService: ConfirmationService,
        private datePipe: DatePipe
    ) {
        this.registerFormCompraCacao = this.fb.group({
            tipoCliente: [null, Validators.required],
            tipoCacao: [null, Validators.required],
            fechaCompra: [new Date(), Validators.required],
            cantidadLibras: [null, Validators.required],
            totalPagado: [null, Validators.required],
            pagoEfectivo: [null, Validators.required],
            pagoTransferencia: [null, Validators.required],
        });
        this.searchForm = this.fb.group({
            fecha: [null],
        });
    }
    ngOnInit(): void {
        this.tipoClientes = [
            { name: 'Cliente Registrado', value: 1 },
            { name: 'Consumidor Final', value: 2 },
        ];

        this.obtenerComprasCacaoToday();
        this.obtenerTotalTipoCacaoToday();
        this.onTotalPagadoChange();
    }

    eliminarCompra(compraCacao: any) {
        this.compraCacaoService.eliminarCompraCacao(compraCacao.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Registro de compra eliminado correctamente',
                });
                this.obtenerComprasCacaoToday();
                this.obtenerTotalTipoCacaoToday();
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al eliminar el registro',
                });
            }
        );
    }

    confirmDeleteCompra(compraCacao: any) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar este registro?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarCompra(compraCacao);
            },
        });
    }

    openDialogTodasCompras() {
        this.displayModalCompraCacaoTodas = true;
    }
    closeDialogTodasCompras() {
        this.displayModalCompraCacaoTodas = false;
        this.limpiarForm();
    }

    onSubmitCompraCacao() {
        if (this.registerFormCompraCacao.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor, completa todos los campos obligatorios.',
            });
            return;
        }

        const formValue = this.registerFormCompraCacao.value;
        
        // Usar la fecha local directamente para evitar desfases de UTC que ocultan registros del "hoy"
        const fechaCompra = new Date(formValue.fechaCompra);

        const compraCacao = {
            tipoCliente: {
                id: formValue.tipoCliente.value,
            },
            tipoCacao: { id: formValue.tipoCacao.id },
            fechaCompra: fechaCompra.toISOString(),
            cantidadLibras: parseFloat(
                this.registerFormCompraCacao.value.cantidadLibras
            ), // Convertir a número
            totalPagado: parseFloat(
                this.registerFormCompraCacao.value.totalPagado
            ),
            pagoEfectivo: parseFloat(
                this.registerFormCompraCacao.value.pagoEfectivo
            ),
            pagoTransferencia: parseFloat(
                this.registerFormCompraCacao.value.pagoTransferencia
            ),
        };

        console.log('Datos a enviar:', compraCacao);

        this.compraCacaoService.registrarCompraCacao(compraCacao).subscribe({
            next: (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Compra registrada correctamente.',
                });
                this.closeModalCompraCacaoDialog();
                this.obtenerComprasCacaoToday();
                this.obtenerTotalTipoCacaoToday();
            },
            error: (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Ocurrió un error al registrar la compra.',
                });
            },
        });
    }

    showCompraCacaoModalDialog() {
        this.registerFormCompraCacao.patchValue({
            fechaCompra: new Date(),
            pagoTransferencia: 0.0,
        });
        this.displayModalCompraCacao = true;
        this.obtenerTiposCacao();
    }

    onTotalPagadoChange(): void {
        const totalPagadoControl =
            this.registerFormCompraCacao.get('totalPagado');

        if (totalPagadoControl) {
            totalPagadoControl.valueChanges.subscribe((value) => {
                this.registerFormCompraCacao.patchValue(
                    {
                        pagoEfectivo: value || 0,
                        pagoTransferencia: 0.0,
                    },
                    { emitEvent: false }
                );
            });
        }
    }
    closeModalCompraCacaoDialog() {
        this.displayModalCompraCacao = false;
        this.registerFormCompraCacao.reset();
    }

    obtenerTiposCacao() {
        this.compraCacaoService.obtenerTiposCacao().subscribe((data) => {
            this.tiposCacao = data;
        });
    }

    obtenerComprasCacaoToday() {
        this.compraCacaoService.obtenerComprasCacao().subscribe(
            (data: any[]) => {
                this.comprasCacao = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    obtenerTotalTipoCacaoToday() {
        this.compraCacaoService.obtenerTotalTipoCacaoToday().subscribe(
            (data: any[]) => {
                this.totalCacao = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    registrarTransaccionesCaja() {
        this.compraCacaoService.registrarTransaccionesCaja().subscribe({
            next: (response) => {
                const successMessage =
                    response.text ||
                    'Transacciones registradas en caja correctamente.';
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: successMessage,
                });
                this.obtenerTotalTipoCacaoToday();
            },
            error: (error) => {
                let errorMessage =
                    'Ocurrió un error al registrar las transacciones en caja.';
                if (error.error && typeof error.error === 'object') {
                    if (error.error.text) {
                        errorMessage = error.error.text;
                    } else {
                        errorMessage = JSON.stringify(error.error);
                    }
                } else if (error.message) {
                    errorMessage = error.message;
                }
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                });
            },
        });
    }

    cargarComprasCacaoFecha() {
        const fecha = this.searchForm.get('fecha')?.value;

        const formattedFecha =
            this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';

        this.compraCacaoService
            .obtenerComprasCacaoFecha(formattedFecha)
            .subscribe(
                (data: any[]) => {
                    this.comprasCacaoTodas = data;
                },
                (error) => {
                    console.error('Error al obtener las compras:', error);
                }
            );
    }
    limpiarForm(){
        this.searchForm.reset();
        this.obtenerComprasCacaoToday();
    }
}
