import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { UsuariosComponent } from './demo/components/Administrador/usuarios/usuarios.component';
import { ClientesComponent } from './demo/components/secretaria/clientes/clientes.component';
import { DashboardSecretariaComponent } from './demo/components/secretaria/dashboard-secretaria/dashboard-secretaria.component';
import { IngresoFacturaComponent } from './demo/components/Asistente-factura/ingreso-factura/ingreso-factura.component';
import { PrestamosComponent } from './demo/components/secretaria/prestamos/prestamos.component';
import { InventarioComponent } from './demo/components/secretaria/inventario/inventario.component';
import { DashboardAsistenteFactComponent } from './demo/components/Asistente-factura/dashboard-asistente-fact/dashboard-asistente-fact.component';
import { VentasComponent } from './demo/components/secretaria/ventas/ventas.component';
import { ConsultaCacaoComponent } from './demo/components/Administrador/consulta-cacao/consulta-cacao.component';
import { BodegaComponent } from './demo/components/Administrador/bodega/bodega.component';
import { DashboardAdmiComponent } from './demo/components/Administrador/dashboard-admi/dashboard-admi.component';
import { ViewFacturasComponent } from './demo/components/Asistente-factura/view-facturas/view-facturas.component';
import { CajaComponent } from './demo/components/secretaria/caja/caja.component';
import { CompraCacaoComponent } from './demo/components/secretaria/compra-cacao/compra-cacao.component';
import { ComprasComponent } from './demo/components/secretaria/compras/compras.component';
import { ComprasSemanalesComponent } from './demo/components/secretaria/compras-semanales/compras-semanales.component';
import { ViewComprasOtrosProductosComponent } from './demo/components/secretaria/view-compras-otros-productos/view-compras-otros-productos.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'mydashboard', component: MydashboardComponent },
                    { path: 'mydashboard', component: MydashboardComponent },
          // Carga perezosa para el módulo de administrador
          {
            path: 'administrador',
            loadChildren: () => import('./demo/components/Administrador/administrador.module').then(m => m.AdministradorModule)
          },
           {
            path: 'secretaria',
            loadChildren: () => import('./demo/components/secretaria/secretaria.module').then(m => m.SecretariaModule)
          },
          {
            path: 'asistente-factura',
            loadChildren: () => import('./demo/components/Asistente-factura/asistente-factura.module').then(m => m.AsistenteFacturaModule)
          },
          {
            path: 'caja-bancos',
            loadChildren: () => import('./demo/components/caja-bancos/caja-bancos.module').then(m => m.CajaBancosModule)
          }
                ],
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'pwa-gerente', loadChildren: () => import('./demo/components/pwa-gerente/pwa-gerente.module').then(m => m.PwaGerenteModule) },
            
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }