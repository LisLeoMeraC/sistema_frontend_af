import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { catchError, Observable, throwError } from "rxjs";
import baseUrl from "./helper";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private loginService: LoginService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Solo agregar el token si la solicitud es hacia tu backend
    if (req.url.includes(baseUrl)) {
      const token = this.loginService.getToken();
      console.log("token: ", token);
      if (token != null) {
        req = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
      }
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Token inválido o expirado
          this.loginService.logout();
          this.router.navigate(['/']); // Redirigir a la vista de inicio de sesión
        }
        return throwError(error);
      })
    );
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
