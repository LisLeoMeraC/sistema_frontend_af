import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/demo/service/articulo.service';
import { ClienteService } from 'src/app/demo/service/cliente.service';

@Component({
  selector: 'app-dashboard-secretaria',
  templateUrl: './dashboard-secretaria.component.html',
  styleUrls: ['./dashboard-secretaria.component.scss']
})
export class DashboardSecretariaComponent implements OnInit {

  totalClientes: number = 0;
  ArticulosPorCaducarModal:boolean=false;
  totalAriculosCaducar: number = 0;
  topArticulos: any[] = [];
  articulosPorCaducar: any[]=[];

  colores: string[] = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

  constructor(private clienteService: ClienteService, private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenertotalClientesRegistrados();
    this.obtenerTopArticulosVendidos();
    this.obtenertotalArticulosPorCaducar();
  }

  obtenertotalClientesRegistrados(){
    this.clienteService.contarClientes().subscribe({
      next: (total) => {
        this.totalClientes = total;
      },
      error: (err) => {
        console.error('Error al contar clientes', err);
      }
    });
  }

  obtenerTopArticulosVendidos(){
    this.articuloService.obtenerTopArticulosVendidos().subscribe({
      next: (articulos) => {
        this.topArticulos = articulos;
      },
      error: (err) => {
        console.error('Error al obtener los artículos más vendidos', err);
      }
    });
  }

  obtenertotalArticulosPorCaducar(){
    this.articuloService.contarAriculosProximoCaducar().subscribe({
      next: (total) => {
        this.totalAriculosCaducar = total;
      },
      error: (err) => {
        console.error('Error al contar articulos proximos a caducar', err);
      }
    });
  }

  //metodos para listar todos los articulos por caducar
  openDialogProductoPorCaducar(){
    this.obtenerArticulosPorCaducar();
    this.ArticulosPorCaducarModal=true;
  }

  closeDialogProductoPorCaducar(){
    this.ArticulosPorCaducarModal=false;
  }

  obtenerArticulosPorCaducar(){
    this.articuloService.obtenerArticulosPorCaducar().subscribe({
      next: (articulos) => {
        this.articulosPorCaducar = articulos;
      },
      error: (err) => {
        console.error('Error al obtener los artículos por caducar', err);
      }
    });
  }

  getColor(index: number): string {
    return this.colores[index % this.colores.length];
  }

  getTextColor(index: number): string {
    const color = this.getColor(index);
    return color.replace('bg-', 'text-');
  }

}
