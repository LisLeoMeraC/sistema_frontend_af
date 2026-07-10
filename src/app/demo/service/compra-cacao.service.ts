import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
    providedIn: 'root',
})
export class CompraCacaoService {
    constructor(private http: HttpClient) {}

    obtenerTiposCacao(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/tipos_cacao`);
    }
    registrarCompraCacao(compraCacao: any): Observable<any> {
      return this.http.post<any>(`${baseUrl}/compras-cacao/registrar`, compraCacao);
    }
    obtenerComprasCacao(): Observable<any[]>{
      return this.http.get<any[]>(`${baseUrl}/compras-cacao/today`);
    }

    obtenerComprasCacaoFecha(fecha:string): Observable<any[]>{
      return this.http.get<any[]>(`${baseUrl}/compras-cacao/fecha?fecha=${fecha}`);
    }

    obtenerTotalTipoCacaoToday():Observable<any[]>{
      return this.http.get<any[]>(`${baseUrl}/compras-cacao/total-libras-hoy`);
    }

    registrarTransaccionesCaja(): Observable<any> {
      return this.http.post(`${baseUrl}/transacciones/compras-cacao-caja`, {});
    }

    listarComprasSemanales(): Observable<any[]> {
    
      return this.http.get<any[]>(`${baseUrl}/compras-cacao/agrupadas-todas`);
  }

  listarComprasSemanalesPorFechas(fechaInicio: string, fechaFin: string, tipoCacao?: string): Observable<any[]> {
    let url = `${baseUrl}/compras-cacao/semanal?desde=${fechaInicio}&hasta=${fechaFin}`;
    if (tipoCacao) {
      url += `&tipoCacao=${tipoCacao}`;
    }
    return this.http.get<any[]>(url);
  }

  eliminarCompraCacao(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/compras-cacao/${id}`);
  }

  obtenerDashboardCompras(desde: string, hasta: string): Observable<any> {
    return this.http.get<any>(`${baseUrl}/compras-cacao/dashboard`, {
        params: { desde, hasta }
    });
  }
}
