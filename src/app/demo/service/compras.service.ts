import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
    providedIn: 'root',
})
export class ComprasService {
    constructor(private http: HttpClient) {}

    obtenerProductos(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/productos`);
    }

    registrarCompra(compra: any): Observable<any> {
        return this.http.post<any>(`${baseUrl}/compras/registrar`, compra);
    }

    registrarVenta(venta: any): Observable<any> {
        return this.http.post<any>(`${baseUrl}/compras/venta`, venta);
    }

    obtenerComprasToday(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/compras/today`);
    }

    obtenerVentasToday(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/compras/ventas-today`);
    }

    obtenerTotalComprasToday(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/compras/total-dolares-hoy`);
    }
    obtenerTotalVentasToday(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/compras/total-dolares-Ventas`);
    }

    registrarTransaccionesCaja(): Observable<any> {
        return this.http.post(
            `${baseUrl}/transacciones/otras-compras-caja`,
            {}
        );
    }

    registrarVentasCaja(): Observable<any> {
        return this.http.post(
            `${baseUrl}/transacciones/ventas-caja`,
            {}
        );
    }

    registrarProducto(producto: any): Observable<any> {
        return this.http.post<any>(`${baseUrl}/productos/registrar`, producto);
    }

    listarComprasSemanalesPorFechas(fechaInicio: string, fechaFin: string, producto: string): Observable<any[]> {
     
      return this.http.get<any[]>(`${baseUrl}/compras/semanal?desde=${fechaInicio}&hasta=${fechaFin}&nombreProducto=${producto}`);
    }

    buscarComprasPorFechaYProducto(fecha: string, productoId: number): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/compras/buscar?fecha=${fecha}&productoId=${productoId}`);
    }

    buscarVentasPorFechaYProducto(fecha: string, productoId: number): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/compras/buscar-ventas?fecha=${fecha}&productoId=${productoId}`);
    }

    eliminarCompra(id: number): Observable<void> {
        return this.http.delete<void>(`${baseUrl}/compras/${id}`);
    }
}

