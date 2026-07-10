import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraCacaoService } from 'src/app/demo/service/compra-cacao.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-compras-semanales',
    templateUrl: './compras-semanales.component.html',
    styleUrls: ['./compras-semanales.component.scss'],
    providers: [DatePipe, CurrencyPipe, DecimalPipe, MessageService],
})
export class ComprasSemanalesComponent implements OnInit {
    comprasSemanales: any[] = [];
    totalQuintales: number = 0;
    dineroTotal: number = 0;
    promedio: number = 0;

    totalLibras: number = 0;

    fechaInicio: Date | undefined;
    fechaFin: Date | undefined;

    searchForm: FormGroup;

    tipoCacao: any[] = [];

    // Propiedades para el Dashboard Estadístico
    dashboardDialog: boolean = false;
    loadingDashboard: boolean = false;
    dashboardData: any = null;
    exportandoPDF: boolean = false;

    pieData: any;
    pieOptions: any;
    lineData: any;
    lineOptions: any;
    barData: any;
    barOptions: any;

    constructor(
        private comprasCacaOService: CompraCacaoService,
        private fb: FormBuilder,
        private datePipe: DatePipe,
        private currencyPipe: CurrencyPipe,
        private decimalPipe: DecimalPipe,
        private messageService: MessageService
    ) {
        this.searchForm = this.fb.group({
            fechaInicio: [null],
            fechaFin: [null],
            tipoCacao: [null],
        });
    }
    ngOnInit(): void {
        this.tipoCacao = [
            { name: 'En Baba', value: 'En Baba' },
            { name: 'Oreado', value: 'Oreado' },
        ];
        this.cargarComprasSemanales();
    }

    cargarComprasSemanales() {
        this.comprasCacaOService.listarComprasSemanales().subscribe(
            (data: any[]) => {
                this.comprasSemanales = data;
                this.calcularTotales();
            },
            (error) => { 
                console.error('Error al obtener las compras:', error);
            }
        );
    }

    calcularTotales(): void {
        this.totalLibras = parseFloat(
            this.comprasSemanales
                .reduce((sum, item) => sum + (item.sumaCantidadLibra || 0), 0)
                .toFixed(2)
        );

        this.totalQuintales = parseFloat((this.totalLibras / 100).toFixed(2));

        this.dineroTotal = parseFloat(
            this.comprasSemanales
                .reduce((sum, item) => sum + (item.sumaValorMasDos || 0), 0)
                .toFixed(2)
        );

        this.promedio =
            this.totalQuintales > 0
                ? parseFloat(
                      (this.dineroTotal / this.totalQuintales).toFixed(2)
                  )
                : 0;
    }

    cargarComprasSemanalesporFecha() {
        const fechaInicioVal = this.searchForm.get('fechaInicio')?.value;
        const fechaFinVal = this.searchForm.get('fechaFin')?.value;
        const tipoCacaoObj = this.searchForm.get('tipoCacao')?.value;

        const formattedFechaInicio =
            this.datePipe.transform(fechaInicioVal, 'yyyy-MM-dd') || '';
        const formattedFechaFin =
            this.datePipe.transform(fechaFinVal, 'yyyy-MM-dd') || '';

        const tipoCacao = tipoCacaoObj ? tipoCacaoObj.value : '';

        this.comprasCacaOService
            .listarComprasSemanalesPorFechas(
                formattedFechaInicio,
                formattedFechaFin,
                tipoCacao
            )
            .subscribe(
                (data: any[]) => {
                    this.comprasSemanales = data;
                    this.calcularTotales();
                },
                (error) => {
                    console.error('Error al obtener las compras:', error);
                }
            );
    }

    generarReportePDF() {
        const doc = new jsPDF('p', 'mm', 'a4');
        const primaryColor: [number, number, number] = [27, 94, 32];
        const secondaryColor: [number, number, number] = [241, 248, 233]; // Verde muy claro para tabla
        const dateNow = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        
        // --- ENCABEZADO MINIMALISTA ELEGANTE ---
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, 210, 3, 'F');

        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setFontSize(32); doc.setFont('times', 'bold');
        doc.text('AGROFRANCO', 15, 20);
        
        doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setLineWidth(0.8);
        doc.line(15, 23, 60, 23);

        doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(80, 80, 80);
        doc.text('CENTRO DE ACOPIO Y COMERCIALIZACIÓN DE CACAO', 15, 30);
        
        doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('REPORTE CONSOLIDADO DE COMPRAS SEMANALES', 15, 36);

        // Caja de Info Sutil con Rango de Fechas
        const fInicio = this.searchForm.get('fechaInicio')?.value;
        const fFin = this.searchForm.get('fechaFin')?.value;
        const periodoStr = (fInicio && fFin) 
            ? `${this.datePipe.transform(fInicio, 'dd/MM/yyyy')} - ${this.datePipe.transform(fFin, 'dd/MM/yyyy')}`
            : 'TODO EL HISTORIAL';

        doc.setDrawColor(220); doc.setLineWidth(0.2); doc.roundedRect(125, 10, 70, 32, 2, 2, 'S');
        doc.setFontSize(8); doc.setTextColor(100);
        
        doc.setFont('helvetica', 'normal'); doc.text(`VARIEDAD:`, 128, 16);
        doc.setFont('helvetica', 'bold'); doc.text(`${this.searchForm.get('tipoCacao')?.value?.name || 'MULTIVARIEDAD'}`, 155, 16);
        
        doc.setFont('helvetica', 'normal'); doc.text(`PERIODO:`, 128, 22);
        doc.setFont('helvetica', 'bold'); doc.text(`${periodoStr}`, 145, 22);

        doc.setFont('helvetica', 'normal'); doc.text(`FECHA EMISIÓN:`, 128, 32);
        doc.text(`${dateNow}`, 155, 32);

        // --- DASHBOARD DE TOTALES (KPIs) ---
        doc.setFillColor(252, 252, 252);
        doc.roundedRect(15, 45, 180, 22, 1, 1, 'F');
        doc.setDrawColor(240); doc.rect(15, 45, 180, 22, 'S');

        // Quintales
        doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.setTextColor(120);
        doc.text('TOTAL QUINTALES', 25, 53);
        doc.setFontSize(14); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(`${this.decimalPipe.transform(this.totalQuintales, '1.2-2')} QQ`, 25, 60);

        // Inversión
        doc.setFontSize(8); doc.setTextColor(120);
        doc.text('INVERSIÓN TOTAL', 85, 53);
        doc.setFontSize(14); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(this.currencyPipe.transform(this.dineroTotal, 'USD') || '$0.00', 85, 60);

        // Promedio
        doc.setFontSize(8); doc.setTextColor(120);
        doc.text('PRECIO PROMEDIO /QQ', 145, 53);
        doc.setFontSize(14); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(`${this.currencyPipe.transform(this.promedio, 'USD')}`, 145, 60);

        // --- TABLA DE DATOS (REDISEÑO LIMPIO) ---
        const tableData = this.comprasSemanales.map(item => [
            this.datePipe.transform(item.fecha, 'dd/MM/yyyy'),
            item.tipoCacao.toUpperCase(),
            this.decimalPipe.transform(item.sumaCantidadLibra, '1.2-2') + ' LB',
            this.currencyPipe.transform(item.sumaValorMasDos, 'USD')
        ]);

        autoTable(doc, {
            startY: 75,
            head: [['Fecha de Operación', 'Variedad de Cacao', 'Peso Registrado', 'Subtotal Transacción']],
            body: tableData,
            theme: 'striped',
            headStyles: { 
                fillColor: [245, 245, 245], 
                textColor: primaryColor, 
                fontSize: 9, 
                halign: 'center',
                fontStyle: 'bold',
                lineWidth: 0.1,
                lineColor: [200, 200, 200]
            },
            bodyStyles: { 
                fontSize: 8.5, 
                textColor: 60,
                valign: 'middle',
                halign: 'center'
            },
            alternateRowStyles: { fillColor: [252, 252, 252] },
            columnStyles: {
                0: { cellWidth: 40 },
                1: { cellWidth: 50 },
                2: { cellWidth: 40 },
                3: { halign: 'right', fontStyle: 'bold', textColor: primaryColor }
            },
            margin: { left: 15, right: 15 },
            didDrawPage: (data) => {
                doc.setFontSize(7); doc.setTextColor(150);
                doc.text(`AgroFranco | Reporte Generado por Sistema | Página ${data.pageNumber}`, 15, 285);
            }
        });

        doc.save(`Reporte_Compras_AgroFranco_${this.datePipe.transform(new Date(), 'yyyyMMdd')}.pdf`);
    }

    limpiarFechas() {
        this.searchForm.reset();
        this.cargarComprasSemanales();
    }

    abrirDashboard() {
        let fInicio = this.searchForm.get('fechaInicio')?.value;
        let fFin = this.searchForm.get('fechaFin')?.value;

        if (!fInicio) {
            const now = new Date();
            fInicio = new Date(now.getFullYear(), now.getMonth(), 1);
        }
        if (!fFin) {
            fFin = new Date();
        }

        const formattedFechaInicio = this.datePipe.transform(fInicio, 'yyyy-MM-dd') || '';
        const formattedFechaFin = this.datePipe.transform(fFin, 'yyyy-MM-dd') || '';

        this.loadingDashboard = true;
        this.dashboardDialog = true;

        this.comprasCacaOService.obtenerDashboardCompras(formattedFechaInicio, formattedFechaFin).subscribe({
            next: (data) => {
                this.dashboardData = data;
                this.initDashboardCharts();
                this.loadingDashboard = false;
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo cargar el dashboard estadístico'
                });
                this.loadingDashboard = false;
                this.dashboardDialog = false;
            }
        });
    }

    initDashboardCharts() {
        if (!this.dashboardData) return;

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dee2e6';

        // 1. Dona - Distribución de libras por tipo de cacao
        const distLabels = this.dashboardData.distribucionCacao.map((d: any) => d.tipoCacao);
        const distLibras = this.dashboardData.distribucionCacao.map((d: any) => d.libras);
        
        const colors = [
            documentStyle.getPropertyValue('--orange-500') || '#f97316',
            documentStyle.getPropertyValue('--blue-500') || '#3b82f6',
            documentStyle.getPropertyValue('--green-500') || '#22c55e',
            documentStyle.getPropertyValue('--yellow-500') || '#eab308',
            documentStyle.getPropertyValue('--indigo-500') || '#6366f1'
        ];

        this.pieData = {
            labels: distLabels,
            datasets: [{
                data: distLibras,
                backgroundColor: colors.slice(0, distLabels.length),
                hoverBackgroundColor: colors.slice(0, distLabels.length).map(c => c + 'dd')
            }]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            },
            maintainAspectRatio: false
        };

        // 2. Línea - Tendencia diaria (Libras vs Inversión)
        const trendLabels = this.dashboardData.tendenciaDiaria.map((t: any) => 
            this.datePipe.transform(t.fecha, 'dd/MM')
        );
        const trendLibras = this.dashboardData.tendenciaDiaria.map((t: any) => t.libras);
        const trendMontos = this.dashboardData.tendenciaDiaria.map((t: any) => t.totalPagado);

        this.lineData = {
            labels: trendLabels,
            datasets: [
                {
                    label: 'Libras Compradas',
                    data: trendLibras,
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Monto Invertido ($)',
                    data: trendMontos,
                    fill: false,
                    borderColor: '#22c55e',
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        };

        this.lineOptions = {
            stacked: false,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        drawBorder: false
                    }
                }
            }
        };

        // 3. Barra - Inversión por tipo de cliente
        const clientLabels = this.dashboardData.resumenClientes.map((r: any) => r.tipoCliente);
        const clientMontos = this.dashboardData.resumenClientes.map((r: any) => r.totalPagado);

        this.barData = {
            labels: clientLabels,
            datasets: [{
                label: 'Inversión Total ($)',
                data: clientMontos,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)'
                ],
                borderColor: [
                    'rgb(59, 130, 246)',
                    'rgb(34, 197, 94)'
                ],
                borderWidth: 1
            }]
        };

        this.barOptions = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            },
            maintainAspectRatio: false
        };
    }

    async descargarDashboardPDF() {
        const element = document.getElementById('dashboardReportePaper');
        if (!element) return;

        this.exportandoPDF = true;

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4');

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
            pdf.save(`Dashboard_Estadistico_Cacao_${fecha}.pdf`);
        } catch (err) {
            console.error('Error al generar el PDF del dashboard:', err);
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'No se pudo descargar el PDF del dashboard'
            });
        } finally {
            this.exportandoPDF = false;
        }
    }
}
