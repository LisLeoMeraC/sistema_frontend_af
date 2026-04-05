import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recinto } from 'src/app/models/recinto.model';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RecintoService {

  constructor(private http: HttpClient) { }

  public listarRecintos():Observable<Recinto[]> {
    return this.http.get<Recinto[]>(`${baseUrl}/recintos`);
  }

  public guardarRecinto(recinto: Recinto): Observable<Recinto>{
    return this.http.post<Recinto>(`${baseUrl}/recintos/`, recinto)
  }

}
