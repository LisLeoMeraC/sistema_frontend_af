import { Cliente } from "./cliente.model";

export interface CompraCacao {
    id?: number;
    tipoCliente: { id: number };
    tipoCacao: { id: number; nombre?: string };
    fechaCompra: string | Date;
    cantidadLibras: number;
    totalPagado: number;
    pagoEfectivo: number;
    pagoTransferencia: number;
    precioPorQuintal: number;
    cliente?: Cliente;
    cuentaBancariaId?: number;
}
