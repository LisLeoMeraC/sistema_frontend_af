import { ControlRA } from "./controlRa";

export interface Contrato {
    id: number;
    controlRa?: ControlRA; // Relacionado con la interfaz ControlRA
    kilogramos?: number;
    fecha: string;
    quintales: number;
    contrato: string;
    lote: string;
    observacion?: string;
    estado: boolean;
    placa:string;
    fechaPago?: string; // Campo opcional
}