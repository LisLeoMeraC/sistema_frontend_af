import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardGerenteComponent } from './dashboard-gerente.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DashboardGerenteComponent }
  ])],
  exports: [RouterModule]
})
export class DashboardGerenteRoutingModule { }
