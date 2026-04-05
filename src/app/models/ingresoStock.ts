
export interface IngresoStock {
    id: number;
    articulo: { id: number };
    fechaIngreso: Date;
    unidades: number;
    precioVenta: number;
    precioCompra: number;
    fechaVencimiento: Date;
    
  }