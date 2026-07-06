import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { CuentaBancaria } from '../api/caja-bancos';

@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaService {
  constructor(private http: HttpClient) {}

  crearCuentaBancaria(bancoId: number, cuenta: CuentaBancaria): Observable<CuentaBancaria> {
    return this.http.post<CuentaBancaria>(`${baseUrl}/cuentas-bancarias/banco/${bancoId}`, cuenta);
  }

  listarCuentasBancariasActivas(): Observable<CuentaBancaria[]> {
    return this.http.get<CuentaBancaria[]>(`${baseUrl}/cuentas-bancarias`);
  }

  obtenerCuentaBancariaPorId(id: number): Observable<CuentaBancaria> {
    return this.http.get<CuentaBancaria>(`${baseUrl}/cuentas-bancarias/${id}`);
  }

  actualizarCuentaBancaria(id: number, cuenta: CuentaBancaria): Observable<CuentaBancaria> {
    return this.http.put<CuentaBancaria>(`${baseUrl}/cuentas-bancarias/${id}`, cuenta);
  }

  desactivarCuentaBancaria(id: number): Observable<void> {
    return this.http.put<void>(`${baseUrl}/cuentas-bancarias/${id}/desactivar`, {});
  }
}
