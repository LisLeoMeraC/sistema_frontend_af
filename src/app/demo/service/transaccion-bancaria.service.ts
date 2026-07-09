import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { TransaccionBancariaDTO, DepositoRetiroDTO } from '../api/caja-bancos';

@Injectable({
  providedIn: 'root'
})
export class TransaccionBancariaService {
  constructor(private http: HttpClient) {}

  listarPorCuenta(cuentaId: number): Observable<TransaccionBancariaDTO[]> {
    return this.http.get<TransaccionBancariaDTO[]>(`${baseUrl}/transacciones-bancarias/cuenta/${cuentaId}`);
  }

  realizarDeposito(deposito: DepositoRetiroDTO): Observable<TransaccionBancariaDTO> {
    return this.http.post<TransaccionBancariaDTO>(`${baseUrl}/transacciones-bancarias/deposito`, deposito);
  }

  realizarRetiro(retiro: DepositoRetiroDTO): Observable<TransaccionBancariaDTO> {
    return this.http.post<TransaccionBancariaDTO>(`${baseUrl}/transacciones-bancarias/retiro`, retiro);
  }

  subirComprobante(id: number, archivo: File): Observable<TransaccionBancariaDTO> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    return this.http.post<TransaccionBancariaDTO>(`${baseUrl}/transacciones-bancarias/${id}/comprobante`, formData);
  }

  descargarComprobante(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/transacciones-bancarias/${id}/comprobante`, { responseType: 'blob', observe: 'response' });
  }

  eliminarComprobante(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/transacciones-bancarias/${id}/comprobante`);
  }
}
