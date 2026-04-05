import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlRA } from 'src/app/models/controlRa';
import baseUrl from './helper';
import { Contrato } from 'src/app/models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ControlRaService {

  constructor( private http: HttpClient) { }

  registrarTnAsignada(controlRa:ControlRA): Observable<ControlRA> {
    return this.http.post<ControlRA>(`${baseUrl}/controlra/registrar`, controlRa);
  }

  obtenerControles(): Observable<ControlRA[]> {
    return this.http.get<ControlRA[]>(`${baseUrl}/controlra`);
  }
  actualizarTnAsignada(id: number, controlRA: ControlRA): Observable<ControlRA> {
    return this.http.put<ControlRA>(`${baseUrl}/controlra/actualizar/${id}`, controlRA);
  }

  actualizarEstado(id: number): Observable<ControlRA> {
    return this.http.put<ControlRA>(`${baseUrl}/controlra/estado/${id}`, null);
}

  registrarContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(`${baseUrl}/contratos/registrar`, contrato);
  }
  obtenerContratos():Observable<Contrato[]>{
    return this.http.get<Contrato[]>(`${baseUrl}/contratos/listar`)
  }

  obtenerContratosPorLote(lote: string): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(`${baseUrl}/contratos/lote?lote=${lote}`);
  }

  public eliminarContrato(id:number): Observable<void>{
    return this.http.delete<void>(`${baseUrl}/contratos/${id}`);
  }



}
