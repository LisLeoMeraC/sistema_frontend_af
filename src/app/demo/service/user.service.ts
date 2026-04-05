import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  
  public registrarUsuario(user: any): Observable<any> {
    return this.httpClient.post<any>(`${baseUrl}/usuarios/`, user);
  }

  public obtenerUsuarios(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${baseUrl}/usuarios`);
  }

  public eliminarUsuario(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${baseUrl}/usuarios/${id}`);
  }
  
  public actualizarUsuario(id: number, user: any): Observable<any> {
    return this.httpClient.put<any>(`${baseUrl}/usuarios/${id}`, user);
  }
}
