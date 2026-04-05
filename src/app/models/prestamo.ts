import { Pago } from "./pago";


export interface Prestamo {
  id: number;
  nombre: string;
  apellidos: string;
  cedula: string;
  contacto: string;
  montoPrestamo: number;
  fechaPrestamo: string;
  estado: string;
  saldoRestante?: number;
  pagos?: Pago[];
}