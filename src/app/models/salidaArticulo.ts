export interface SalidaArticulo {
  id?: number;
  ingresoStock: { id: number };
  fechaVenta: String;
  precioVendido: number;
  unidadesVendidas: number;
  comprador:String
}