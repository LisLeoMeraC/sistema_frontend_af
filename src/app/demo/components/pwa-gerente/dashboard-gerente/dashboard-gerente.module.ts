import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGerenteComponent } from './dashboard-gerente.component';
import { DashboardGerenteRoutingModule } from './dashboard-gerente-routing.module';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  imports: [
    CommonModule,
    DashboardGerenteRoutingModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule
  ],
  declarations: [DashboardGerenteComponent]
})
export class DashboardGerenteModule { }
