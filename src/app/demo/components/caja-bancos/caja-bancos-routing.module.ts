import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BancosComponent } from './bancos/bancos.component';
import { CuentasBancariasComponent } from './cuentas-bancarias/cuentas-bancarias.component';

import { TransaccionesBancoComponent } from './transacciones-banco/transacciones-banco.component';
import { CuentasPorPagarComponent } from './cuentas-por-pagar/cuentas-por-pagar.component';
import { CuentasPorCobrarComponent } from './cuentas-por-cobrar/cuentas-por-cobrar.component';

import { ReporteLibroBancosComponent } from './reporte-libro-bancos/reporte-libro-bancos.component';
import { DashboardFinancieroComponent } from './dashboard-financiero/dashboard-financiero.component';

const routes: Routes = [
  { path: 'bancos', component: BancosComponent },
  { path: 'cuentas-bancarias', component: CuentasBancariasComponent },
  { path: 'transacciones-banco', component: TransaccionesBancoComponent },
  { path: 'cuentas-por-pagar', component: CuentasPorPagarComponent },
  { path: 'cuentas-por-cobrar', component: CuentasPorCobrarComponent },
  { path: 'reporte-libro-bancos/:cuentaId', component: ReporteLibroBancosComponent },
  { path: 'dashboard-financiero', component: DashboardFinancieroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaBancosRoutingModule { }
