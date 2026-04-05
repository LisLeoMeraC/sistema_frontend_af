import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Balance, Gasto, TransaccionBalance } from 'src/app/models/balance';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http:HttpClient) { }

  listarBalances(): Observable<Balance[]>{
    return this.http.get<Balance[]>(`${baseUrl}/balance`);
  }
  listarTransaccionesCompraPorBalance(codBalance:number):Observable<TransaccionBalance[]>{
    return this.http.get<TransaccionBalance[]>(`${baseUrl}/balance/transacciones-compras/${codBalance}`);
  }

  listarTransaccionesVentaPorBalance(codBalance:number):Observable<TransaccionBalance[]>{
    return this.http.get<TransaccionBalance[]>(`${baseUrl}/balance/transacciones-ventas/${codBalance}`);
  }

  listarGastosPorBalance(codBalance:number):Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/balance/otros-gastos/${codBalance}`);
  }



  registrarTransaccion(transaccion: TransaccionBalance): Observable<TransaccionBalance> {
    return this.http.post<TransaccionBalance>(`${baseUrl}/balance/transacciones/registrar`, transaccion);
  }
  obtenerTiposGastos():Observable<any[]>{
    return this.http.get<any[]>(`${baseUrl}/balance/tipos-gastos`)
  }
  registrarGasto(gasto:Gasto):Observable<Gasto>{
    return this.http.post<Gasto>(`${baseUrl}/balance/otros-gastos/registrar/`,gasto);
  }


  actualizarRegistro(cod:number, transaccion: TransaccionBalance):Observable<TransaccionBalance>{
    return this.http.put<TransaccionBalance>(`${baseUrl}/balance/transacciones/actualizar/${cod}`,transaccion);
  }

  actualizarGasto(cod:number, gasto:Gasto):Observable<Gasto>{
    return this.http.put<Gasto>(`${baseUrl}/balance/gastos/actualizar/${cod}`,gasto);
  }

  eliminarTransaccion(cod:number):Observable<void>{
    return this.http.delete<void>(`${baseUrl}/balance/transacciones/${cod}`);
  }

  eliminarGasto(cod:number):Observable<void>{
    return this.http.delete<void>(`${baseUrl}/balance/gastos/${cod}`);
  }



}
