import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { catchError, Observable, of, tap } from 'rxjs';
import { ClienteService } from 'src/app/demo/service/cliente.service';
import { PrestamoService } from 'src/app/demo/service/prestamo.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Pago } from 'src/app/models/pago';
import { Prestamo } from 'src/app/models/prestamo';

interface ExpandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-prestamos',
    templateUrl: './prestamos.component.html',
    styles: [
        `
            :host ::ng-deep .p-frozen-column {
                font-weight: bold;
            }

            :host ::ng-deep .p-datatable-frozen-tbody {
                font-weight: bold;
            }

            :host ::ng-deep .p-progressbar {
                height: 0.5rem;
            }

            .status-label {
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-weight: bold;
                display: inline-block;
                text-align: center;
                min-width: 80px;
            }

            .status-activo {
                background-color: #e79494;
                color: #a81616;
            }

            .status-pagado {
                background-color: #c3e6cb;
                color: #155724;
            }
            .selected-row {
                background-color: #d3d3d3; /* Cambia este color según tu preferencia */
            }
            .dialog-header {
                position: relative;
            }

            .cancel-button {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        `,
    ],
})
export class PrestamosComponent implements OnInit {
    prestamos: Prestamo[] = [];
    loading: boolean = true;
    expandedRows: ExpandedRows = {};
    isExpanded: boolean = false;
    displayDialog: boolean = false;
    displayClientSearchModal: boolean = false;

    selectedCliente: Cliente | null = null;
    filteredClientes: Cliente[] = [];
    nuevoPrestamoForm: FormGroup;
    nuevoPagoForm: FormGroup;
    clientes: Cliente[] = [];

    //para pagos
    displayDialogPago: boolean = false;
    fechaPlaceholder: string = 'dd/MM/AAAA';
    selectedPrestamo: Prestamo | null = null;

    //para buscar prestamos
    searchKeyword: string = '';
    searchCedula: string = '';

    statuses: any[] = [
        { label: 'Activo', value: 'activo' },
        { label: 'Pagado', value: 'pagado' },
    ];

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private prestamoService: PrestamoService,
        private clienteService: ClienteService,
        private fb: FormBuilder,
        private messageService: MessageService
    ) {
        this.nuevoPrestamoForm = this.fb.group({
            nombre: ['', Validators.required],
            apellidos: ['', Validators.required],
            cedula: ['', Validators.required],
            contacto: ['', Validators.required],
            montoPrestamo: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^\\d+(\\.\\d{1,2})?$'),
                ],
            ],
            fechaPrestamo: [null, Validators.required],
            estado: ['', Validators.required],
        });

        this.nuevoPagoForm = this.fb.group({
            codigoPrestamo: [null, Validators.required],
            fechaPago: [null, Validators.required],
            montoPagado: [null, [Validators.required, Validators.min(0.01)]],
        });
    }

    ngOnInit(): void {
        this.prestamoService.getPrestamos().subscribe(
            (data) => {
                this.prestamos = data;
                console.log('Prestamos:', this.prestamos);
                this.loading = false;
            },
            (error) => {
                console.error('Error al obtener prestamos:', error);
                this.loading = false;
            }
        );
        this.nuevoPrestamoForm.get('fechaPrestamo')?.setValue(new Date());
        this.nuevoPagoForm.get('fechaPago')?.setValue(new Date());
    }

    toggleRow(prestamo: Prestamo) {
        if (this.expandedRows[prestamo.id]) {
            delete this.expandedRows[prestamo.id];
        } else {
            this.expandedRows = {};
            if (!prestamo.pagos) {
                this.loadPayments(prestamo).subscribe(() => {
                    this.expandedRows[prestamo.id] = true;
                });
            } else {
                this.expandedRows[prestamo.id] = true;
            }
        }
    }

    handleInput(event: any): void {
        const value = event.target.value;
        if (!value) {
            this.fechaPlaceholder = 'dd/MM/AAAA';
        }
    }

    loadPayments(prestamo: Prestamo): Observable<any> {
        return this.prestamoService.getPagosByPrestamoId(prestamo.id).pipe(
            tap((data) => {
                prestamo.pagos = data;
                console.log(
                    `Pagos para el préstamo ${prestamo.id}:`,
                    prestamo.pagos
                );
            }),
            catchError((error) => {
                console.error(
                    `Error al obtener pagos para el préstamo ${prestamo.id}:`,
                    error
                );
                return of([]);
            })
        );
    }

    showPagoDialog(prestamo: Prestamo) {
        this.nuevoPagoForm.patchValue({
            codigoPrestamo: prestamo.id,
            fechaPago: new Date(),
            montoPagado: '',
        });
        this.displayDialogPago = true;

        console.log(
            'Valores del formulario después de setValue:',
            this.nuevoPagoForm.value
        );
    }

    closePagoDialog() {
        this.displayDialogPago = false;
        this.selectedPrestamo = null;
        this.nuevoPagoForm.reset();
    }

   

    closeModalDialog() {
        this.displayDialog = false;
        this.nuevoPrestamoForm.reset();
    }

    abrirModalRegistro() {
        this.nuevoPrestamoForm.patchValue({
            nombre: '',
            apellidos: '',
            cedula: '',
            contacto: '',
            montoPrestamo: '',
            fechaPrestamo: new Date(),
            estado: '',
        });
        this.displayDialog = true;
    }

    createLoan() {
        const formValue = this.nuevoPrestamoForm.value;
    
        // Convertir la fecha del préstamo a UTC antes de enviarla
        const fechaPrestamoLocal = new Date(formValue.fechaPrestamo);
        const fechaPrestamoUTC = new Date(
            Date.UTC(
                fechaPrestamoLocal.getFullYear(),
                fechaPrestamoLocal.getMonth(),
                fechaPrestamoLocal.getDate(),
                fechaPrestamoLocal.getHours(),
                fechaPrestamoLocal.getMinutes(),
                fechaPrestamoLocal.getSeconds()
            )
        );
        const prestamoData = {
            id: 0,
            nombre: formValue.nombre,
            apellidos: formValue.apellidos,
            cedula: formValue.cedula,
            contacto: formValue.contacto,
            montoPrestamo: parseFloat(formValue.montoPrestamo),
            fechaPrestamo: fechaPrestamoUTC.toISOString(),
            estado: 'activo',
        };
    
        console.log('JSON enviado:', JSON.stringify(prestamoData, null, 2));
    
        this.prestamoService.registrarPrestamo(prestamoData).subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Préstamo registrado exitosamente.',
                });
    
                this.closeModalDialog();
                this.loadPrestamos();
            },
            (error) => {
                if (error.status === 400 && error.error.message === 'No hay ninguna caja abierta. No se puede registrar el préstamo.') {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Antes de registrar el préstamo. Debes de abrir caja.',
                    });
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al registrar el préstamo.',
                    });
                }
                console.error('Error al registrar el préstamo:', error);
            }
        );
    }

    registrarPago() {
        const formValue = this.nuevoPagoForm.value;
        const fechaPagoLocal = new Date(formValue.fechaPago);
        const fechaPagoUTC = new Date(
            Date.UTC(
                fechaPagoLocal.getFullYear(),
                fechaPagoLocal.getMonth(),
                fechaPagoLocal.getDate(),
                fechaPagoLocal.getHours(),
                fechaPagoLocal.getMinutes(),
                fechaPagoLocal.getSeconds()
            )
        );

        const pagoData: Pago = {
            id: 0,
            prestamo: { id: formValue.codigoPrestamo },
            fechaPago: fechaPagoUTC.toISOString(),
            montoPagado: parseFloat(formValue.montoPagado),
        };

        console.log('JSON enviado:', JSON.stringify(pagoData, null, 2));

        this.prestamoService.registrarPago(pagoData).subscribe(
            (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Pago registrado exitosamente.',
                });
                this.closePagoDialog();
                this.nuevoPagoForm.reset();

                const prestamoId = formValue.codigoPrestamo;
                const prestamo = this.prestamos.find(
                    (p) => p.id === Number(prestamoId)
                );
                if (prestamo) {
                    this.loadPayments(prestamo).subscribe(() => {
                        const totalPagado = (prestamo.pagos || []).reduce(
                            (sum, pago) => sum + pago.montoPagado,
                            0
                        );
                        prestamo.saldoRestante =
                            prestamo.montoPrestamo - totalPagado;

                        if (prestamo.saldoRestante === 0) {
                            this.loadPrestamos();
                            this.expandedRows[prestamoId] = false;
                        }
                    });
                }
            },

            (error) => {
                if (error.status === 400 && error.error.message === 'No hay ninguna caja abierta. No se puede registrar el pago en caja.') {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'No se puede registrar el pago. La Caja no esta abierta.',
                    });
                }
                else {
                    const errorMessage =
                    error.error?.message || 'Error al registrar el pago.';
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorMessage,
                });
                console.error('Error al registrar el pago:', error);
                } 
            }
        );
    }

    loadPrestamos() {
        this.loading = true;
        this.prestamoService.getPrestamos().subscribe(
            (data) => {
                this.prestamos = data;
                console.log('Prestamos actualizados:', this.prestamos);
                this.loading = false;
            },
            (error) => {
                console.error('Error al obtener prestamos:', error);
                this.loading = false;
            }
        );
    }

    //para buscar prestamos
    onTermInput(event: any) {
      const term = event.target.value;
      if (term.length >= 1) {
          this.expandedRows = {};
          this.prestamoService.buscarPrestamos(term).subscribe(
              (data: Prestamo[]) => {
                  this.prestamos = data;
              },
              (error) => {
                  console.error('Error al buscar el préstamo:', error);
              }
          );
      } else {
          this.loadPrestamos();
      }
  }
}
