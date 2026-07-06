import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { CuentaPorCobrarDTO, PagoCuentaRequestDTO } from '../api/caja-bancos';

@Injectable({
  providedIn: 'root'
})
export class CuentaPorCobrarService {
  constructor(private http: HttpClient) {}

  listarCuentasPorCobrar(): Observable<CuentaPorCobrarDTO[]> {
    return this.http.get<CuentaPorCobrarDTO[]>(`${baseUrl}/cuentas-por-cobrar`);
  }

  cobrarCuenta(id: number, request: PagoCuentaRequestDTO): Observable<CuentaPorCobrarDTO> {
    return this.http.post<CuentaPorCobrarDTO>(`${baseUrl}/cuentas-por-cobrar/${id}/cobrar`, request);
  }
}
