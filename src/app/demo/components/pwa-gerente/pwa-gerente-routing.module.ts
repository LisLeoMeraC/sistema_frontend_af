import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./dashboard-gerente/dashboard-gerente.module').then(m => m.DashboardGerenteModule) }
  ])],
  exports: [RouterModule]
})
export class PwaGerenteRoutingModule { }
