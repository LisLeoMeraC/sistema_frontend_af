
import { RouterModule, Routes } from "@angular/router";
import { CajaComponent } from "./caja/caja.component";
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
import { FijacionesComponent } from "./fijaciones/fijaciones.component";
import { ViewVentasComponent } from "./view-ventas/view-ventas.component";

const routes: Routes=[
    {path:'clientes', component:ClientesComponent},
    {path:'dashboard', component:DashboardSecretariaComponent},
    {path:'prestamos', component:PrestamosComponent},
    {path:'ventas', component:VentasComponent},
    {path:'caja', component:CajaComponent},
    {path:'compras-cacao', component:CompraCacaoComponent},
    {path:'otras-compras', component:ComprasComponent},
    {path:'inventario', component:InventarioComponent},
    {path:'compras-semanales', component:ComprasSemanalesComponent},
    {path:'view-otras-compras', component:ViewComprasOtrosProductosComponent},
    {path:'view-ventas', component:ViewVentasComponent},

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SecretariaRoutingModule{}