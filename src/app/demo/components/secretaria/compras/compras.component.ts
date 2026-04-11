import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ComprasService } from 'src/app/demo/service/compras.service';

@Component({
    selector: 'app-compras',
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements OnInit {
    registerCompra: FormGroup;
    compraCacaoModal: boolean = false;
    compras: any[] = [];
    ventas: any[]=[];
    tipoClientes: any[] = [];
    tipo: any[] = [];
    productos: any[] = [];
    totalCompras: any[] = [];
    totalVentas: any[] = [];

    productoModal: boolean = false;
    ventaModal: boolean = false;
    registerVenta: FormGroup;
    registerFormProducto: FormGroup;

    unidadMedidaSeleccionada: string = '';

    unidadesMedida: any[] = [
        { label: 'Libra', value: 'lb' },
        { label: 'Kilogramo', value: 'kg' },
        { label: 'Quintal', value: 'qq' },
        { label: 'Unidad', value: 'Unidad/es' },
    ];

    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
        private compraservice: ComprasService
    ) {
        this.registerCompra = this.fb.group({
            tipoCliente: [null, Validators.required],
            producto: [null, Validators.required],
            fechaCompra: [new Date(), Validators.required],
            cantidad: [null, Validators.required],
            totalPagado: [null, Validators.required]
        });
        this.registerFormProducto = this.fb.group({
            nombreProducto: [null, Validators.required],
            unidadMedida: [null, Validators.required],
        });
        this.registerVenta = this.fb.group({
            fechaVenta: [new Date(), Validators.required],
            nombreProducto: [null, Validators.required],
            cantVenta: [null, Validators.required],
            totalCobrado: [null, Validators.required],
            tipo: [null, Validators.required],
        });
        this.registerCompra
            .get('producto')
            ?.valueChanges.subscribe((productoSeleccionado) => {
                // Actualiza la unidad de medida seleccionada
                this.unidadMedidaSeleccionada =
                    productoSeleccionado?.unidad_medida || '';
     });
     this.registerVenta
            .get('nombreProducto')
            ?.valueChanges.subscribe((productoSeleccionado) => {
                // Actualiza la unidad de medida seleccionada
                this.unidadMedidaSeleccionada =
                    productoSeleccionado?.unidad_medida || '';
            });

    }

    ngOnInit(): void {
        this.tipoClientes = [
            { name: 'Cliente Registrado', value: 1 },
            { name: 'Consumidor Final', value: 2 },
        ];
        this.tipo = [
            { name: 'Venta normal', value: 'V' },
            { name: 'Venta a Proveedor', value: 'VP' },
        ];
        this.obtenerComprasToday();
        this.obtenerVentasToday();
        this.obtenerTotalVentasToday();
        this.obtenerTotalComprasToday();
    }

    openCompraDialog() {
        this.registerCompra.patchValue({
            fechaCompra: new Date(),
        });
        this.compraCacaoModal = true;
        this.obtenerProductos();
    }

    closeCompraDialog() {
        this.compraCacaoModal = false;
        this.registerCompra.reset();
    }

    onSubmitCompra() {
        if (this.registerCompra.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor, completa todos los campos obligatorios.',
            });
            return;
        }

        const formValue = this.registerCompra.value;
        const fechaCompra = new Date(formValue.fechaCompra);

        const compra = {
            tipoCliente: {
                id: this.registerCompra.value.tipoCliente.value,
            }, // Asegurarse de enviar solo el ID
            producto: { id: this.registerCompra.value.producto.id },
            fechaCompra: fechaCompra.toISOString(),
            cantidad: parseFloat(this.registerCompra.value.cantidad), // Convertir a número
            totalPagado: parseFloat(this.registerCompra.value.totalPagado),
            tipo:'C'
        };

        console.log('Datos a enviar:', compra);

        this.compraservice.registrarCompra(compra).subscribe({
            next: (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Compra registrada correctamente.',
                });
                this.closeCompraDialog();
                this.obtenerComprasToday();
                this.obtenerTotalComprasToday();
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


    onSubmitVenta() {
        if (this.registerVenta.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor, completa todos los campos obligatorios.',
            });
            return;
        }

        const formValue = this.registerVenta.value;
        const fechaVenta = new Date(formValue.fechaVenta);

        const venta = {
            
            producto: { id: this.registerVenta.value.nombreProducto.id },
            fechaCompra: fechaVenta.toISOString(),
            cantidad: parseFloat(this.registerVenta.value.cantVenta), // Convertir a número
            totalPagado: parseFloat(this.registerVenta.value.totalCobrado),
            tipo: formValue.tipo.value
        };

        console.log('Datos a enviar:', venta);

        this.compraservice.registrarVenta(venta).subscribe({
            next: (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Venta registrada correctamente.',
                });
                this.closeVentaDialog();
                this.obtenerVentasToday();
                this.obtenerTotalComprasToday();
                this.obtenerTotalVentasToday();
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

    obtenerProductos() {
        this.compraservice.obtenerProductos().subscribe((data) => {
            this.productos = data;
        });
    }

    obtenerComprasToday() {
        this.compraservice.obtenerComprasToday().subscribe(
            (data: any[]) => {
                this.compras = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    obtenerVentasToday() {
        this.compraservice.obtenerVentasToday().subscribe(
            (data: any[]) => {
                this.ventas = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    obtenerTotalComprasToday() {
        this.compraservice.obtenerTotalComprasToday().subscribe(
            (data: any[]) => {
                this.totalCompras = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    obtenerTotalVentasToday() {
        this.compraservice.obtenerTotalVentasToday().subscribe(
            (data: any[]) => {
                this.totalVentas = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    registrarTransaccionesCaja() {
        this.compraservice.registrarTransaccionesCaja().subscribe({
            next: (response) => {
                const successMessage =
                    response.text ||
                    'Transacciones registradas en caja correctamente.';
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: successMessage,
                });
                this.obtenerTotalComprasToday();
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

    OpenProductoModalDialog() {
        this.productoModal = true;
    }
    closeProductoModalDialog() {
        this.productoModal = false;
        this.registerFormProducto.reset();
    }
    onSubmitProducto() {
        if (this.registerFormProducto.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete el formulario de producto correctamente.',
            });
            return;
        }

        const producto: any = {
            nombre: this.registerFormProducto.get('nombreProducto')?.value,
            unidad_medida:
                this.registerFormProducto.get('unidadMedida')?.value.value, // Cambiado para enviar solo el value
        };

        console.log('Producto a enviar:', producto); // Utiliza esto para verificar el objeto antes de enviarlo

        this.compraservice.registrarProducto(producto).subscribe(
            (data) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Producto registrado exitosamente.',
                });
                this.closeProductoModalDialog();
                this.obtenerProductos();
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo registrar el producto.',
                });
                console.error('Error al registrar un producto:', error);
            }
        );
    }

    openVentaDialog() {
        this.registerVenta.patchValue({
            fechaVenta: new Date(),
        });
        this.ventaModal = true;
        this.obtenerProductos();
        
    }
    closeVentaDialog() {
        this.ventaModal = false;
        this.registerVenta.reset();
    }

    registrarVentasCaja(){
        this.compraservice.registrarVentasCaja().subscribe({
            next: (response) => {
                const successMessage =
                    response.text ||
                    'Transacciones registradas en caja correctamente.';
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: successMessage,
                });
                this.obtenerTotalVentasToday();
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
   
}
