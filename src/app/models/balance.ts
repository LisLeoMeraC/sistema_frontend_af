export interface Balance {
    id?: number;
    descripcion: string;
    fechaInicio: Date;
    fechaFin:Date;
    estado:boolean;

  }

export interface TransaccionBalance{
  id: number;
  balanceId?: number;
  fecha: Date;
  descripcion: string;
  qqNetos: number;
  precio: number;
  total?: number;
  tipo?: string;
}

export interface Gasto{
  id:number;
  balanceId?:number;
  tiposGastos: TipoGasto;
  montoPagado:number;
}

export interface TipoGasto {
  id: number; 
  tipo?:string;
}



