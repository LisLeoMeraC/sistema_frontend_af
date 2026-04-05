import { DetalleFactura } from "./detalleFactura";

export interface RespuestaFacturas {
    idCliente: number;
    nombre: string;
    apellidos: string;
    detalles: DetalleFactura[]; 
}