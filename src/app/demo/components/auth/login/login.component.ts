import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/demo/service/login.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .p-password input {
                width: 100%;
                padding: 1rem;
            }

            :host ::ng-deep .pi-eye {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }

            .password-wrapper {
                position: relative;
                width: 100%;
            }

            .password-wrapper input {
                width: 100%;
                padding: 1rem;
                padding-right: 2.5rem; /* Espacio para el botón */
                box-sizing: border-box;
            }

            .password-wrapper .toggle-password {
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
            }

            .password-wrapper .toggle-password i {
                font-size: 1.2rem;
                color: var(--primary-color);
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent implements OnInit {
    loginData = {
        username: '',
        password: '',
    };

    valCheck: string[] = ['remember'];
    passwordFieldType: string = 'password';

    password!: string;

    constructor(
        private loginService: LoginService,
        public layoutService: LayoutService,
        private router: Router,
        private service: MessageService
    ) {}

    ngOnInit(): void {}

    togglePasswordVisibility(): void {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

    login() {
        if (
            this.loginData.username.trim() == '' ||
            this.loginData.username.trim() == null
        ) {
            console.log('Ingrese las credenciales');
            this.service.add({
                key: 'tst',
                severity: 'info',
                summary: 'Info Mensaje',
                detail: 'El nombre de usuario es requerido',
            });
            return;
        }
        if (
            this.loginData.password.trim() == '' ||
            this.loginData.password.trim() == null
        ) {
            this.service.add({
                key: 'tst',
                severity: 'info',
                summary: 'Info Mensaje',
                detail: 'La contraseña es requerida',
            });
            return;
        }

        this.loginService.generateToken(this.loginData).subscribe(
            (data: any) => {
                console.log(data);
                this.loginService.loginUser(data.token);
                this.loginService.getCurrentUser().subscribe((user: any) => {
                    this.loginService.setUser(user);
                    console.log(user);
                    const userRole = this.loginService.getUserRole();
                    console.log('Rol del usuario:', userRole);
                    if (userRole === 'Gerente') {
                        this.router.navigate(['administrador/dashboard-admi']);
                        this.loginService.loginStatusSubjec.next(true);
                    } else if (userRole === 'Secretario/a') {
                        this.router.navigate(['secretaria/dashboard']);
                        this.loginService.loginStatusSubjec.next(true);
                    } else if (userRole === 'Asistente de Facturas') {
                        this.router.navigate(['asistente-factura/ingreso-factura']);
                        this.loginService.loginStatusSubjec.next(true);
                    } else {
                        this.loginService.logout();
                    }
                });
            },
            (error) => {
                console.log(error);
                this.service.add({
                    key: 'tst',
                    severity: 'error',
                    summary: 'Error de Autenticación',
                    detail: 'Usuario o contraseña inválidos',
                });
            }
        );
    }
    logout() {
        this.loginService.logout();
        this.router.navigate(['/']); 
    }

    
}
