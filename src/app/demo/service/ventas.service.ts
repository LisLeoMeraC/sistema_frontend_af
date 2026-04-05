import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { ordenesVenta, pagosOrdenesVenta } from 'src/app/models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  crearOrdenVenta(orden: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/ordenes-ventas/encabezado`, orden);
  }

  registrarDetalleOrdenVenta(detalle: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/ordenes-ventas/crear-detalle`, detalle);
  }

  registrarPagoOrdenVenta(pago: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/ordenes-ventas/registrar-pago-orden`, pago);
  }

  obtenerOrdenesVenta(): Observable<ordenesVenta[]> {
    return this.http.get<ordenesVenta[]>(`${baseUrl}/ordenes-ventas/`);
  }

  obtenerPagosOrdenVenta(ordenId: number): Observable<pagosOrdenesVenta[]> {
    return this.http.get<pagosOrdenesVenta[]>(`${baseUrl}/ordenes-ventas/pagos/${ordenId}`);
  }

  eliminarOrdenVenta(ordenId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/ordenes-ventas/${ordenId}`);
  }
}
