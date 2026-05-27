import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ComprasService } from 'src/app/demo/service/compras.service';

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-compras',
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.scss'],
    providers: [DatePipe]
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

    buscarComprasModal: boolean = false;
    buscarComprasForm: FormGroup;
    resultadosBusqueda: any[] = [];
    busquedaRealizada: boolean = false;
    cargandoBusqueda: boolean = false;
    buscarModalTitulo: string = 'Buscar Compras';
    esVentasSearch: boolean = false;

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
        private compraservice: ComprasService,
        private datePipe: DatePipe
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
        this.buscarComprasForm = this.fb.group({
            fecha: [new Date(), Validators.required],
            productoId: [null, Validators.required],
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

    openBuscarComprasDialog() {
        this.buscarComprasModal = true;
        this.esVentasSearch = false;
        this.buscarModalTitulo = 'Buscar Compras';
        this.resultadosBusqueda = [];
        this.busquedaRealizada = false;
        this.cargandoBusqueda = false;
        this.obtenerProductos();
        this.buscarComprasForm.patchValue({
            fecha: new Date(),
            productoId: null
        });
    }

    openBuscarVentasDialog() {
        this.buscarComprasModal = true;
        this.esVentasSearch = true;
        this.buscarModalTitulo = 'Buscar Ventas';
        this.resultadosBusqueda = [];
        this.busquedaRealizada = false;
        this.cargandoBusqueda = false;
        this.obtenerProductos();
        this.buscarComprasForm.patchValue({
            fecha: new Date(),
            productoId: null
        });
    }

    closeBuscarComprasDialog() {
        this.buscarComprasModal = false;
        this.buscarComprasForm.reset({
            fecha: new Date(),
            productoId: null
        });
    }

    onBuscar() {
        if (this.buscarComprasForm.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete todos los campos de búsqueda.'
            });
            return;
        }

        this.cargandoBusqueda = true;
        this.busquedaRealizada = false;
        const formValue = this.buscarComprasForm.value;
        const fecha = this.datePipe.transform(formValue.fecha, 'yyyy-MM-dd') || '';
        const productoId = formValue.productoId ? formValue.productoId.id : null;

        if (!productoId) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Debe seleccionar un producto válido.'
            });
            this.cargandoBusqueda = false;
            return;
        }

        console.log('Enviando parámetros de búsqueda:', { fecha: fecha, productoId: productoId, esVentas: this.esVentasSearch });
        const endpoint = this.esVentasSearch ? 'buscar-ventas' : 'buscar';
        console.log('URL de Búsqueda:', `http://localhost:8080/compras/${endpoint}?fecha=${fecha}&productoId=${productoId}`);

        const searchObservable = this.esVentasSearch
            ? this.compraservice.buscarVentasPorFechaYProducto(fecha, productoId)
            : this.compraservice.buscarComprasPorFechaYProducto(fecha, productoId);

        searchObservable.subscribe({
            next: (data) => {
                this.resultadosBusqueda = data;
                this.cargandoBusqueda = false;
                this.busquedaRealizada = true;
            },
            error: (err) => {
                this.cargandoBusqueda = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `Ocurrió un error al buscar las ${this.esVentasSearch ? 'ventas' : 'compras'}.`
                });
                console.error(err);
            }
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

    generarReportePDF() {
        const doc = new jsPDF('p', 'mm', 'a4');
        const primaryColor: [number, number, number] = [27, 94, 32];
        const salesColor: [number, number, number] = [46, 125, 50];
        const dateNow = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        const fileNameDate = this.datePipe.transform(new Date(), 'yyyyMMdd');

        // --- ENCABEZADO MINIMALISTA ELEGANTE ---
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, 210, 3, 'F');

        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setFontSize(32); doc.setFont('times', 'bold');
        doc.text('AGROFRANCO', 15, 20);
        
        doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setLineWidth(0.8);
        doc.line(15, 23, 60, 23);

        doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(80, 80, 80);
        doc.text('CENTRO DE ACOPIO Y COMERCIALIZACIÓN DE CACAO', 15, 30);
        
        doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('REPORTE DIARIO DE OTRAS COMPRAS Y VENTAS', 15, 36);

        // Caja de Info Sutil
        doc.setDrawColor(220); doc.setLineWidth(0.2); doc.roundedRect(125, 10, 70, 28, 2, 2, 'S');
        doc.setFontSize(8); doc.setTextColor(100);
        
        doc.setFont('helvetica', 'normal'); doc.text(`CATEGORÍA:`, 128, 16);
        doc.setFont('helvetica', 'bold'); doc.text(`PRODUCTOS VARIOS`, 155, 16);
        
        doc.setFont('helvetica', 'normal'); doc.text(`FECHA EMISIÓN:`, 128, 22);
        doc.text(`${dateNow}`, 155, 22);

        doc.setFont('helvetica', 'normal'); doc.text(`ESTADO:`, 128, 28);
        doc.setFont('helvetica', 'bold'); doc.setTextColor(salesColor[0], salesColor[1], salesColor[2]);
        doc.text(`CONSOLIDADO`, 155, 28);

        // --- DASHBOARD DE TOTALES (KPIs) ---
        const totalInv = this.totalCompras.reduce((acc, curr) => acc + curr.totalDolares, 0);
        const totalRec = this.totalVentas.reduce((acc, curr) => acc + curr.totalDolares, 0);
        const balance = totalRec - totalInv;

        doc.setFillColor(252, 252, 252);
        doc.roundedRect(15, 45, 180, 22, 1, 1, 'F');
        doc.setDrawColor(240); doc.rect(15, 45, 180, 22, 'S');

        // Inversión
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(120);
        doc.text('INVERSIÓN EN COMPRAS', 25, 53);
        doc.setFontSize(14); doc.setTextColor(31, 119, 180);
        doc.text(`$ ${totalInv.toFixed(2)}`, 25, 60);

        // Recaudación
        doc.setFontSize(8); doc.setTextColor(120);
        doc.text('RECAUDACIÓN EN VENTAS', 85, 53);
        doc.setFontSize(14); doc.setTextColor(46, 125, 50);
        doc.text(`$ ${totalRec.toFixed(2)}`, 85, 60);

        // Balance
        doc.setFontSize(8); doc.setTextColor(120);
        doc.text('BALANCE NETO', 145, 53);
        doc.setFontSize(14); doc.setTextColor(balance >= 0 ? primaryColor[0] : 183, balance >= 0 ? primaryColor[1] : 28, balance >= 0 ? primaryColor[2] : 28);
        doc.text(`$ ${balance.toFixed(2)}`, 145, 60);

        // --- TABLA DE COMPRAS ---
        doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('1. DETALLE DE COMPRAS REALIZADAS', 15, 75);

        const detailCompras = this.compras.map(item => [
            this.datePipe.transform(item.fechaCompra, 'HH:mm'),
            item.producto.nombre.toUpperCase(),
            `${item.cantidad} ${item.producto.unidad_medida}`,
            `$ ${item.totalPagado.toFixed(2)}`,
            `$ ${item.valorMasDos.toFixed(2)}`
        ]);

        autoTable(doc, {
            startY: 78,
            head: [['Hora', 'Ítem de Compra', 'Cant.', 'Pagado', 'Total (2%)']],
            body: detailCompras,
            theme: 'striped',
            headStyles: { 
                fillColor: [245, 245, 245], 
                textColor: primaryColor, 
                fontSize: 8, 
                halign: 'center',
                fontStyle: 'bold'
            },
            columnStyles: {
                0: { halign: 'center' },
                2: { halign: 'center' },
                3: { halign: 'right' },
                4: { halign: 'right', fontStyle: 'bold', textColor: [31, 119, 180] }
            },
            margin: { left: 15, right: 15 }
        });

        // --- TABLA DE VENTAS ---
        const finalYCompras = (doc as any).lastAutoTable.finalY + 12;
        doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('2. DETALLE DE VENTAS REALIZADAS', 15, finalYCompras);

        const detailVentas = this.ventas.map(item => [
            this.datePipe.transform(item.fechaCompra, 'HH:mm'),
            item.producto.nombre.toUpperCase(),
            `${item.cantidad} ${item.producto.unidad_medida}`,
            `$ ${item.totalPagado.toFixed(2)}`
        ]);

        autoTable(doc, {
            startY: finalYCompras + 3,
            head: [['Hora', 'Ítem de Venta', 'Cant.', 'Recaudación']],
            body: detailVentas,
            theme: 'striped',
            headStyles: { 
                fillColor: [245, 245, 245], 
                textColor: primaryColor, 
                fontSize: 8, 
                halign: 'center',
                fontStyle: 'bold'
            },
            columnStyles: {
                0: { halign: 'center' },
                2: { halign: 'center' },
                3: { halign: 'right', fontStyle: 'bold', textColor: [46, 125, 50] }
            },
            margin: { left: 15, right: 15 }
        });

        // Pie de página
        const pageCount = (doc as any).internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(7); doc.setTextColor(150);
            doc.text(`AgroFranco | Gestión de Productos Varios | Página ${i} de ${pageCount}`, 15, 285);
        }

        doc.save(`Reporte_Operaciones_${fileNameDate}.pdf`);
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
