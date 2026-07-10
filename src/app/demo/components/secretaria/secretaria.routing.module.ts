
import { RouterModule, Routes } from "@angular/router";
import { CajaComponent } from "./caja/caja.component";
import { CajaOperacionesComponent } from "./caja-operaciones/caja-operaciones.component";
import { ReporteCierreCajaComponent } from "./caja/reporte-cierre-caja/reporte-cierre-caja.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { CompraCacaoComponent } from "./compra-cacao/compra-cacao.component";
import { ComprasSemanalesComponent } from "./compras-semanales/compras-semanales.component";
import { ComprasComponent } from "./compras/compras.component";
import { DashboardSecretariaComponent } from "./dashboard-secretaria/dashboard-secretaria.component";
import { InventarioComponent } from "./inventario/inventario.component";
import { PrestamosComponent } from "./prestamos/prestamos.component";
import { VentasComponent } from "./ventas/ventas.component";
import { ViewComprasOtrosProductosComponent } from "./view-compras-otros-productos/view-compras-otros-productos.component";
import { NgModule } from "@angular/core";
import { ViewVentasComponent } from "./view-ventas/view-ventas.component";
import { ReporteMensualClientesComponent } from "./reporte-mensual-clientes/reporte-mensual-clientes.component";
import { VentasCacaoComponent } from "./ventas-cacao/ventas-cacao.component";

const routes: Routes=[
    {path:'clientes', component:ClientesComponent},
    {path:'dashboard', component:DashboardSecretariaComponent},
    {path:'prestamos', component:PrestamosComponent},
    {path:'ventas', component:VentasComponent},
    {path:'caja', component:CajaComponent},
    {path:'caja-operaciones', component:CajaOperacionesComponent},
    {path:'caja/reporte', component:ReporteCierreCajaComponent},
    {path:'compras-cacao', component:CompraCacaoComponent},
    {path:'ventas-cacao', component:VentasCacaoComponent},
    {path:'otras-compras', component:ComprasComponent},
    {path:'inventario', component:InventarioComponent},
    {path:'compras-semanales', component:ComprasSemanalesComponent},
    {path:'view-otras-compras', component:ViewComprasOtrosProductosComponent},
    {path:'view-ventas', component:ViewVentasComponent},
    {path:'reporte-mensual-clientes', component:ReporteMensualClientesComponent},

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SecretariaRoutingModule{}