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
            /* ===== ROOT ===== */
            .login-page {
                display: flex;
                min-height: 100vh;
                width: 100vw;
                background: #ffffff;
                font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                position: relative;
            }

            .top-accent {
                position: fixed;
                top: 0; left: 0; right: 0;
                height: 3px;
                background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%);
                z-index: 100;
            }

            /* ===== LEFT PANEL ===== */
            .side-panel {
                flex: 0 0 45%;
                background: linear-gradient(160deg, #eff6ff 0%, #dbeafe 60%, #e0f2fe 100%);
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .side-inner {
                position: relative;
                z-index: 2;
                padding: 3.5rem;
                max-width: 380px;
            }

            /* Brand */
            .side-brand {
                font-size: 2.8rem;
                font-weight: 800;
                letter-spacing: -1.5px;
                line-height: 1;
                margin-bottom: 1.25rem;
            }
            .side-agro   { color: #1e3a8a; }
            .side-franco { color: #2563eb; }

            .side-tagline {
                font-size: 0.95rem;
                color: #475569;
                line-height: 1.7;
                margin: 0 0 2.5rem 0;
                padding-left: 1rem;
                border-left: 3px solid #3b82f6;
            }

            /* Feature rows */
            .side-features {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .feature-row {
                display: flex;
                align-items: flex-start;
                gap: 0.9rem;
                background: rgba(255,255,255,0.65);
                border: 1px solid rgba(59,130,246,0.12);
                border-radius: 12px;
                padding: 0.9rem 1rem;
                backdrop-filter: blur(4px);
                transition: background 0.2s;
            }
            .feature-row:hover {
                background: rgba(255,255,255,0.9);
            }

            .feature-icon-wrap {
                width: 36px;
                height: 36px;
                min-width: 36px;
                border-radius: 9px;
                background: linear-gradient(135deg, #1d4ed8, #3b82f6);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 3px 8px rgba(59,130,246,0.3);
            }
            .feature-icon-wrap .pi {
                color: #fff;
                font-size: 0.85rem;
            }

            .feature-title {
                font-size: 0.85rem;
                font-weight: 700;
                color: #1e3a8a;
                margin-bottom: 2px;
            }
            .feature-desc {
                font-size: 0.76rem;
                color: #64748b;
                line-height: 1.4;
            }

            /* Decorative rings */
            .panel-ring {
                position: absolute;
                border-radius: 50%;
                border: 1.5px solid rgba(59,130,246,0.15);
                pointer-events: none;
            }
            .ring-1 { width: 350px; height: 350px; bottom: -120px; right: -120px; }
            .ring-2 { width: 220px; height: 220px; bottom: -60px; right: -60px; border-color: rgba(59,130,246,0.10); }
            .ring-3 { width: 140px; height: 140px; top: 30px; left: -50px; }

            /* ===== FORM AREA ===== */
            .form-area {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4rem 2.5rem;
                background: #ffffff;
            }

            .form-inner {
                width: 100%;
                max-width: 360px;
            }

            /* Form header */
            .form-head {
                margin-bottom: 2.5rem;
            }
            .form-title {
                font-size: 2rem;
                font-weight: 800;
                color: #0f172a;
                margin: 0 0 0.5rem 0;
                letter-spacing: -0.5px;
            }
            .form-sub {
                font-size: 0.88rem;
                color: #64748b;
                margin: 0;
                line-height: 1.5;
            }

            /* Form body */
            .form-body {
                display: flex;
                flex-direction: column;
                gap: 1.4rem;
            }

            .input-block {
                display: flex;
                flex-direction: column;
                gap: 0.45rem;
            }

            .input-label {
                font-size: 0.82rem;
                font-weight: 600;
                color: #334155;
                letter-spacing: 0.01em;
            }

            .input-shell {
                position: relative;
                display: flex;
                align-items: center;
            }

            .input-ico {
                position: absolute;
                left: 0.95rem;
                color: #94a3b8;
                font-size: 0.85rem;
                z-index: 1;
                pointer-events: none;
                transition: color 0.2s;
            }

            :host ::ng-deep .clean-input.p-inputtext {
                width: 100%;
                padding: 0.82rem 1rem 0.82rem 2.6rem;
                border: 1.5px solid #e2e8f0;
                border-radius: 10px;
                font-size: 0.9rem;
                background: #f8fafc;
                color: #0f172a;
                transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
            }
            :host ::ng-deep .clean-input.p-inputtext::placeholder {
                color: #c0cad8;
            }
            :host ::ng-deep .clean-input.p-inputtext:focus {
                border-color: #3b82f6;
                background: #fff;
                box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
                outline: none;
            }
            :host ::ng-deep .clean-input-pwd.p-inputtext {
                padding-right: 2.8rem;
            }

            .eye-btn {
                position: absolute;
                right: 0.9rem;
                background: transparent;
                border: none;
                cursor: pointer;
                color: #94a3b8;
                padding: 0;
                display: flex;
                align-items: center;
                transition: color 0.2s;
                z-index: 2;
            }
            .eye-btn:hover { color: #3b82f6; }
            .eye-btn .pi  { font-size: 0.92rem; }

            /* Login button */
            :host ::ng-deep .login-action-btn.p-button {
                margin-top: 0.3rem;
                padding: 0.88rem 1.5rem;
                border-radius: 10px;
                font-size: 0.92rem;
                font-weight: 700;
                letter-spacing: 0.02em;
                background: linear-gradient(135deg, #1e40af, #2563eb);
                border: none;
                box-shadow: 0 4px 16px rgba(37,99,235,0.35);
                transition: box-shadow 0.2s, transform 0.15s;
                justify-content: space-between;
            }
            :host ::ng-deep .login-action-btn.p-button:hover {
                box-shadow: 0 6px 24px rgba(37,99,235,0.48);
                transform: translateY(-1px);
            }
            :host ::ng-deep .login-action-btn.p-button .p-button-icon {
                font-size: 0.85rem;
                opacity: 0.85;
            }

            /* Footer */
            .form-foot {
                margin-top: 2.5rem;
                font-size: 0.73rem;
                color: #94a3b8;
                text-align: center;
            }

            /* ===== RESPONSIVE ===== */
            @media (max-width: 820px) {
                .side-panel { display: none; }
                .form-area  { padding: 2.5rem 1.5rem; }
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
    ) { }

    ngOnInit(): void { }

    togglePasswordVisibility(): void {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }

    login() {
        if (!this.loginData.username.trim()) {
            this.service.add({
                key: 'tst', severity: 'info',
                summary: 'Info', detail: 'El nombre de usuario es requerido',
            });
            return;
        }
        if (!this.loginData.password.trim()) {
            this.service.add({
                key: 'tst', severity: 'info',
                summary: 'Info', detail: 'La contraseña es requerida',
            });
            return;
        }

        this.loginService.generateToken(this.loginData).subscribe(
            (data: any) => {
                this.loginService.loginUser(data.token);
                this.loginService.getCurrentUser().subscribe((user: any) => {
                    this.loginService.setUser(user);
                    const userRole = this.loginService.getUserRole();
                    if (userRole === 'Gerente') {
                        this.router.navigate(['/pwa-gerente']);
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
                    key: 'tst', severity: 'error',
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
