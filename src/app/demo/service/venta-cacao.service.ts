import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import baseUrl from './helper';
import { OrdenVentaCacao } from 'src/app/models/venta-cacao.model';

@Injectable({
    providedIn: 'root',
})
export class VentaCacaoService {
    constructor(private http: HttpClient) {}

    registrarVenta(orden: OrdenVentaCacao): Observable<OrdenVentaCacao> {
        return this.http.post<OrdenVentaCacao>(`${baseUrl}/ordenes-venta-cacao`, orden);
    }

    actualizarVenta(id: number, orden: OrdenVentaCacao): Observable<OrdenVentaCacao> {
        return this.http.put<OrdenVentaCacao>(`${baseUrl}/ordenes-venta-cacao/${id}`, orden);
    }

    desactivarVenta(id: number): Observable<void> {
        return this.http.put<void>(`${baseUrl}/ordenes-venta-cacao/${id}/desactivar`, {});
    }

    listarVentasActivas(): Observable<OrdenVentaCacao[]> {
        return this.http.get<OrdenVentaCacao[]>(`${baseUrl}/ordenes-venta-cacao`);
    }

    buscarVentas(termino: string): Observable<OrdenVentaCacao[]> {
        return this.http.get<OrdenVentaCacao[]>(`${baseUrl}/ordenes-venta-cacao/buscar?termino=${termino}`);
    }

    obtenerVentaPorId(id: number): Observable<OrdenVentaCacao> {
        return this.http.get<OrdenVentaCacao>(`${baseUrl}/ordenes-venta-cacao/${id}`);
    }

    descargarPdf(id: number): Observable<Blob> {
        return this.http.get(`${baseUrl}/ordenes-venta-cacao/${id}/pdf`, { responseType: 'blob' }).pipe(
            tap((blob: Blob) => {
                const blobUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = `orden_venta_cacao_${id}.pdf`;
                link.click();
                window.URL.revokeObjectURL(blobUrl);
            })
        );
    }
}
