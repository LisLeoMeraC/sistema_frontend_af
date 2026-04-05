import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { DatePipe, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


//New TODO mydasboard
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { UsuariosComponent } from './demo/components/Administrador/usuarios/usuarios.component';
import { authInterceptorProviders } from './demo/service/auth.interceptor';
import { ListboxModule } from 'primeng/listbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChartModule } from 'primeng/chart';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@NgModule({
    declarations: [
        AppComponent, MydashboardComponent, UsuariosComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        TableModule,
        CommonModule,
        RatingModule,
        ListboxModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        InputTextareaModule,
        ChartModule,
        RippleModule,
        MultiSelectModule,
        TabViewModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        FormsModule,
        DialogModule,
        ReactiveFormsModule,
        SelectButtonModule,
        HttpClientModule,
        AutoCompleteModule,
        TooltipModule,
        ConfirmDialogModule,
        MenuModule

    ],
    providers: [ authInterceptorProviders, DatePipe,
        {  provide: LocationStrategy, useClass: PathLocationStrategy  }, { provide: LOCALE_ID, useValue: 'es' },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,MessageService,ConfirmationService
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
