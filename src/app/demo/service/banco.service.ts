import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Banco } from '../api/caja-bancos';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  constructor(private http: HttpClient) {}

  crearBanco(banco: Banco): Observable<Banco> {
    return this.http.post<Banco>(`${baseUrl}/bancos`, banco);
  }

  listarBancosActivos(): Observable<Banco[]> {
    return this.http.get<Banco[]>(`${baseUrl}/bancos`);
  }

  actualizarBanco(id: number, banco: Banco): Observable<Banco> {
    return this.http.put<Banco>(`${baseUrl}/bancos/${id}`, banco);
  }

  desactivarBanco(id: number): Observable<void> {
    return this.http.put<void>(`${baseUrl}/bancos/${id}/desactivar`, {});
  }
}
