import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoFacturaComponent } from './ingreso-factura/ingreso-factura.component';
import { DashboardAsistenteFactComponent } from './dashboard-asistente-fact/dashboard-asistente-fact.component';
import { ViewFacturasComponent } from './view-facturas/view-facturas.component';
import { AsistenteFacturaRoutingModule } from './asistente-factura-routing.module'; // Importa el módulo de enrutamiento
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    IngresoFacturaComponent,
    DashboardAsistenteFactComponent,
    ViewFacturasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ListboxModule,
    AutoCompleteModule,
    DropdownModule,
    RippleModule,
    FormsModule,
    HttpClientModule,
    RatingModule,
    SliderModule,
    ToggleButtonModule,
    MultiSelectModule,
    ProgressBarModule,
    CalendarModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    AsistenteFacturaRoutingModule // Asegúrate de incluirlo aquí
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class AsistenteFacturaModule { }