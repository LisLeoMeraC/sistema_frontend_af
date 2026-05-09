import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Cliente } from 'src/app/models/cliente.model';

@Injectable({
    providedIn: 'root',
})
export class ClienteService {
    constructor(private http: HttpClient) {}

    guardarCliente(cliente: any): Observable<any> {
        return this.http.post<any>(`${baseUrl}/clientes/`, cliente);
    }

    actualizarCliente(id: number, cliente: any): Observable<any> {
        return this.http.put<any>(`${baseUrl}/clientes/${id}`, cliente);
    }

    actualizarClienteCertificado(id: number): Observable<any> {
        return this.http.put<any>(`${baseUrl}/clientes/certificado/${id}`, {});
    }

    actualizarClienteYEliminarFacturas(
        id: number,
        cliente: any
    ): Observable<any> {
        return this.http.put<any>(
            `${baseUrl}/clientes/${id}/actualizar-y-eliminar-facturas`,
            cliente
        );
    }

    eliminarCliente(id: number): Observable<any> {
        return this.http.delete<any>(`${baseUrl}/clientes/${id}`);
    }

    public obtenerClientes(): Observable<any[]> {
        return this.http.get<any[]>(`${baseUrl}/clientes`);
    }

    obtenerClientesPaginados(page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());

        return this.http.get<any>(`${baseUrl}/clientes`, { params });
    }

    buscarClientesPorCodigo(codigo: string): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(
            `${baseUrl}/clientes/buscar?cedula=${codigo}`
        );
    }
    buscarClientesPorNombreApellido(term: string): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(
            `${baseUrl}/clientes/buscarPorNombreOApellido?term=${term}`
        );
    }

    buscarClientePorId(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${baseUrl}/clientes/${id}`);
    }

    contarClientes(): Observable<number> {
        return this.http.get<number>(`${baseUrl}/clientes/registrados`);
    }


    buscarClientesPorCodigoPaginado(codigo: string, page: number, size: number): Observable<any> {
        return this.http.get<any>(
            `${baseUrl}/clientes/buscar?cedula=${codigo}&page=${page}&size=${size}`
        );
    }
    
    buscarClientesPorNombreApellidoPaginado(term: string, page: number, size: number): Observable<any> {
        return this.http.get<any>(
            `${baseUrl}/clientes/buscarPorNombreOApellido?term=${term}&page=${page}&size=${size}`
        );
    }

    obtenerReporteVentas(inicio: string, fin: string, programa: string, page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('inicio', inicio)
            .set('fin', fin)
            .set('programa', programa)
            .set('page', page.toString())
            .set('size', size.toString());

        return this.http.get<any>(`${baseUrl}/clientes/reporte-ventas`, { params });
    }
}
