import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardFinancieroService } from '../../../service/dashboard-financiero.service';
import { CompraCacaoService } from '../../../service/compra-cacao.service';

@Component({
  selector: 'app-dashboard-gerente',
  templateUrl: './dashboard-gerente.component.html',
  styles: [`
    :host {
      display: block;
      background-color: #F4F6F9;
      min-height: 100vh;
      padding-bottom: 80px; /* space for bottom nav */
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .main-card {
      background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
      border-radius: 20px;
      box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
      color: white;
      padding: 1.5rem;
      position: relative;
      overflow: hidden;
    }

    .glass-card {
      background: #FFFFFF;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      padding: 1.5rem;
    }

    .spend-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 1px solid #f1f5f9;
    }

    .spend-item:last-child {
      border-bottom: none;
    }

    .icon-box {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
    }
    
    .icon-box i {
      font-size: 1.5rem;
    }

    .squircle-btn {
      width: 70px;
      height: 70px;
      border-radius: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: transform 0.2s;
      border: none;
      padding: 0;
      margin-right: 12px;
    }

    .squircle-btn:active {
      transform: scale(0.95);
    }

    .squircle-btn i {
      font-size: 1.5rem;
      margin-bottom: 4px;
    }

    .squircle-btn span {
      font-size: 0.65rem;
      font-weight: 600;
      text-align: center;
      line-height: 1.1;
      padding: 0 2px;
    }

    .wishlist-scroll {
      display: flex;
      overflow-x: auto;
      padding-bottom: 1rem;
      scrollbar-width: none; /* Firefox */
    }

    .wishlist-scroll::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    /* Bottom Navigation Bar */
    .bottom-nav {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 400px;
      background: white;
      border-radius: 30px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.75rem 1.5rem;
      z-index: 1000;
    }

    .bottom-nav-item {
      color: #94a3b8;
      font-size: 1.25rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: color 0.2s, background-color 0.2s;
    }

    .bottom-nav-item.active {
      color: #3b82f6;
    }
    
    .bottom-nav-item:active {
      background-color: #f1f5f9;
    }
  `]
})
export class DashboardGerenteComponent implements OnInit, OnDestroy {

  liquidezTotal = 0;
  
  ultimasCompras: any[] = [];
  
  // Para asignar colores aleatorios o en orden a las compras
  bgClasses = ['bg-red-100 text-red-500', 'bg-yellow-100 text-yellow-500', 'bg-green-100 text-green-500', 'bg-blue-100 text-blue-500'];

  private sub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private dashboardFinancieroService: DashboardFinancieroService,
    private compraCacaoService: CompraCacaoService
  ) { }

  ngOnInit(): void {
    this.cargarLiquidez();
    this.cargarUltimasCompras();
  }

  cargarLiquidez() {
    this.sub.add(
      this.dashboardFinancieroService.obtenerConsolidado().subscribe({
        next: (res) => {
          this.liquidezTotal = res.liquidezTotal || 0;
        },
        error: (err) => {
          console.error("Error al cargar liquidez total", err);
        }
      })
    );
  }

  cargarUltimasCompras() {
    this.sub.add(
      this.compraCacaoService.obtenerComprasCacao().subscribe({
        next: (compras) => {
          // Tomar solo las últimas 5 por ejemplo, y mapearlas para la UI
          const recientes = compras.slice(0, 5);
          this.ultimasCompras = recientes.map((c, index) => {
            return {
              cliente: c.cliente?.nombre || 'Cliente Desconocido',
              monto: c.totalPagar || 0,
              fecha: this.formatearFecha(c.fechaRegistro),
              iconClass: 'pi pi-shopping-bag',
              bgClass: this.bgClasses[index % this.bgClasses.length]
            };
          });
        },
        error: (err) => {
          console.error("Error al cargar compras", err);
        }
      })
    );
  }

  formatearFecha(fechaArray: number[]): string {
    if (!fechaArray || fechaArray.length < 3) return 'Hoy';
    // Asumiendo formato [YYYY, MM, DD, HH, mm]
    const date = new Date(fechaArray[0], fechaArray[1] - 1, fechaArray[2], fechaArray[3] || 0, fechaArray[4] || 0);
    return date.toLocaleString('es-EC', { dateStyle: 'short', timeStyle: 'short' });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
  
  navigate(path: string) {
    this.router.navigate([path]);
  }

}
