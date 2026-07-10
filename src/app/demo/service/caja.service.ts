import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import baseUrl from './helper';

@Injectable({
    providedIn: 'root',
})
export class CajaService {
    constructor(private http: HttpClient) {}

    abrirCaja(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/caja/abrir`, data);
    }

    listarCajasDescendente(tipoCaja: string = 'GENERAL'): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/caja`, {
            params: { tipoCaja }
        });
    }

    obtenerCajaAbierta(tipoCaja: string = 'GENERAL'): Observable<any> {
        return this.http.get<any>(`${baseUrl}/caja/abierta`, {
            params: { tipoCaja }
        });
    }

    obtenerTiposTransaccion(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/tipoTransaccion`);
    }

    registrarTransaccion(transaccion: any): Observable<any> {
        return this.http.post(
            `${baseUrl}/transacciones/registrar`,
            transaccion
        );
    }

    obtenerTransaccionesPorCaja(
        idCaja: number,
        idTipoTransaccion: number
    ): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/transacciones/listar`, {
            params: {
                idCaja: idCaja.toString(),
                idTipoTransaccion: idTipoTransaccion.toString(),
            },
        });
    }

    obtenerCajaPorId(idCaja: number): Observable<any> {
        return this.http.get<any>(`${baseUrl}/caja/${idCaja}`);
    }

    obtenerTodasTransaccionesCaja(idCaja: number): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/transacciones/caja/${idCaja}`);
    }

    cerrarCaja(id: number, CierreCaja: any): Observable<any> {
        return this.http.post<any>(`${baseUrl}/caja/cerrar/${id}`, CierreCaja);
    }

    eliminarTransaccion(id: number): Observable<void> {
        return this.http.delete<void>(`${baseUrl}/transacciones/${id}`);
      }
}
