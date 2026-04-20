import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocaleSettings } from 'primeng/calendar';
import { catchError, Observable, of, tap } from 'rxjs';
import { ArticuloService } from 'src/app/demo/service/articulo.service';
import { VentasService } from 'src/app/demo/service/ventas.service';
import { Articulo } from 'src/app/models/articulo';
import { IngresoStock } from 'src/app/models/ingresoStock';
import { SalidaArticulo } from 'src/app/models/salidaArticulo';

interface ExpandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-ventas',
    templateUrl: './ventas.component.html',
    styles: [
        `
            .status-label {
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-weight: bold;
                display: inline-block;
                text-align: center;
                min-width: 80px;
            }

            .status-en-stock {
                background-color: #c3e6cb;
                color: #155724;
            }

            .status-sin-stock {
                background-color: #e79494;
                color: #a81616;
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
export class VentasComponent implements OnInit {

    estadoSelecionado: any;
    tipoPagoSeleccionado: any;
    isAbona: any;
    monto: string = '';

    articulos: Articulo[] = [];
    ventasRegistradas: any[] = [];
    expandedRows: { [key: string]: boolean } = {};
    loading: boolean = true;
    first: number = 0;

    unidadesMedidas = [
        { label: 'UNIDAD', value: 'UNIDAD' },
        { label: 'LIBRAS', value: 'LIBRAS' }
    ];

    statuses: any[] = [
        { label: 'Bajo', value: 'bajo' },
        { label: 'Normal', value: 'normal' },
    ];


    salidaProductoDialog: boolean = false;
    fechaPlaceholder: string = 'dd/MM/AAAA';

    ventasRegistradasDialog: boolean = false;
    displayModalArticulos: boolean = false;


    searchTermin:string='';

    //los dartos seleccionados en la tabla dde articulos
    ventas: any[] = [];
    total: number = 0;

    //Para guardar los datos del encabezado
    fecha: Date = new Date();
    comprador: string = '';

    idOrdenCreada: number = 0;








    ngOnInit(): void {

    }

    constructor(
        private articuloService: ArticuloService,
        private messageService: MessageService,
        private fb: FormBuilder,
        private ventasService: VentasService,
        private router: Router,
    ) {

    }

    opciones = [
        { nombre: 'Por Pagar', valor: false },
        { nombre: 'Pagado', valor: true }
    ];

    tiposDePago = [
        { nombre: 'Transferencia', valor: 'T' },
        { nombre: 'Efectivo', valor: 'E' }
    ];

    abona = [
        { nombre: 'Sí', valor: 'S' },
        { nombre: 'No', valor: 'N' }
    ];


    mostrarComponenteVenta() {
        this.router.navigate(['/secretaria/view-ventas']);
    }

    openModalDialogArticulos() {
        this.displayModalArticulos = true;
        this.first=0;
        this.searchTermin= '';
        this.articulos=[];
        this.loadArticulos();
    }

    closeModalDialogArticulos() {
        this.displayModalArticulos = false;
        this.expandedRows = {};
    }

    eliminarFila(venta: any) {
        const index = this.ventas.indexOf(venta);
        if (index > -1) {
            this.ventas.splice(index, 1);  // Elimina el artículo de la lista
            //console.log('Artículo eliminado', venta);
            this.calcularTotal();
        }
    }

    registrarPagoOrdenVenta() {

        /* const fechaLocal = new Date(this.fecha.getTime() - (this.fecha.getTimezoneOffset() * 60000));
         const fechaUTC = fechaLocal.toISOString();*/
        const fechaSeleccionada = this.fecha; // La fecha seleccionada desde el formulario

        // Obtener la fecha con la hora de Guayaquil
        const fechaFormateada = this.obtenerFechaConHora(fechaSeleccionada);

        const pago = {
            ordenVenta: { id: this.idOrdenCreada },
            fechaPago: fechaFormateada,
            tipoPago: this.tipoPagoSeleccionado ? this.tipoPagoSeleccionado.valor : null,
            valorPago: this.monto
        };

        console.log('JSON que se enviará:', JSON.stringify(pago));

        console.log('JSON que se enviará:', JSON.stringify(pago));

        // Llamada al servicio para registrar el pago
        this.ventasService.registrarPagoOrdenVenta(pago).subscribe(
            (respuesta) => {
                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Pago registrado con éxito' });
            },
            (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un error al registrar el pago' });
            }
        );
    }
    registrarVenta() {

        if (!this.fecha) {
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe seleccionar una fecha' });
            return;
        }

        if (!this.comprador || this.comprador.trim() === '') {
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe ingresar un comprador' });
            return;
        }

        if (this.ventas.length === 0) {
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe agregar al menos un artículo a la orden' });
            return;
        }
        if (this.ventas.some(venta => venta.cantidad === 0)) {
            this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'La cantidad de un artículo no puede ser 0' });
            return;
        }


        for (let venta of this.ventas) {
            if (venta.cantidad > venta.cantidadOriginal) {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `La cantidad del artículo "${venta.articulo}" supera el stock disponible. Stock disponible: ${venta.cantidadOriginal}`
                });
                return;  // Detener la ejecución si hay un error
            }
        }

        const totalVenta = this.total || 0;
        const montoIngresado = parseFloat(this.monto) || 0;

        if (montoIngresado >= totalVenta) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'El monto del abono es mayor o igual al total de la venta. No se puede registrar el pago.'
            });
            return;
        }




        const fechaSeleccionada = this.fecha; // La fecha seleccionada desde el formulario

        // Obtener la fecha con la hora de Guayaquil
        const fechaFormateada = this.obtenerFechaConHora(fechaSeleccionada);

        const ordenVenta = {
            fecha: fechaFormateada, // Obtén el valor de la fecha
            comprador: this.comprador, // Obtén el comprador
            estado: this.estadoSelecionado.valor, // Obtén el estado de la orden
            tipoPago: this.tipoPagoSeleccionado ? this.tipoPagoSeleccionado.valor : null, // Obtén el tipo de pago
        };

        console.log('JSON que se enviará:', JSON.stringify(ordenVenta));

        // Llamada al servicio para crear la orden
        this.ventasService.crearOrdenVenta(ordenVenta).subscribe(
            (respuesta) => {
                this.idOrdenCreada = respuesta.id;

                // Lógica adicional, como mostrar un mensaje de éxito
                this.agregarDetallesOrden();

                // Validar si se debe registrar el pago
                if (
                    this.estadoSelecionado && this.estadoSelecionado.valor === false && // "Por Pagar" es false en la lista
                    this.isAbona && this.isAbona.valor === 'S' && // Asegurar que isAbona tiene valor 'S'
                    this.tipoPagoSeleccionado && this.tipoPagoSeleccionado.valor && // Verificar que hay tipo de pago
                    this.monto && this.monto.trim() !== '' // Verificar que el monto no está vacío
                ) {
                    this.registrarPagoOrdenVenta();

                }

            },
            (error) => {
                const errorMessage = error.error?.message || 'Hubo un error al registrar la venta';  // Utiliza error.error.message
                this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });                // Lógica adicional, como mostrar un mensaje de error
            }

        );
    }


    obtenerFechaConHora(fechaSeleccionada: Date): string {
        // Obtener la hora actual en Guayaquil
        const fechaGuayaquil = new Date().toLocaleString("en-US", { timeZone: "America/Guayaquil" });

        // Convertir la fecha de Guayaquil a un objeto Date
        const fechaGuayaquilDate = new Date(fechaGuayaquil);

        // Combinar la fecha seleccionada con la hora actual de Guayaquil
        const fechaConHora = new Date(
            fechaSeleccionada.getFullYear(),
            fechaSeleccionada.getMonth(),
            fechaSeleccionada.getDate(),
            fechaGuayaquilDate.getHours(),
            fechaGuayaquilDate.getMinutes(),
            fechaGuayaquilDate.getSeconds(),
            fechaGuayaquilDate.getMilliseconds()
        );

        // Convertir la fecha a UTC para tener una representación estándar
        const fechaUTC = new Date(Date.UTC(
            fechaConHora.getFullYear(),
            fechaConHora.getMonth(),
            fechaConHora.getDate(),
            fechaConHora.getHours(),
            fechaConHora.getMinutes(),
            fechaConHora.getSeconds(),
            fechaConHora.getMilliseconds()
        ));

        // Convertir la fecha a formato ISO 8601
        return fechaUTC.toISOString();
    }


    agregarDetallesOrden() {
        // Creamos un array con los detalles usando la tabla de ventas
        const detalles = this.ventas.map(venta => {
            const factor = this.obtenerFactorConversion(venta.unidadMedida);
            const precioReal = parseFloat(venta.precioUnitario) * factor;
            return {
                ordenVenta: { id: this.idOrdenCreada },  // Usamos el id de la orden creada
                ingresoStock: { id: venta.idOrden },  // Tomamos el id de ingresoStock
                cantidad: parseFloat(venta.cantidad), // Preparado para decimales
                precioUnitario: precioReal, // Pasa el precio convertido según la unidad
                unidadMedida: venta.unidadMedida
            };
        });

        console.log('JSON que se enviará:', JSON.stringify(detalles));

        // Enviar detalles al backend
        this.ventasService.registrarDetalleOrdenVenta(detalles).subscribe(
            (response) => {
                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Orden de Venta registrada con éxito' });
                this.imprimirReciboTicket(this.comprador, this.total, this.ventas);
                this.limpiarCampos();
            },
            (error) => {
                console.log('Error recibido:', error);  // Verifica la estructura del error

                // Ajustamos la extracción del mensaje según la estructura del error
                const errorMessage = error?.error?.message || error?.message || 'Hubo un error al registrar los detalles de la venta';

                this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
            }
        );
    }

    imprimirReciboTicket(comprador: string, total: number, ventas: any[]): void {
        const printWindow = window.open('', '_blank', 'width=400,height=600');
        if (!printWindow) {
            this.messageService.add({ severity: 'warn', summary: 'Popup Bloqueado', detail: 'Habilita las ventanas emergentes para imprimir recibos.' });
            return;
        }

        const dateStr = new Date().toLocaleDateString('es-EC');
        const timeStr = new Date().toLocaleTimeString('es-EC');

        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Recibo de Venta</title>
                    <style>
                        body {
                            font-family: 'Courier New', Courier, monospace;
                            width: 300px;
                            margin: 0 auto;
                            font-size: 13px;
                            color: #000;
                        }
                        .header { text-align: center; margin-bottom: 15px; }
                        .header h2 { margin: 0; font-size: 18px; margin-bottom: 5px; }
                        table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
                        th, td { text-align: left; padding: 4px 2px; border-bottom: 1px dashed #ccc; font-size: 12px; }
                        .text-right { text-align: right; }
                        .total-row { font-weight: bold; font-size: 16px; margin-top: 10px; border-top: 1px solid #000; padding-top: 5px; }
                        .footer { text-align: center; margin-top: 25px; font-size: 10px; }
                        @media print {
                            body { width: 80mm; margin: 0; padding: 10px; }
                            @page { margin: 0; }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h2>SISTEMA COCOA</h2>
                        <div>TICKET DE VENTA</div>
                        <div style="margin-top: 10px; text-align: left; font-size: 12px;">
                            <div><strong>Fech:</strong> ${dateStr} ${timeStr}</div>
                            <div><strong>Clte:</strong> ${comprador || 'Consumidor Final'}</div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Cant</th>
                                <th>Venta</th>
                                <th class="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${ventas.map(d => `
                                <tr>
                                    <td>${d.cantidad} ${d.unidadMedida === 'UNIDAD' ? 'U' : 'L'}</td>
                                    <td>${d.articulo}</td>
                                    <td class="text-right">$${d.subtotal.toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <div class="text-right total-row">
                        TOTAL: $${total.toFixed(2)}
                    </div>
                    <div class="footer">
                        <p>¡Gracias por su compra!</p>
                        <p>Este documento no tiene validez tributaria.</p>
                    </div>
                    <script>
                        window.onload = function() {
                            setTimeout(function() {
                                window.print();
                                window.close();
                            }, 500);
                        }
                    </script>
                </body>
            </html>
        `;

        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();
    }

    esPorPagar(): boolean {
        return this.estadoSelecionado && this.estadoSelecionado.valor === false;
    }

    esPagado(): boolean {
        return this.estadoSelecionado && this.estadoSelecionado.valor === true;
    }

    siTipoPagoSeleccionado(): boolean {
        return this.tipoPagoSeleccionado != null;
    }

    siAbona(): boolean {
        return this.isAbona && this.isAbona.valor === 'S';
    }

    onEstadoChange(): void {
        this.isAbona = null;
        this.tipoPagoSeleccionado = null;
        this.monto = '';
    }

    onAbonoChange(): void {
        this.tipoPagoSeleccionado = null;
        this.monto = '';
    }

    montoIngresado(): boolean {
        return this.monto.trim() !== '';
    }


    agregarIngresoVenta(articulo: Articulo, ingreso: IngresoStock): void {
        const venta = {
            idOrden: ingreso.id,
            articulo: articulo.nombreArticulo,
            descripcion: articulo.descripcion,
            cantidadOriginal: ingreso.unidades,
            cantidad: 0,
            precioUnitario: ingreso.precioVenta || 0,
            subtotal: 0,
            unidadMedida: articulo.permiteFracciones ? 'LIBRAS' : 'UNIDAD',
            montoCobro: null,
            permiteFracciones: articulo.permiteFracciones
        };

        this.ventas.push(venta);
        this.closeModalDialogArticulos();
    }

    obtenerFactorConversion(unidad: string): number {
        if (unidad === 'LIBRAS') return 0.01;
        if (unidad === 'QUINTALES') return 1;
        if (unidad === 'SACOS DE 25LB') return 0.25;
        return 1; // UNIDAD o cualquiera por defecto
    }

    calcularSubtotal(venta: any): void {
        const cant = parseFloat(venta.cantidad) || 0;
        const precio = parseFloat(venta.precioUnitario) || 0;
        const factor = this.obtenerFactorConversion(venta.unidadMedida);

        const montoCalculado = cant * (precio * factor);
        venta.subtotal = montoCalculado;
        
        if (venta.montoCobro !== montoCalculado) {
            venta.montoCobro = null;
        }
        this.calcularTotal();
    }

    calcularCantidadPorMonto(venta: any): void {
        const monto = parseFloat(venta.montoCobro) || 0;
        const precio = parseFloat(venta.precioUnitario) || 0;
        const factor = this.obtenerFactorConversion(venta.unidadMedida);
        const precioPorUnidadSeleccionada = precio * factor;

        if (precioPorUnidadSeleccionada > 0) {
            venta.cantidad = Number((monto / precioPorUnidadSeleccionada).toFixed(4));
            venta.subtotal = monto;
        } else {
            venta.cantidad = 0;
            venta.subtotal = 0;
        }
        this.calcularTotal();
    }

    calcularTotal(): void {
        // Suma todos los subtotales para obtener el total general
        this.total = this.ventas.reduce((sum, venta) => sum + venta.subtotal, 0);
    }


    limpiarCampos(): void {
        this.fecha = new Date();
        this.comprador = '';
        this.estadoSelecionado = null;
        this.tipoPagoSeleccionado = null;
        this.isAbona = null;
        this.monto = '';
        this.ventas = [];
        this.total = 0;
    }

    puedeRegistrarVenta(): boolean {
        // Estado "Pagado" con tipo de pago seleccionado
        if (
            this.estadoSelecionado &&
            this.estadoSelecionado.valor === true &&
            this.tipoPagoSeleccionado &&
            (this.tipoPagoSeleccionado.valor === 'T' || this.tipoPagoSeleccionado.valor === 'E')
        ) {
            return true;
        }

        // Estado "Por Pagar", "Abona Saldo" es "No"
        if (
            this.estadoSelecionado &&
            this.estadoSelecionado.valor === false &&
            this.isAbona &&
            this.isAbona.valor === 'N'
        ) {
            return true;
        }

        // Estado "Por Pagar", "Abona Saldo" es "Sí", y el monto tiene valor
        if (
            this.estadoSelecionado &&
            this.estadoSelecionado.valor === false &&
            this.isAbona &&
            this.isAbona.valor === 'S' &&
            this.montoIngresado()
        ) {
            return true;
        }

        return false;
    }

    loadArticulos(): void {
        this.articuloService
            .listarArticulos()
            .pipe(
                tap((data) => {
                    this.articulos = data;
                    console.log('Artículos:', this.articulos);
                    this.loading = false;
                }),
                catchError((error) => {
                    console.error('Error al obtener artículos:', error);
                    this.loading = false;
                    return of([]);
                })
            )
            .subscribe();
    }

    toggleRow(articulo: Articulo): void {
        const key = articulo.id?.toString() || '';
        if (this.expandedRows[key]) {
            delete this.expandedRows[key];
        } else {
            this.expandedRows = {}; // Resetea las filas expandidas
            this.loadIngresos(articulo).subscribe(() => {
                this.expandedRows[key] = true;
            });
        }
    }


    onTermInput(event: any) {
        const term = event.target.value;
        if (term.length >= 1) {
            this.expandedRows = {};
            this.first = 0; // Restablecer la página a la primera
            this.articuloService.buscarArticulosPorNombre(term).subscribe(
                (data: Articulo[]) => {
                    this.articulos = data;
                },
                (error) => {
                    console.error('Error al buscar el artículo:', error);
                }
            );
        } else {
            this.loadArticulos();
        }
    }


    loadIngresos(articulo: Articulo): Observable<any> {
        return this.articuloService
            .obtenerIngresosPorArticulo(articulo.id!)
            .pipe(
                tap((data) => {
                    articulo.ingresosStock = data;
                    console.log(
                        `Ingresos para el artículo ${articulo.id}:`,
                        articulo.ingresosStock
                    );
                }),
                catchError((error) => {
                    console.error(
                        `Error al obtener ingresos para el artículo ${articulo.id}:`,
                        error
                    );
                    return of([]);
                })
            );
    }

    /* openDialogVentasRealizadas() {
         this.listarVentasRegistradas();
         this.ventasRegistradasDialog = true;
     }
 
     closeDialogVentasRealizadas() {
         this.ventasRegistradasDialog = false;
     }
 */


    /*listarVentasRegistradas() {
            this.articuloService.listarVentasRegistradas().subscribe(
                (data: any[]) => {
                    this.ventasRegistradas = data;
                },
                (error: any) => {
                    console.log(error);
                }
            );
        }*/




    //Metodos para registro de salidas de un articulo

    /*   showSalidaArticulosDialog(
           ingresoStock: IngresoStock,
           nombreArticulo: string
       ) {
           this.salidaArticuloForm.patchValue({
               codigoOrden: ingresoStock.id,
               nombreArticulo: nombreArticulo,
               precioVendido: ingresoStock.precioVenta,
               fechaVenta: new Date(),
               unidadesVendidas: null,
               comprador: null
           });
           this.salidaProductoDialog = true;
           console.log('Código de Orden en el diálogo:', ingresoStock.id);
           console.log(
               'Valores del formulario después de patchValue:',
               this.salidaArticuloForm.value
           );
       }
   
       registrarSalidaArticulos(): void {
           if (this.salidaArticuloForm.invalid) {
               this.messageService.add({
                   severity: 'warn',
                   summary: 'Advertencia',
                   detail: 'Complete todos los campos requeridos.',
               });
               return;
           }
   
           const formValues = this.salidaArticuloForm.value;
           console.log('Valores del formulario:', formValues);
           console.log('Código de orden en formulario:', formValues.codigoOrden);
   
           if (!formValues.codigoOrden) {
               this.messageService.add({
                   severity: 'error',
                   summary: 'Error',
                   detail: 'Código de orden no válido.',
               });
               return;
           }
   
           const fechaVentaLocal = new Date(formValues.fechaVenta);
           const fechaVentaUTC = new Date(
               Date.UTC(
                   fechaVentaLocal.getFullYear(),
                   fechaVentaLocal.getMonth(),
                   fechaVentaLocal.getDate(),
                   fechaVentaLocal.getHours(),
                   fechaVentaLocal.getMinutes(),
                   fechaVentaLocal.getSeconds()
               )
           );
   
           const salidaArticulo: SalidaArticulo = {
               ingresoStock: {
                   id: Number(formValues.codigoOrden),
               },
               fechaVenta: fechaVentaUTC.toISOString(),
               precioVendido: formValues.precioVendido,
               unidadesVendidas: parseInt(formValues.unidadesVendidas, 10),
               comprador: formValues.comprador
           };
   
           console.log('Datos enviados:', JSON.stringify(salidaArticulo));
   
           this.articuloService.registrarSalidaArticulo(salidaArticulo).subscribe(
               () => {
                   this.loadArticulos();
                   this.salidaProductoDialog = false;
                   this.expandedRows = {};
                   this.salidaArticuloForm.reset();
                   this.messageService.add({
                       severity: 'success',
                       summary: 'Éxito',
                       detail: 'Salida de artículo registrada correctamente.',
                   });
               },
               (error) => {
                   if (
                       error.status === 400 &&
                       error.error.message ===
                       'No hay ninguna caja abierta. No se puede la salida del articulo.'
                   ) {
                       this.messageService.add({
                           severity: 'error',
                           summary: 'Error',
                           detail: 'No se puede registrar la operación. Debes de abrir caja.',
                       });
                   } else {
                       const errorMessage = error.error
                           ? error.error
                           : 'Ocurrió un error al registrar la salida de artículo.';
                       this.messageService.add({
                           severity: 'error',
                           summary: 'Error',
                           detail: errorMessage,
                       });
                   }
               }
           );
       }
   
       CloseModalSalida() {
           this.salidaProductoDialog = false;
           this.salidaArticuloForm.reset();
       }
   
       handleInput(event: any): void {
           const value = event.target.value;
           if (!value) {
               this.fechaPlaceholder = 'dd/MM/AAAA';
           }
       }
   */
    //Metodos para busqueda

}
