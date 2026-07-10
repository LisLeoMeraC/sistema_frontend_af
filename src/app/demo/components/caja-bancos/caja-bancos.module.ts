import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CajaBancosRoutingModule } from './caja-bancos-routing.module';
import { BancosComponent } from './bancos/bancos.component';
import { CuentasBancariasComponent } from './cuentas-bancarias/cuentas-bancarias.component';
import { TransaccionesBancoComponent } from './transacciones-banco/transacciones-banco.component';
import { CuentasPorPagarComponent } from './cuentas-por-pagar/cuentas-por-pagar.component';
import { CuentasPorCobrarComponent } from './cuentas-por-cobrar/cuentas-por-cobrar.component';
import { ReporteLibroBancosComponent } from './reporte-libro-bancos/reporte-libro-bancos.component';
import { DashboardFinancieroComponent } from './dashboard-financiero/dashboard-financiero.component';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    BancosComponent,
    CuentasBancariasComponent,
    TransaccionesBancoComponent,
    CuentasPorPagarComponent,
    CuentasPorCobrarComponent,
    ReporteLibroBancosComponent,
    DashboardFinancieroComponent
  ],
  imports: [
    CommonModule,
    CajaBancosRoutingModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    ToolbarModule,
    RippleModule,
    ConfirmDialogModule,
    InputNumberModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    ChartModule
  ],

  providers: [MessageService, ConfirmationService]
})
export class CajaBancosModule { }
