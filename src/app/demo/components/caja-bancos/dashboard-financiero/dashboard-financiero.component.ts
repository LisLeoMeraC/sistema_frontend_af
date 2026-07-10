import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardFinancieroService } from '../../../service/dashboard-financiero.service';
import { DashboardFinancieroDTO } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-dashboard-financiero',
  templateUrl: './dashboard-financiero.component.html',
  styleUrls: ['./dashboard-financiero.component.scss']
})
export class DashboardFinancieroComponent implements OnInit {

  @ViewChild('reportePaper') reportePaper!: ElementRef;

  dashboardData: DashboardFinancieroDTO | null = null;
  fechaActual = new Date();
  usuarioActual = 'Gerencia'; // Todo: get from auth service
  descargando = false;

  donutData: any;
  donutOptions: any;

  barData: any;
  barOptions: any;

  rankingData: any;
  rankingOptions: any;

  constructor(
    private dashboardService: DashboardFinancieroService,
    private router: Router,
    public layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.cargarDashboard();
  }

  cargarDashboard() {
    this.dashboardService.obtenerConsolidado().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.initCharts();
      },
      error: () => {
        Swal.fire('Error', 'No se pudo cargar el dashboard financiero', 'error');
      }
    });
  }

  initCharts() {
    if (!this.dashboardData) return;

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // 1. Donut Chart (Bancos vs Cajas)
    this.donutData = {
      labels: ['Bancos', 'Cajas'],
      datasets: [
        {
          data: [this.dashboardData.totalBancos, this.dashboardData.totalCajas],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--orange-400')]
        }
      ]
    };

    this.donutOptions = {
      plugins: {
        legend: { labels: { usePointStyle: true, color: textColor } }
      },
      cutout: '60%'
    };

    // 2. Bar Chart (Distribución por Banco)
    const bancosLabels = this.dashboardData.distribucionBancos.map(b => b.banco);
    const bancosSaldos = this.dashboardData.distribucionBancos.map(b => b.saldo);

    this.barData = {
      labels: bancosLabels,
      datasets: [
        {
          label: 'Saldo (USD)',
          backgroundColor: documentStyle.getPropertyValue('--indigo-500'),
          data: bancosSaldos
        }
      ]
    };

    this.barOptions = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: { labels: { color: textColor } }
      },
      scales: {
        x: {
          ticks: { color: textColorSecondary, font: { weight: 500 } },
          grid: { color: surfaceBorder, drawBorder: false }
        },
        y: {
          ticks: { color: textColorSecondary },
          grid: { color: surfaceBorder, drawBorder: false }
        }
      }
    };

    // 3. Ranking Cuentas (Top 10)
    const topCuentas = this.dashboardData.cuentasConsolidadas.slice(0, 10);
    this.rankingData = {
      labels: topCuentas.map(c => c.cuenta.length > 20 ? c.cuenta.substring(0, 20) + '...' : c.cuenta),
      datasets: [
        {
          label: 'Saldo Disponible',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: topCuentas.map(c => c.saldoDisponible)
        }
      ]
    };

    this.rankingOptions = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: textColorSecondary }, grid: { color: surfaceBorder } },
        y: { ticks: { color: textColorSecondary }, grid: { display: false } }
      }
    };
  }

  async descargarPDF() {
    if (!this.reportePaper) return;
    this.descargando = true;

    try {
      const element = this.reportePaper.nativeElement as HTMLElement;
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
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

      while (heightLeft > 0) {
        posY -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, posY, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      const fecha = new Date().toISOString().split('T')[0];
      pdf.save(`Dashboard_Financiero_${fecha}.pdf`);
    } catch (err) {
      Swal.fire('Error', 'No se pudo generar el PDF', 'error');
    } finally {
      this.descargando = false;
    }
  }
}
