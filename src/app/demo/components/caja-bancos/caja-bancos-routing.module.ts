import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BancosComponent } from './bancos/bancos.component';
import { CuentasBancariasComponent } from './cuentas-bancarias/cuentas-bancarias.component';

import { TransaccionesBancoComponent } from './transacciones-banco/transacciones-banco.component';
import { CuentasPorPagarComponent } from './cuentas-por-pagar/cuentas-por-pagar.component';
import { CuentasPorCobrarComponent } from './cuentas-por-cobrar/cuentas-por-cobrar.component';

const routes: Routes = [
  { path: 'bancos', component: BancosComponent },
  { path: 'cuentas-bancarias', component: CuentasBancariasComponent },
  { path: 'transacciones-banco', component: TransaccionesBancoComponent },
  { path: 'cuentas-por-pagar', component: CuentasPorPagarComponent },
  { path: 'cuentas-por-cobrar', component: CuentasPorCobrarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaBancosRoutingModule { }
