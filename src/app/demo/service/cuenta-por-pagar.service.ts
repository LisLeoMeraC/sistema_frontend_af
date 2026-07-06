import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { CuentaPorPagarDTO, PagoCuentaRequestDTO, PagoCuentaDTO } from '../api/caja-bancos';

@Injectable({
  providedIn: 'root'
})
export class CuentaPorPagarService {
  constructor(private http: HttpClient) {}

  listarCuentasPorPagar(): Observable<CuentaPorPagarDTO[]> {
    return this.http.get<CuentaPorPagarDTO[]>(`${baseUrl}/cuentas-por-pagar`);
  }

  pagarCuenta(id: number, request: PagoCuentaRequestDTO): Observable<CuentaPorPagarDTO> {
    return this.http.post<CuentaPorPagarDTO>(`${baseUrl}/cuentas-por-pagar/${id}/pagar`, request);
  }

  listarCuentasPagadas(): Observable<CuentaPorPagarDTO[]> {
    return this.http.get<CuentaPorPagarDTO[]>(`${baseUrl}/cuentas-por-pagar/pagadas`);
  }

  obtenerPagosCuenta(id: number): Observable<PagoCuentaDTO[]> {
    return this.http.get<PagoCuentaDTO[]>(`${baseUrl}/cuentas-por-pagar/${id}/pagos`);
  }
}
