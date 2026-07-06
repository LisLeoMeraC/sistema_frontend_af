import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CajaService } from 'src/app/demo/service/caja.service';
import { LoginService } from 'src/app/demo/service/login.service';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reporte-cierre-caja',
  templateUrl: './reporte-cierre-caja.component.html',
  styleUrls: ['./reporte-cierre-caja.component.scss']
})
export class ReporteCierreCajaComponent implements OnInit {
  
  @ViewChild('reportContent', { static: false }) reportContent!: ElementRef;

  cajaId!: number;
  caja: any = null;
  transacciones: any[] = [];
  
  // Agrupaciones
  pagosProveedores: any[] = [];
  cobrosClientes: any[] = [];
  gastosAdministrativos: any[] = [];
  otrosIngresos: any[] = [];

  // Totales
  totalPagosProveedores = 0;
  totalCobrosClientes = 0;
  totalGastosAdministrativos = 0;
  totalOtrosIngresos = 0;

  // Indicadores
  numIngresos = 0;
  numEgresos = 0;
  mayorIngreso = 0;
  mayorEgreso = 0;
  promedioMovimiento = 0;

  usuarioCierre = '';
  observacionesCajero = '';
  fechaReporte = new Date();

  cargando = true;

  constructor(
    private route: ActivatedRoute,
    private cajaService: CajaService,
    private loginService: LoginService,
    private messageService: MessageService
  ) { 
    // Usuario por defecto del login
    const credenciales = this.loginService.getUser();
    this.usuarioCierre = credenciales ? credenciales.username : 'Cajero / Secretaria';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.cajaId = parseInt(params['id']);
        this.cargarDatos();
      } else {
        this.messageService.add({severity:'error', summary:'Error', detail:'No se especificó la caja'});
        this.cargando = false;
      }
    });
  }

  cargarDatos() {
    this.cargando = true;
    
    // Cargar datos de la caja
    this.cajaService.obtenerCajaPorId(this.cajaId).subscribe({
      next: (data) => {
        this.caja = data;
        
        // Luego cargar transacciones
        this.cajaService.obtenerTodasTransaccionesCaja(this.cajaId).subscribe({
          next: (txs) => {
            this.transacciones = txs;
            this.procesarTransacciones();
            this.cargando = false;
          },
          error: (err) => {
            console.error('Error cargando transacciones', err);
            this.messageService.add({severity:'error', summary:'Error', detail:'Error al cargar transacciones'});
            this.cargando = false;
          }
        });
      },
      error: (err) => {
        console.error('Error cargando caja', err);
        this.messageService.add({severity:'error', summary:'Error', detail:'Error al cargar la caja'});
        this.cargando = false;
      }
    });
  }

  procesarTransacciones() {
    let saldoAcumulado = this.caja.saldoInicial || 0;
    
    let totalMonto = 0;
    
    this.transacciones.forEach(tx => {
      // 1 = Ingreso, 2 = Egreso (según el backend)
      const esIngreso = tx.idTipoTransaccion === 1;
      
      if (esIngreso) {
        saldoAcumulado += tx.monto;
        this.numIngresos++;
        if (tx.monto > this.mayorIngreso) this.mayorIngreso = tx.monto;
      } else {
        saldoAcumulado -= tx.monto;
        this.numEgresos++;
        if (tx.monto > this.mayorEgreso) this.mayorEgreso = tx.monto;
      }
      
      totalMonto += tx.monto;
      tx.saldoDespues = saldoAcumulado;
      tx.tipoNombre = esIngreso ? 'Ingreso' : 'Egreso';
      
      // Clasificación por descripción (heurística)
      const desc = tx.descripcion ? tx.descripcion.toLowerCase() : '';
      
      if (esIngreso) {
        if (desc.includes('ventas') || desc.includes('cobro') || desc.includes('factura')) {
          this.cobrosClientes.push(tx);
          this.totalCobrosClientes += tx.monto;
        } else {
          this.otrosIngresos.push(tx);
          this.totalOtrosIngresos += tx.monto;
        }
      } else {
        if (desc.includes('compra') && desc.includes('cacao')) {
          this.pagosProveedores.push(tx);
          this.totalPagosProveedores += tx.monto;
        } else {
          this.gastosAdministrativos.push(tx);
          this.totalGastosAdministrativos += tx.monto;
        }
      }
    });
    
    if (this.transacciones.length > 0) {
      this.promedioMovimiento = totalMonto / this.transacciones.length;
    }
  }

  exportarPDF() {
    const element = this.reportContent.nativeElement;
    
    const opt = {
      margin:       [0.5, 0.5, 0.5, 0.5],
      filename:     `Cierre_Caja_${this.cajaId}_${new Date().getTime()}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    (html2pdf as any)().set(opt).from(element).save();
  }
  
  imprimir() {
    window.print();
  }
}
