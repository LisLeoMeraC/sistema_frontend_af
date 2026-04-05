import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaCacaoComponent } from './consulta-cacao/consulta-cacao.component';
import { BodegaComponent } from './bodega/bodega.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { DashboardsRoutingModule } from '../dashboard/dashboard-routing.module';
import { DashboardAdmiComponent } from './dashboard-admi/dashboard-admi.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FijacionesComponent } from '../secretaria/fijaciones/fijaciones.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ControlRaComponent } from './control-ra/control-ra.component';
import { TabViewModule } from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BalanceComercialComponent } from './balance-comercial/balance-comercial.component';



@NgModule({
  declarations: [
    ConsultaCacaoComponent,
    BodegaComponent,
    DashboardAdmiComponent,
    FijacionesComponent,
    ControlRaComponent,
    BalanceComercialComponent
    
  ],
  imports: [
    CommonModule,
        FormsModule,
        ToastModule,
        DialogModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        AdministradorRoutingModule,
        ReactiveFormsModule,
        CalendarModule,
        InputTextModule,
        DropdownModule,
        ConfirmDialogModule,
        TabViewModule,
        SplitterModule,
        FieldsetModule,
        ProgressSpinnerModule
    
  ]
})
export class AdministradorModule { }
