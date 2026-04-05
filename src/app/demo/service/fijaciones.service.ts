import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Fijacion } from 'src/app/models/fijacion';
import { DetalleFijacion } from 'src/app/models/detalleFijacion';

@Injectable({
    providedIn: 'root',
})
export class FijacionesService {
    constructor(private http: HttpClient) {}

    registrarFijacion(): Observable<Fijacion> {
        return this.http.post<Fijacion>(`${baseUrl}/fijaciones/crear`, {});
    }

    registrarDetalle(
        detalleFijacion: DetalleFijacion
    ): Observable<DetalleFijacion> {
        return this.http.post<DetalleFijacion>(
            `${baseUrl}/fijaciones/detalle`,
            detalleFijacion
        );
    }

    actualizarDetalle(id: number, detalleFijacion: DetalleFijacion): Observable<DetalleFijacion> {
        return this.http.put<DetalleFijacion>(
            `${baseUrl}/fijaciones/detalle/${id}`,
            detalleFijacion
        );
    }

    obtenerFijaciones(): Observable<Fijacion[]> {
        return this.http.get<Fijacion[]>(`${baseUrl}/fijaciones`);
    }

    obtenerDetalleFijacionesId(
        fijacionId: number
    ): Observable<DetalleFijacion[]> {
        return this.http.get<DetalleFijacion[]>(
            `${baseUrl}/fijaciones/detalles/${fijacionId}`
        );
    }

    registrarCorte(idFijacion: number): Observable<void> {
        return this.http.post<void>(
            `${baseUrl}/fijaciones/corte/${idFijacion}`,
            {}
        );
    }
    obtenerobtenerFijacionesPorFecha(fechaInicio: string, fechaFin:string): Observable<Fijacion[]>{
      return this.http.get<Fijacion[]>(`${baseUrl}/fijaciones/fecha?desde=${fechaInicio}&hasta=${fechaFin}`);
    }

    eliminarDetalle(id: number): Observable<void> {
        return this.http.delete<void>(`${baseUrl}/fijaciones/detalles/${id}`);
    }
}
