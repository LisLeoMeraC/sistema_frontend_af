import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngresoFacturaComponent } from '../components/Asistente-factura/ingreso-factura/ingreso-factura.component';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { IngresoFactura } from 'src/app/models/ingresoFactura';
import { RespuestaFacturas } from 'src/app/models/respuestaFacturas';
import { PaginacionFactura } from 'src/app/models/facturasIngresadas';

@Injectable({
    providedIn: 'root',
})
export class IngresoFacturaService {
    constructor(private http: HttpClient) { }

    registrarFactura(
        ingresoFactura: IngresoFactura
    ): Observable<IngresoFactura> {
        return this.http.post<IngresoFactura>(
            `${baseUrl}/ingresofactura/`,
            ingresoFactura
        );
    }

    buscarFacturas(
        codigo: number,
        mes?: string,
        anio?: number
    ): Observable<IngresoFactura[]> {
        let params = new HttpParams().set('codigo', codigo.toString());
        if (mes) params = params.set('mes', mes);
        if (anio) params = params.set('anio', anio.toString());

        return this.http.get<IngresoFactura[]>(
            `${baseUrl}/ingresofactura/buscar`,
            { params }
        );
    }

    buscarFacturasPorFecha(
        codigo: number,
        fechaDesde?: string,
        fechaHasta?: string
    ): Observable<any> {
        let params = new HttpParams().set('codigo', codigo.toString());
        if (fechaDesde) params = params.set('fechaDesde', fechaDesde);
        if (fechaHasta) params = params.set('fechaHasta', fechaHasta);

        return this.http.get<any>(
            `${baseUrl}/ingresofactura/buscar-por-fecha`,
            { params }
        );
    }

    buscarFacturasGrafico(
        codigo: number,
        mes?: number,
        anio?: number
    ): Observable<RespuestaFacturas> {
        return this.http.get<RespuestaFacturas>(
            `${baseUrl}/ingresofactura/buscar?codigo=${codigo}&mes=${mes}&anio=${anio}`
        );
    }

    obtenerFacturas(): Observable<IngresoFactura[]> {
        return this.http.get<IngresoFactura[]>(`${baseUrl}/ingresofactura`);
    }

    obtenerFacturasPaginadas(
        page: number,
        size: number
    ): Observable<PaginacionFactura> {
        let params = new HttpParams()
            .set(`page`, page.toString())
            .set(`size`, size.toString());
        return this.http.get<PaginacionFactura>(`${baseUrl}/ingresofactura`, {
            params,
        });
    }

    obtenerFacturasFiltradas(
        page: number,
        size: number,
        idCliente?: number,
        mes?: string,
        anio?: number
    ): Observable<PaginacionFactura> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        if (idCliente) params = params.set('idCliente', idCliente.toString());
        if (mes) params = params.set('mes', mes);
        if (anio) params = params.set('anio', anio.toString());

        return this.http.get<PaginacionFactura>(
            `${baseUrl}/ingresofactura/filtrar`,
            { params }
        );
    }

    public actualizarFactura(
        id: number,
        ingresoFactura: IngresoFactura
    ): Observable<IngresoFactura> {
        return this.http.put<IngresoFactura>(
            `${baseUrl}/ingresofactura/${id}`,
            ingresoFactura
        );
    }

    eliminarFactura(id: number): Observable<any> {
        return this.http.delete(`${baseUrl}/ingresofactura/${id}`);
    }
}
