import { Proveedor } from "./proveedor.model";

export interface TipoCacao {
    id: number;
    nombre?: string;
}

export interface DetalleVentaCacao {
    id?: number;
    tipoCacao: TipoCacao;
    quintales: number;
    precioPorQuintal: number;
    total?: number;
}

export interface OrdenVentaCacao {
    id?: number;
    fecha: string | Date;
    proveedor: Proveedor;
    quintales?: number;
    precioPorQuintal?: number;
    total?: number;
    formaPago: 'E' | 'T';
    montoPagado?: number;
    cuentaBancariaId?: number;
    notas?: string;
    estado?: string;
    detalles: DetalleVentaCacao[];
}
