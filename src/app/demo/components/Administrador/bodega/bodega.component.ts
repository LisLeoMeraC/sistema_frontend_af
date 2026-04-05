import { Component } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ArticuloService } from 'src/app/demo/service/articulo.service';
import { Articulo } from 'src/app/models/articulo';

@Component({
    selector: 'app-bodega',
    templateUrl: './bodega.component.html',
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
            .status-poco {
                background-color: #edba60;
                color: #685128;
            }
        `,
    ],
})
export class BodegaComponent {
    articulos: any[] = [];

    //Para el modal de lista de ingreso stock
    ingresoStockModal: boolean = false;
    selectedArticulo: any;
    constructor(private articulosService: ArticuloService) {}

    ngOnInit(): void {
        this.obtenerArticulos();
    }

    obtenerArticulos() {
        this.articulosService.obtenerArticulosConStock().subscribe(
            (data: any[]) => {
                this.articulos = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    getStatusClass(estado: number): string {
        switch (estado) {
            case 0:
                return 'status-sin-stock';
            case 1:
                return 'status-poco';
            case 2:
                return 'status-en-stock';
            default:
                return '';
        }
    }

    getStatusText(estado: number): string {
        switch (estado) {
            case 0:
                return 'No hay stock';
            case 1:
                return 'Pocas Unidades';
            case 2:
                return 'En Stock';
            default:
                return '';
        }
    }

    //Metodos para listar los ingresos de stock de un articulo

    openModalIngresos(articulo: any) {
      console.log('Artículo seleccionado:', articulo);  // Agrega esto para depurar
      this.selectedArticulo = articulo;
      this.ingresoStockModal = true;
      this.loadIngresos(this.selectedArticulo).subscribe(() => {
          this.ingresoStockModal = true;
      });
  }
    closeModalIngresos() {
        this.ingresoStockModal = false;
    }

    loadIngresos(articulo: any): Observable<any> {
        return this.articulosService
            .obtenerIngresosPorArticulo(articulo.codigo!)
            .pipe(
                tap((data) => {
                    this.selectedArticulo.ingresosStock = data;
                    console.log(
                        `Ingresos para el artículo ${articulo.codigo}:`,
                        this.selectedArticulo.ingresosStock
                    );
                }),
                catchError((error) => {
                    console.error(
                        `Error al obtener ingresos para el artículo ${articulo.codigo}:`,
                        error
                    );
                    return of([]);
                })
            );
    }

    onTermInput(event: any) {
        const term = event.target.value;
        if (term.length >= 1) {
            this.articulosService.buscarArticulosEstado(term).subscribe(
                (data: Articulo[]) => {
                    this.articulos = data;
                },
                (error) => {
                    console.error('Error al buscar el artículo:', error);
                }
            );
        } else {
            this.obtenerArticulos();
        }
    }
  
}
