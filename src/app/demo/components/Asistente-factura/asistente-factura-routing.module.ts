
import { IngresoFacturaComponent } from "./ingreso-factura/ingreso-factura.component";
import { DashboardAsistenteFactComponent } from "./dashboard-asistente-fact/dashboard-asistente-fact.component";
import { ViewFacturasComponent } from "./view-facturas/view-facturas.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {path:'ingreso-factura', component:IngresoFacturaComponent},
    {path:'dashboard', component:DashboardAsistenteFactComponent},
    {path:'view-facturas',component:ViewFacturasComponent}              
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AsistenteFacturaRoutingModule{}