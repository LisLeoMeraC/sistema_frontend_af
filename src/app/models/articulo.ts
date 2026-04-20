import { IngresoStock } from "./ingresoStock";

export interface Articulo {
    id: number;
    nombreArticulo: string;
    descripcion: string;
    ingresosStock?: IngresoStock[];
    permiteFracciones?: boolean;
    estado?: boolean;
  }