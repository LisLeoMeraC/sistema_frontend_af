export interface FacturasIngresadas {
    id: number;
    clienteId: number;
    nombres: string;
    apellidos: string;
    fecha: string;
    cantQuintales: number;
  }
  
  export interface PaginacionFactura {
    content: FacturasIngresadas[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    // Otros campos de paginación que necesites
  }