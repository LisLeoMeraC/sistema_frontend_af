import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraCacaoService } from 'src/app/demo/service/compra-cacao.service';
import jsPDF from 'jspdf';
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
}
