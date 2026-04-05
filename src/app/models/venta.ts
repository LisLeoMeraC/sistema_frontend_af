export interface ordenesVenta {
   id: number;
   comprador: string;
   estado: boolean;
   fecha: string;
   tipoPago: string;
   valorTotal: number;
   pagosOrdenesVenta?: pagosOrdenesVenta[];
}

export interface pagosOrdenesVenta {
   id: number;
   ordenVenta: { id: number };
   fechaPago: string;
   valorPago: number;
   tipoPago: string;
   saldo?:number
}