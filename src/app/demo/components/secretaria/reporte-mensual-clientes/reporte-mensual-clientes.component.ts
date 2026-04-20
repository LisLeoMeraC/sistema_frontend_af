import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClienteService } from 'src/app/demo/service/cliente.service';
import { DatePipe } from '@angular/common';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-reporte-mensual-clientes',
    templateUrl: './reporte-mensual-clientes.component.html',
    providers: [MessageService, DatePipe]
})
export class ReporteMensualClientesComponent implements OnInit {
    
    fechaInicio: Date = new Date(new Date().getFullYear(), 0, 1); // 1 de Enero
    fechaFin: Date = new Date();
    programaSeleccionado: string = 'ninguno';
    
    programas = [
        { label: 'Todos / Ninguno', value: 'ninguno' },
        { label: 'Rainforest', value: 'rainforest' },
        { label: 'Nestle', value: 'nestle' },
        { label: 'Olam', value: 'olam' }
    ];

    mesesLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
    reporteData: any[] = [];
    totalRecords: number = 0;
    loading: boolean = false;
    rows: number = 10;
    first: number = 0;

    constructor(
        private clienteService: ClienteService,
        private messageService: MessageService,
        private datePipe: DatePipe
    ) {}

    ngOnInit(): void {
        this.cargarReporte();
    }

    cargarReporte() {
        this.loading = true;
        const inicioFormatted = this.datePipe.transform(this.fechaInicio, 'yyyy-MM-dd') || '';
        const finFormatted = this.datePipe.transform(this.fechaFin, 'yyyy-MM-dd') || '';
        const page = Math.floor(this.first / this.rows);

        this.clienteService.obtenerReporteVentas(
            inicioFormatted,
            finFormatted,
            this.programaSeleccionado,
            page,
            this.rows
        ).subscribe({
            next: (data: any[]) => {
                // Transformar la lista plana del DTO al formato del componente
                this.reporteData = data.map(item => ({
                    ...item,
                    nombres: item.nombre, // Mapear 'nombre' a 'nombres' para el HTML
                    meses: [
                        item.enero, item.febrero, item.marzo, item.abril,
                        item.mayo, item.junio, item.julio, item.agosto,
                        item.septiembre, item.octubre, item.noviembre, item.diciembre
                    ],
                    totalQuintales: item.totalAnual
                }));
                
                // El total de registros viene en cada fila del DTO según la implementación del SP
                this.totalRecords = data.length > 0 ? data[0].totalRegistros : 0;
                this.loading = false;
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error 500',
                    detail: 'Error interno del servidor. Verifique que el procedimiento almacenado exista y los parámetros sean correctos.'
                });
                this.loading = false;
            }
        });
    }

    onLazyLoad(event: any) {
        this.first = event.first;
        this.rows = event.rows;
        this.cargarReporte();
    }

    limpiarFiltros() {
        this.fechaInicio = new Date(new Date().getFullYear(), 0, 1);
        this.fechaFin = new Date();
        this.programaSeleccionado = 'ninguno';
        this.first = 0;
        this.cargarReporte();
    }

    generarReportePDF() {
        this.loading = true; // Activar el spinner mientras se obtienen todos los datos
        const inicioFormatted = this.datePipe.transform(this.fechaInicio, 'yyyy-MM-dd') || '';
        const finFormatted = this.datePipe.transform(this.fechaFin, 'yyyy-MM-dd') || '';

        // Consultamos con un tamaño de página muy grande (9999) para traer todos los registros
        this.clienteService.obtenerReporteVentas(
            inicioFormatted,
            finFormatted,
            this.programaSeleccionado,
            0,
            9999
        ).subscribe({
            next: (data: any[]) => {
                const allData = data.map(item => ({
                    ...item,
                    nombres: item.nombre,
                    meses: [
                        item.enero, item.febrero, item.marzo, item.abril,
                        item.mayo, item.junio, item.julio, item.agosto,
                        item.septiembre, item.octubre, item.noviembre, item.diciembre
                    ],
                    totalQuintales: item.totalAnual
                }));

                this.procesarGeneracionPDF(allData);
                this.loading = false;
            },
            error: (err) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron recuperar todos los datos para el PDF.' });
                this.loading = false;
            }
        });
    }

    private procesarGeneracionPDF(datos: any[]) {
        const doc = new jsPDF('l', 'mm', 'a4');
        const primaryColor: [number, number, number] = [27, 94, 32];
        const secondaryColor: [number, number, number] = [67, 160, 71];
        const lightGray: [number, number, number] = [245, 245, 245];
        
        const dateNow = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
        const inicioStr = this.datePipe.transform(this.fechaInicio, 'MMMM yyyy')?.toUpperCase();
        const finStr = this.datePipe.transform(this.fechaFin, 'MMMM yyyy')?.toUpperCase();

        const tableBody = datos.map(item => [
            item.nombres, item.apellidos, item.cedula, item.recinto, item.hectareas.toFixed(2),
            ...item.meses.map((m: any) => m > 0 ? m.toFixed(2) : '-'),
            item.totalQuintales.toFixed(2)
        ]);

        autoTable(doc, {
            startY: 50, // Solo afecta a la primera página
            head: [['Nombre', 'Apellidos', 'Cédula', 'Recinto', 'Has.', ...this.mesesLabels, 'Total QQ']],
            body: tableBody,
            theme: 'grid',
            headStyles: { 
                fillColor: [255, 255, 255], 
                textColor: primaryColor, 
                fontSize: 9, 
                halign: 'center',
                fontStyle: 'bold',
                lineWidth: 0.3,
                lineColor: primaryColor
            },
            bodyStyles: { 
                fontSize: 7.5, 
                textColor: 50, 
                valign: 'middle',
                lineWidth: 0.1,
                lineColor: [230, 230, 230]
            },
            alternateRowStyles: { fillColor: [252, 252, 252] },
            columnStyles: {
                0: { fontStyle: 'bold' }, 
                1: { fontStyle: 'bold' }, 
                2: { halign: 'center' },
                ...Object.fromEntries(Array.from({length: 12}, (_, i) => [i + 5, { halign: 'center' }])),
                17: { halign: 'right', fontStyle: 'bold', textColor: primaryColor, fillColor: [241, 248, 233] }
            },
            margin: { top: 15, left: 15, right: 15 }, // Margen superior reducido para páginas > 1
            didDrawPage: (data) => {
                if (data.pageNumber === 1) {
                    // --- ENCABEZADO SOLO PAGINA 1 ---
                    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.rect(0, 0, 297, 3, 'F');

                    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.setFontSize(32); doc.setFont('times', 'bold');
                    doc.text('AGROFRANCO', 15, 20);
                    
                    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.setLineWidth(0.8);
                    doc.line(15, 23, 60, 23);

                    doc.setFont('helvetica', 'bold'); doc.setFontSize(10); doc.setTextColor(80, 80, 80);
                    doc.text('CENTRO DE ACOPIO Y COMERCIALIZACIÓN DE CACAO', 15, 30);
                    
                    doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.text('REPORTE CONSOLIDADO DE PRODUCTIVIDAD MENSUAL', 15, 36);

                    // Cuadro Info Pag 1
                    doc.setDrawColor(220, 220, 220); doc.setLineWidth(0.2); doc.roundedRect(190, 8, 95, 30, 2, 2, 'S');
                    const prog = this.programaSeleccionado === 'ninguno' ? 'TODOS LOS PROGRAMAS' : this.programaSeleccionado.toUpperCase();
                    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.roundedRect(195, 12, 85, 7, 1, 1, 'F');
                    doc.setTextColor(255, 255, 255); doc.setFontSize(9); doc.setFont('helvetica', 'bold');
                    doc.text(`PROGRAMA: ${prog}`, 237.5, 17, { align: 'center' });

                    doc.setTextColor(80, 80, 80); doc.setFontSize(8); doc.setFont('helvetica', 'normal');
                    doc.text(`PERIODO: ${inicioStr} - ${finStr}`, 197, 24);
                    doc.text(`CANTIDAD DE PRODUCTORES: ${datos.length}`, 197, 28);
                    doc.text(`FECHA EMISIÓN: ${dateNow}`, 197, 32);
                } else {
                    // Mini encabezado para páginas siguientes
                    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.rect(0, 0, 297, 1.5, 'F');
                    doc.setFontSize(8); doc.setTextColor(150);
                    doc.text(`AgroFranco - Continuación Reporte | ${dateNow}`, 15, 10);
                }

                // Footer siempre
                doc.setFontSize(7); doc.setTextColor(180);
                doc.text(`Página ${data.pageNumber}`, 282, 205, { align: 'right' });
            }
        });

        const finalTotal = datos.reduce((acc, curr) => acc + curr.totalQuintales, 0);
        const finalY = (doc as any).lastAutoTable.finalY + 10;
        if (finalY < 185) {
            doc.setFillColor(240, 240, 240); doc.rect(212, finalY + 1, 72, 12, 'F');
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]); doc.rect(210, finalY, 72, 12, 'F');
            doc.setTextColor(255, 255, 255); doc.setFontSize(11); doc.setFont('helvetica', 'bold');
            doc.text('GRAN TOTAL (QQ):', 215, finalY + 7.5);
            doc.text(finalTotal.toFixed(2), 278, finalY + 7.5, { align: 'right' });
        }

        doc.save(`Reporte_Maestro_Ventas_${this.datePipe.transform(new Date(), 'yyyyMMdd')}.pdf`);
    }
}
