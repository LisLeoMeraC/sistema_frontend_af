import { Recinto } from "./recinto.model";

export interface Cliente {
    id: number;
    nombres: string;
    apellidos: string;
    cedula: string;
    telefono: string;
    hectareas: number;
    recinto: Recinto;
    certificado: boolean;
  }