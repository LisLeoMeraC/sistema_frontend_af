import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardFinancieroDTO } from '../api/caja-bancos';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DashboardFinancieroService {
  constructor(private http: HttpClient) { }

  obtenerConsolidado(): Observable<DashboardFinancieroDTO> {
    return this.http.get<DashboardFinancieroDTO>(`${baseUrl}/api/dashboard-financiero/consolidado`);
  }
}
