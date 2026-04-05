import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ComprasService } from 'src/app/demo/service/compras.service';

@Component({
    selector: 'app-view-compras-otros-productos',
    templateUrl: './view-compras-otros-productos.component.html',
    styleUrls: ['./view-compras-otros-productos.component.scss'],
})
export class ViewComprasOtrosProductosComponent implements OnInit {
    comprasProductos: any[] = [];
    tiposProductos: any[] = [];

    cantidad: number = 0;
    dineroTotal: number = 0;
    promedio: number = 0;

    cantidadVendida: number=0;
    totalRecibido:number=0;
    ganancia:number=0;

    searchForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private comprasService: ComprasService, private datePipe: DatePipe, private message: MessageService
    ) {
        this.searchForm = this.fb.group({
            fechaInicio: [null],
            fechaFin: [null],
            producto: [null],
        });
    }

    ngOnInit(): void {
        
        this.obtenerProductos();
    }

    obtenerProductos() {
        this.comprasService.obtenerProductos().subscribe((data) => {
            this.tiposProductos = data;
        });
    }
    cargarComprasporFecha() {
      const fechaInicio = this.searchForm.get('fechaInicio')?.value;
        const fechaFin = this.searchForm.get('fechaFin')?.value;
        const productoObj = this.searchForm.get('producto')?.value;

        const producto = productoObj ? productoObj.nombre : '';

        if (fechaInicio && fechaFin && producto) {
            // Formatear las fechas en el formato deseado (yyyy-MM-dd)
            const formattedFechaInicio = this.datePipe.transform(fechaInicio, 'yyyy-MM-dd') || '';
            const formattedFechaFin = this.datePipe.transform(fechaFin, 'yyyy-MM-dd') || '';

            this.comprasService.listarComprasSemanalesPorFechas(formattedFechaInicio, formattedFechaFin, producto).subscribe(
                (data: any[]) => {
                    this.comprasProductos = data;
                    this.calcularTotales();
                },
                (error) => {
                    console.error('Error al obtener las compras filtradas:', error);
                }
            );
        }
    }

    limpiarFechas() {
      this.searchForm.reset();
      this.cantidad=0;
      this.dineroTotal=0;
      this.promedio=0;
    }

    


    


    calcularTotales(): void {
      console.log('Productos en compras:', this.comprasProductos);

    // Sumar solo las cantidades de los registros con tipo 'C'
    this.cantidad = this.comprasProductos.reduce(
        (sum, item) => sum + (item.tipo === 'C' ? (item.cantidad || 0) : 0),
        0
    );

    console.log('Cantidad comprada:', this.cantidad);

    // Sumar el dinero total de los registros con tipo 'C' (compras)
    this.dineroTotal = this.comprasProductos.reduce(
        (sum, item) => sum + (item.tipo === 'C' ? (item.dineroTotal || 0) : 0),
        0
    );

    console.log('Dinero total:', this.dineroTotal);

    // Calcular el promedio si hay alguna cantidad comprada
    this.promedio = this.cantidad > 0 ? this.dineroTotal / this.cantidad : 0;

    // Sumar solo las cantidades de los registros con tipo 'V' o 'VT' (ventas)
    this.cantidadVendida = this.comprasProductos.reduce(
        (sum, item) => sum + ((item.tipo === 'V' || item.tipo === 'VP') ? (item.cantidad || 0) : 0),
        0
    );

    console.log('Cantidad vendida:', this.cantidadVendida);

    // Sumar el dinero total de los registros con tipo 'V' (ventas)
    this.totalRecibido = this.comprasProductos.reduce(
      (sum, item) => sum + ((item.tipo === 'V' || item.tipo === 'VP') ? (item.dineroTotal || 0) : 0),
      0
    );

    console.log('Total recibido:', this.totalRecibido);

    // Calcular la ganancia como la diferencia entre ventas y compras
    this.ganancia = this.totalRecibido - this.dineroTotal;

    console.log('Ganancia:', this.ganancia);
  }
}
