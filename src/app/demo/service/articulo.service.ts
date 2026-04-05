import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/models/articulo';
import baseUrl from './helper';
import { IngresoStock } from 'src/app/models/ingresoStock';
import { SalidaArticulo } from 'src/app/models/salidaArticulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  registrarArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(`${baseUrl}/articulos/`, articulo);
  }

  public listarArticulos():Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${baseUrl}/articulos`);
  }

  buscarArticulosPorNombre(term: string): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${baseUrl}/articulos/buscarPorNombre?term=${term}`);
  }

  registrarOrden(ingresoStock: IngresoStock): Observable<IngresoStock> {
    return this.http.post<IngresoStock>(`${baseUrl}/ingreso_stock/`, ingresoStock);
  }

  obtenerIngresosPorArticulo(articuloId: number): Observable<IngresoStock[]> {
    return this.http.get<IngresoStock[]>(`${baseUrl}/articulos/${articuloId}/ingresos`);
  }

  registrarSalidaArticulo(salidaArticulo: SalidaArticulo): Observable<SalidaArticulo> {
    return this.http.post<SalidaArticulo>(`${baseUrl}/salidas_articulos`, salidaArticulo);
  }

  public obtenerArticulosConStock(): Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/articulos/existencias`);
  }
  public obtenerTopArticulosVendidos(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/articulos/top-vendidos`);
  }

  public obtenerOrdenesIngresoArticulos(): Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/ingreso_stock`);
  }


  contarAriculosProximoCaducar(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/articulos/proximos-a-caducar`);
  }

  public obtenerArticulosPorCaducar(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/articulos/proximos-a-caducar/detalles`);
  }

  buscarArticulosEstado(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/articulos/buscar-articulo-dto?nombre=${term}`);
  }

  actualizarArticulo(id: number, articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${baseUrl}/articulos/${id}`, articulo);
  }

  actualizarIngresoStock(id: number, ingresoStock: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/ingreso_stock/${id}`, ingresoStock);
  }


  public eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/articulos/${id}`);
  }

  public listarVentasRegistradas(): Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/salidas_articulos`);
  }

}
