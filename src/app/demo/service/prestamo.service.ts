import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from 'src/app/models/prestamo';
import baseUrl from './helper';
import { Pago } from 'src/app/models/pago';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(private http: HttpClient) { }

  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(`${baseUrl}/prestamos`);
  }

  getPagosByPrestamoId(prestamoId: number): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${baseUrl}/pagos/prestamo/${prestamoId}`);
  }

  registrarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(`${baseUrl}/prestamos/`, prestamo);
  }

  registrarPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(`${baseUrl}/pagos/`, pago);
  }

  buscarPrestamos(term: string): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(`${baseUrl}/prestamos/buscar`, {
      params: { term }
    });
  }
  
}
