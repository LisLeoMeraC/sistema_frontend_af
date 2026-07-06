import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { LoginService } from '../demo/service/login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {


    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit() {
        const userRole = this.loginService.getUserRole();
        if (userRole === 'Gerente') {
            this.model = [
                {

                    items: [
                        {
                            label: 'Inicio',
                            icon: 'pi pi-home',
                            routerLink: ['/administrador/dashboard-admi'],
                        },
                    ],
                },
                {

                    label: 'Administración',
                    items: [
                        {
                            label: 'Usuarios',
                            icon: 'pi pi-users',
                            routerLink: ['/administrador/usuarios'],
                        },
                        {
                            label: 'Clientes',
                            icon: 'pi pi-fw pi-users',
                            routerLink: ['/administrador/clientes'],
                        },
                        {
                            label: 'Bancos',
                            icon: 'pi pi-fw pi-building',
                            routerLink: ['/caja-bancos/bancos'],
                        },
                        {
                            label: 'Cuentas Bancarias',
                            icon: 'pi pi-fw pi-id-card',
                            routerLink: ['/caja-bancos/cuentas-bancarias'],
                        },
                        {
                            label: 'Transacciones Bancarias',
                            icon: 'pi pi-fw pi-arrow-right-arrow-left',
                            routerLink: ['/caja-bancos/transacciones-banco'],
                        },
                        {
                            label: 'Cuentas por Pagar',
                            icon: 'pi pi-fw pi-money-bill',
                            routerLink: ['/caja-bancos/cuentas-por-pagar'],
                        },
                        {
                            label: 'Cuentas por Cobrar',
                            icon: 'pi pi-fw pi-dollar',
                            routerLink: ['/caja-bancos/cuentas-por-cobrar'],
                        }
                    ]
                },

                {
                    label: 'Compras de Cacao',
                    items: [
                        {
                            label: 'Compras en General',
                            icon: 'pi pi-shopping-cart',
                            routerLink: ['/administrador/compras-semanales'],
                        },
                        {
                            label: 'Por Cliente Registrado',
                            icon: 'pi pi-user-edit',
                            routerLink: ['/administrador/consulta-cacao'],
                        }
                    ],

                },

                {
                    label: 'Consultas',
                    items: [
                        {
                            label: 'Inventario',
                            icon: 'pi pi-th-large',
                            routerLink: ['/administrador/inventario'],
                        },
                        {
                            label: 'Caja',
                            icon: 'pi pi-money-bill',
                            routerLink: ['/administrador/caja'],
                        },
                        {
                            label: 'Otras Compras y Ventas',
                            icon: 'pi pi-cart-plus',
                            routerLink: ['/administrador/view-otras-compras'],
                        },
                        {
                            label: 'Reporte Mensual de Ventas',
                            icon: 'pi pi-fw pi-calendar-plus',
                            routerLink: ['/secretaria/reporte-mensual-clientes'],
                        },
                    ],

                },
                {
                    label: 'Transacciones',
                    items: [
                        {
                            label: 'Prestamos',
                            icon: 'pi pi-fw pi-wallet',
                            routerLink: ['/secretaria/prestamos'],
                        },
                        {
                            label: 'Ventas',
                            icon: 'pi pi-shopping-cart',
                            routerLink: ['/secretaria/ventas'],
                        },
                        {
                            label: 'Fijaciones',
                            icon: 'pi pi-file-edit',
                            routerLink: ['/administrador/fijaciones'],
                        },
                        {
                            label: 'Balance Comercial',
                            icon: 'pi pi-chart-line',
                            routerLink: ['/administrador/balance-comercial'],
                        },
                        {
                            label: 'Control RA',
                            icon: 'pi pi-shield',
                            routerLink: ['/administrador/control-ra'],
                        },


                    ]
                },


            ];
        } else if (userRole === 'Secretario/a') {
            this.model = [
                {

                    items: [
                        {
                            label: 'Inicio',
                            icon: 'pi pi-home',
                            routerLink: ['secretaria/dashboard'],
                        },
                    ],
                },
                {


                    label: 'Gestión',
                    items: [
                        {
                            label: 'Clientes',
                            icon: 'pi pi-fw pi-users',
                            routerLink: ['/secretaria/clientes'],
                        },
                        {
                            label: 'Caja',
                            icon: 'pi pi-money-bill',
                            routerLink: ['/secretaria/caja'],
                        },
                        {
                            label: 'Prestamos',
                            icon: 'pi pi-fw pi-wallet',
                            routerLink: ['/secretaria/prestamos'],
                        },
                        {
                            label: 'Bancos',
                            icon: 'pi pi-fw pi-building',
                            routerLink: ['/caja-bancos/bancos'],
                        },
                        {
                            label: 'Cuentas Bancarias',
                            icon: 'pi pi-fw pi-id-card',
                            routerLink: ['/caja-bancos/cuentas-bancarias'],
                        },
                        {
                            label: 'Transacciones Bancarias',
                            icon: 'pi pi-fw pi-arrow-right-arrow-left',
                            routerLink: ['/caja-bancos/transacciones-banco'],
                        },
                        {
                            label: 'Cuentas por Pagar',
                            icon: 'pi pi-fw pi-money-bill',
                            routerLink: ['/caja-bancos/cuentas-por-pagar'],
                        },
                        {
                            label: 'Cuentas por Cobrar',
                            icon: 'pi pi-fw pi-dollar',
                            routerLink: ['/caja-bancos/cuentas-por-cobrar'],
                        }
                    ],
                },
                {
                    label: 'Inventario',
                    items: [
                        {
                            label: 'Artículos',
                            icon: 'pi pi-shopping-bag',
                            routerLink: ['/secretaria/inventario'],
                        },
                        {
                            label: 'Ventas',
                            icon: 'pi pi-shopping-cart',
                            routerLink: ['/secretaria/ventas'],
                        },
                    ],
                },


                {
                    label: 'Compras - Ventas',
                    items: [

                        {
                            label: 'Compras de Cacao',
                            icon: 'pi pi-cart-plus',
                            routerLink: ['/secretaria/compras-cacao'],
                        },
                        {
                            label: 'Ventas de Cacao',
                            icon: 'pi pi-cart-plus',
                            routerLink: ['/secretaria/ventas-cacao'],
                        },
                        {
                            label: 'Otros Productos',
                            icon: 'pi pi-cart-plus',
                            routerLink: ['/secretaria/otras-compras'],
                        }
                    ]
                },
                {
                    label: 'Consultas',
                    items: [
                        {
                            label: 'Compras de Cacao',
                            icon: 'pi pi-fw pi-wallet',
                            routerLink: ['/secretaria/compras-semanales'],
                        },
                        {
                            label: 'Otras Compras',
                            icon: 'pi pi-fw pi-wallet',
                            routerLink: ['/secretaria/view-otras-compras'],
                        },
                        {
                            label: 'Facturas Ingresadas',
                            icon: 'pi pi-user-edit',
                            routerLink: ['/administrador/consulta-cacao'],
                        },
                        {
                            label: 'Reporte Mensual de Ventas',
                            icon: 'pi pi-fw pi-calendar-plus',
                            routerLink: ['/secretaria/reporte-mensual-clientes'],
                        }
                    ]
                },
            ];
        } else if (userRole === 'Asistente de Facturas') {
            this.model = [
                {
                    label: 'Operaciones',
                    items: [
                        {
                            label: 'Facturas Ingresadas',
                            icon: 'pi pi-fw pi-list',
                            routerLink: ['/asistente-factura/view-facturas'],
                        },

                        {
                            label: 'Consultas de Facturas',
                            icon: 'pi pi-user-edit',
                            routerLink: ['/administrador/consulta-cacao'],
                        }
                    ],
                },
            ];
        }
        /*  this.router.events.subscribe(event => {
              if (event instanceof NavigationEnd) {
                  const rutasParaOcultarSidebar = [
                      '/asistente-factura/ingreso-factura',
                      '/asistente-factura/view-facturas'
                  ];
                  
                  if (rutasParaOcultarSidebar.includes(event.urlAfterRedirects)) {
                      // Ocultar el sidebar
                      this.layoutService.onMenuToggle();
                  }
              }
          });*/
    }
}
