
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardAdmiComponent } from './dashboard-admi/dashboard-admi.component';
import { ConsultaCacaoComponent } from './consulta-cacao/consulta-cacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from '../secretaria/caja/caja.component';
import { InventarioComponent } from '../secretaria/inventario/inventario.component';
import { ComprasSemanalesComponent } from '../secretaria/compras-semanales/compras-semanales.component';
import { ViewComprasOtrosProductosComponent } from '../secretaria/view-compras-otros-productos/view-compras-otros-productos.component';
import { FijacionesComponent } from '../secretaria/fijaciones/fijaciones.component';
import { ControlRaComponent } from './control-ra/control-ra.component';
import { ClientesComponent } from '../secretaria/clientes/clientes.component';
import { BalanceComercialComponent } from './balance-comercial/balance-comercial.component';

const routes: Routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'dashboard-admi', component: DashboardAdmiComponent },
    { path: 'consulta-cacao', component: ConsultaCacaoComponent },
    {path:'compras-semanales', component:ComprasSemanalesComponent},
    {path:'caja', component:CajaComponent},
    {path:'view-otras-compras', component:ViewComprasOtrosProductosComponent},
    {path:'inventario', component:InventarioComponent},
    {path:'fijaciones',component:FijacionesComponent},
    {path:'control-ra', component:ControlRaComponent},
    {path:'clientes',component:ClientesComponent},
    {path:'balance-comercial',component:BalanceComercialComponent},
    { path: '', redirectTo: 'dashboard-admi', pathMatch: 'full' },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdministradorRoutingModule{}




