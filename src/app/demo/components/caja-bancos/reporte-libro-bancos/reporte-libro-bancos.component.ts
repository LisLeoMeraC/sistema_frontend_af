import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionBancariaService } from '../../../service/transaccion-bancaria.service';
import { ReporteLibroBancosDTO } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-reporte-libro-bancos',
  templateUrl: './reporte-libro-bancos.component.html',
  styleUrls: ['./reporte-libro-bancos.component.scss']
})
export class ReporteLibroBancosComponent implements OnInit {

  @ViewChild('reportePaper') reportePaper!: ElementRef;

  reporte: ReporteLibroBancosDTO | null = null;
  transaccionesDecoradas: any[] = [];
  fechaActual = new Date();
  usuarioActual = 'Admin';
  descargando = false;

  cantidadIngresos = 0;
  cantidadEgresos = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transaccionService: TransaccionBancariaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cuentaId = params['cuentaId'];
      const inicio = this.route.snapshot.queryParamMap.get('inicio');
      const fin = this.route.snapshot.queryParamMap.get('fin');

      if (cuentaId && inicio && fin) {
        this.cargarReporte(cuentaId, inicio, fin);
      } else {
        Swal.fire('Error', 'Faltan parámetros para generar el reporte', 'error');
        this.volver();
      }
    });
  }

  cargarReporte(cuentaId: number, inicio: string, fin: string) {
    this.transaccionService.generarReporte(cuentaId, inicio, fin).subscribe({
      next: (data) => {
        this.reporte = data;
        this.procesarTransacciones();
      },
      error: () => {
        Swal.fire('Error', 'No se pudo generar el reporte', 'error');
      }
    });
  }

  procesarTransacciones() {
    if (!this.reporte) return;

    let saldoAcumulado = this.reporte.saldoInicial;
    this.cantidadIngresos = 0;
    this.cantidadEgresos = 0;

    this.transaccionesDecoradas = this.reporte.transacciones.map(tx => {
      if (tx.tipo === 'INGRESO') {
        saldoAcumulado += tx.monto;
        this.cantidadIngresos++;
      } else {
        saldoAcumulado -= tx.monto;
        this.cantidadEgresos++;
      }
      return { ...tx, saldoAcumulado };
    });
  }

  async descargarPDF() {
    if (!this.reportePaper) return;
    this.descargando = true;

    try {
      const element = this.reportePaper.nativeElement as HTMLElement;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let posY = 0;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, posY, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Páginas adicionales si el contenido es largo
      while (heightLeft > 0) {
        posY -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, posY, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      const banco = this.reporte?.bancoNombre?.replace(/\s+/g, '_') || 'Banco';
      const fecha = new Date().toISOString().split('T')[0];
      pdf.save(`LibroBancos_${banco}_${fecha}.pdf`);
    } catch (err) {
      Swal.fire('Error', 'No se pudo generar el PDF', 'error');
    } finally {
      this.descargando = false;
    }
  }

  volver() {
    this.router.navigate(['/caja-bancos/transacciones-banco']);
  }
}
