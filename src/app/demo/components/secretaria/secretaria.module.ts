import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes/clientes.component';
import { DashboardSecretariaComponent } from './dashboard-secretaria/dashboard-secretaria.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { CajaComponent } from './caja/caja.component';
import { CompraCacaoComponent } from './compra-cacao/compra-cacao.component';
import { ComprasComponent } from './compras/compras.component';
import { ComprasSemanalesComponent } from './compras-semanales/compras-semanales.component';
import { ViewComprasOtrosProductosComponent } from './view-compras-otros-productos/view-compras-otros-productos.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';


import { MessageService, ConfirmationService } from 'primeng/api';
import { TableDemoRoutingModule } from '../uikit/table/tabledemo-routing.module';
import { SecretariaRoutingModule } from './secretaria.routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { FijacionesComponent } from './fijaciones/fijaciones.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ViewVentasComponent } from './view-ventas/view-ventas.component';

@NgModule({
  declarations: [
    ClientesComponent,
    DashboardSecretariaComponent,
    PrestamosComponent,
    InventarioComponent,
    VentasComponent,
    CajaComponent,
    CompraCacaoComponent,
    ComprasComponent,
    ComprasSemanalesComponent,
    ViewComprasOtrosProductosComponent,
    ViewVentasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TableDemoRoutingModule,
    SecretariaRoutingModule,
    DialogModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
    ToastModule,
    ListboxModule,
    AutoCompleteModule,
    DropdownModule,
    RippleModule,
    RatingModule,
    SliderModule,
    ToggleButtonModule,
    MultiSelectModule,
    ProgressBarModule,
    CalendarModule,
    ConfirmDialogModule,
    SelectButtonModule,
    TooltipModule,
    TabViewModule,
    CheckboxModule,
    ProgressSpinnerModule,
    TagModule
  ],
  providers: [
  ]
})
export class SecretariaModule { }