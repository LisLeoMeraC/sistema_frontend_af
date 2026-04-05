
export interface Pago {
  id: number;
  prestamo: { id: number };
  fechaPago: string;
  montoPagado: number;
  
}