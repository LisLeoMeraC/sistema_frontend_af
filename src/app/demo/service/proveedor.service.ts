import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Proveedor } from 'src/app/models/proveedor.model';

@Injectable({
    providedIn: 'root',
})
export class ProveedorService {
    constructor(private http: HttpClient) {}

    registrarProveedor(proveedor: Proveedor): Observable<Proveedor> {
        return this.http.post<Proveedor>(`${baseUrl}/proveedores`, proveedor);
    }

    actualizarProveedor(id: number, proveedor: Proveedor): Observable<Proveedor> {
        return this.http.put<Proveedor>(`${baseUrl}/proveedores/${id}`, proveedor);
    }

    desactivarProveedor(id: number): Observable<void> {
        return this.http.put<void>(`${baseUrl}/proveedores/${id}/desactivar`, {});
    }

    listarProveedoresActivos(): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(`${baseUrl}/proveedores`);
    }

    buscarProveedores(termino: string): Observable<Proveedor[]> {
        return this.http.get<Proveedor[]>(`${baseUrl}/proveedores/buscar?termino=${termino}`);
    }

    obtenerProveedorPorId(id: number): Observable<Proveedor> {
        return this.http.get<Proveedor>(`${baseUrl}/proveedores/${id}`);
    }
}
