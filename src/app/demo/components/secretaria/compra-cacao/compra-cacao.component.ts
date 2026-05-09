import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { merge, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CompraCacao } from 'src/app/models/compraCacao.model';
import { ClienteService } from 'src/app/demo/service/cliente.service';
import { CompraCacaoService } from 'src/app/demo/service/compra-cacao.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
    selector: 'app-compra-cacao',
    templateUrl: './compra-cacao.component.html',
    styleUrls: ['./compra-cacao.component.scss'],
})
export class CompraCacaoComponent implements OnInit {
    registerFormCompraCacao: FormGroup;
    searchForm: FormGroup;
    displayModalCompraCacao: boolean = false;
    displayModalCompraCacaoTodas: boolean = false;
    displayClienteSearchDialog: boolean = false;
    tipoClientes: any[] = [];
    tiposCacao: any[] = [];
    comprasCacao: CompraCacao[] = [];
    comprasCacaoTodas: CompraCacao[] = [];
    totalCacao: any[] = [];
    loading: boolean = false;

    // Cliente seleccionado cuando es "Cliente Registrado"
    clienteSeleccionado: any = null;
    clientesBuscados: any[] = [];
    totalClientesBuscados: number = 0;
    pageClientes: number = 0;
    rowsClientes: number = 8;
    terminoBusqueda: string = '';
    buscandoCliente: boolean = false;
    private searchSubject = new Subject<string>();

    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
        private compraCacaoService: CompraCacaoService,
        private confirmationService: ConfirmationService,
        private clienteService: ClienteService,
        private datePipe: DatePipe
    ) {
        this.registerFormCompraCacao = this.fb.group({
            tipoCliente: [null, Validators.required],
            tipoCacao: [null, Validators.required],
            fechaCompra: [new Date(), Validators.required],
            cantidadLibras: [null, Validators.required],
            precioPorQuintal: [null, Validators.required],
            totalPagado: [null, Validators.required],
            pagoEfectivo: [null, Validators.required],
            pagoTransferencia: [null, Validators.required],
        });
        this.searchForm = this.fb.group({
            fecha: [null],
        });
    }

    ngOnInit(): void {
        this.tipoClientes = [
            { name: 'Cliente Registrado', value: 1 },
            { name: 'Consumidor Final', value: 2 },
        ];

        this.obtenerComprasCacaoToday();
        this.obtenerTotalTipoCacaoToday();
        this.onTotalPagadoChange();
        this.onCalcularTotalChange();

        // Debounce para búsqueda de clientes
        this.searchSubject.pipe(debounceTime(350)).subscribe(term => {
            if (term.trim().length >= 2) {
                this.ejecutarBusquedaCliente(term.trim());
            } else if (term.trim().length === 0) {
                // Al borrar completamente el buscador, restablecer la lista inicial
                this.pageClientes = 0;
                this.cargarClientesPagina(0);
            } else {
                this.clientesBuscados = [];
            }
        });
    }

    // ─── TIPO CLIENTE ──────────────────────────────────────────────────────────
    onTipoClienteChange(event: any): void {
        const valor = event?.value?.value;
        if (valor === 1) {
            this.clienteSeleccionado = null;
            this.abrirDialogClientes();
        } else {
            this.clienteSeleccionado = null;
        }
    }

    abrirDialogClientes(): void {
        this.terminoBusqueda = '';
        this.pageClientes = 0;
        this.cargarClientesPagina(0);
        this.displayClienteSearchDialog = true;
    }

    cargarClientesPagina(page: number): void {
        this.buscandoCliente = true;
        this.clienteService.obtenerClientesPaginados(page, this.rowsClientes).subscribe(
            (data: any) => {
                this.clientesBuscados = data.content || [];
                this.totalClientesBuscados = data.totalElements || 0;
                this.buscandoCliente = false;
            },
            () => { this.buscandoCliente = false; }
        );
    }

    // ─── BÚSQUEDA DE CLIENTES ─────────────────────────────────────────────────
    onTerminoChange(): void {
        this.searchSubject.next(this.terminoBusqueda);
    }

    ejecutarBusquedaCliente(term: string): void {
        this.buscandoCliente = true;
        const esCedula = /^\d+$/.test(term);
        const obs = esCedula
            ? this.clienteService.buscarClientesPorCodigoPaginado(term, 0, this.rowsClientes)
            : this.clienteService.buscarClientesPorNombreApellidoPaginado(term, 0, this.rowsClientes);

        obs.subscribe(
            (data: any) => {
                this.clientesBuscados = Array.isArray(data) ? data : (data.content || []);
                this.totalClientesBuscados = Array.isArray(data) ? data.length : (data.totalElements || 0);
                this.buscandoCliente = false;
            },
            () => {
                this.clientesBuscados = [];
                this.totalClientesBuscados = 0;
                this.buscandoCliente = false;
            }
        );
    }

    onPageClientes(event: any): void {
        this.pageClientes = event.first / event.rows;
        this.rowsClientes = event.rows;
        if (this.terminoBusqueda.trim().length >= 2) {
            this.ejecutarBusquedaCliente(this.terminoBusqueda.trim());
        } else {
            this.cargarClientesPagina(this.pageClientes);
        }
    }

    seleccionarCliente(cliente: any): void {
        this.clienteSeleccionado = cliente;
        this.displayClienteSearchDialog = false;
        this.terminoBusqueda = '';
        this.clientesBuscados = [];
    }

    cancelarSeleccionCliente(): void {
        this.clienteSeleccionado = null;
        this.terminoBusqueda = '';
        this.clientesBuscados = [];
        this.displayClienteSearchDialog = false;
        this.registerFormCompraCacao.patchValue({ tipoCliente: null });
    }

    // ─── SUBMIT ────────────────────────────────────────────────────────────────
    onSubmitCompraCacao() {
        if (this.registerFormCompraCacao.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor, completa todos los campos obligatorios.',
            });
            return;
        }

        const formValue = this.registerFormCompraCacao.value;
        const esClienteRegistrado = formValue.tipoCliente?.value === 1;

        if (esClienteRegistrado && !this.clienteSeleccionado) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Debe seleccionar un cliente registrado.',
            });
            this.displayClienteSearchDialog = true;
            return;
        }

        const fechaCompra = new Date(formValue.fechaCompra);

        const compraCacao: CompraCacao = {
            tipoCliente: { id: formValue.tipoCliente.value },
            tipoCacao: { id: formValue.tipoCacao.id },
            fechaCompra: this.formatearFechaLocal(fechaCompra),
            cantidadLibras: parseFloat(formValue.cantidadLibras),
            precioPorQuintal: parseFloat(formValue.precioPorQuintal),
            totalPagado: parseFloat(formValue.totalPagado),
            pagoEfectivo: parseFloat(formValue.pagoEfectivo),
            pagoTransferencia: parseFloat(formValue.pagoTransferencia),
        };

        // Envelope: siempre envía compraCacao; clienteId solo si es cliente registrado
        const payload: any = { compraCacao };
        if (esClienteRegistrado && this.clienteSeleccionado) {
            payload.clienteId = this.clienteSeleccionado.id;
        }

        console.log('Payload enviado:', JSON.stringify(payload));

        this.compraCacaoService.registrarCompraCacao(payload).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Compra registrada correctamente.',
                });
                this.closeModalCompraCacaoDialog();
                this.obtenerComprasCacaoToday();
                this.obtenerTotalTipoCacaoToday();
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Ocurrió un error al registrar la compra.',
                });
            },
        });
    }

    // ─── MODAL ────────────────────────────────────────────────────────────────
    showCompraCacaoModalDialog() {
        this.registerFormCompraCacao.patchValue({
            fechaCompra: new Date(),
            pagoTransferencia: 0.0,
        });
        this.clienteSeleccionado = null;
        this.displayModalCompraCacao = true;
        this.obtenerTiposCacao();
    }

    closeModalCompraCacaoDialog() {
        this.displayModalCompraCacao = false;
        this.clienteSeleccionado = null;
        this.registerFormCompraCacao.reset();
    }

    // ─── AUXILIARES ───────────────────────────────────────────────────────────
    onTotalPagadoChange(): void {
        const ctrl = this.registerFormCompraCacao.get('totalPagado');
        if (ctrl) {
            ctrl.valueChanges.subscribe((value) => {
                this.registerFormCompraCacao.patchValue(
                    { pagoEfectivo: value || 0, pagoTransferencia: 0.0 },
                    { emitEvent: false }
                );
            });
        }
    }

    onCalcularTotalChange(): void {
        const libras = this.registerFormCompraCacao.get('cantidadLibras');
        const precio = this.registerFormCompraCacao.get('precioPorQuintal');
        
        if (libras && precio) {
            merge(libras.valueChanges, precio.valueChanges).subscribe(() => {
                const qLibras = parseFloat(libras.value) || 0;
                const qPrecio = parseFloat(precio.value) || 0;
                
                // Conversión: 100 lb = 1 QQ
                const total = (qLibras / 100) * qPrecio;
                
                if (total > 0) {
                    this.registerFormCompraCacao.patchValue({
                        totalPagado: total.toFixed(2)
                    }, { emitEvent: true });
                }
            });
        }
    }

    eliminarCompra(compraCacao: any) {
        this.compraCacaoService.eliminarCompraCacao(compraCacao.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Registro de compra eliminado correctamente',
                });
                this.obtenerComprasCacaoToday();
                this.obtenerTotalTipoCacaoToday();
            },
            () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al eliminar el registro',
                });
            }
        );
    }

    confirmDeleteCompra(compraCacao: any) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar este registro?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => { this.eliminarCompra(compraCacao); },
        });
    }

    openDialogTodasCompras() { this.displayModalCompraCacaoTodas = true; }

    closeDialogTodasCompras() {
        this.displayModalCompraCacaoTodas = false;
        this.limpiarForm();
    }

    obtenerTiposCacao() {
        this.compraCacaoService.obtenerTiposCacao().subscribe((data) => {
            this.tiposCacao = data;
        });
    }

    obtenerComprasCacaoToday() {
        this.compraCacaoService.obtenerComprasCacao().subscribe(
            (data: any[]) => { this.comprasCacao = data; },
            (error: any) => { console.log(error); }
        );
    }

    obtenerTotalTipoCacaoToday() {
        this.compraCacaoService.obtenerTotalTipoCacaoToday().subscribe(
            (data: any[]) => { this.totalCacao = data; },
            (error: any) => { console.log(error); }
        );
    }

    generarReportePDF() {
        const doc = new jsPDF();
        const dateStr = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
        const fileNameDate = this.datePipe.transform(new Date(), 'yyyyMMdd');

        // --- CONFIGURACIÓN DE COLORES ---
        const primaryColor: [number, number, number] = [27, 94, 32]; // Verde Bosque (AgroFranco)
        const secondaryColor: [number, number, number] = [52, 152, 219]; // Azul Informática
        const accentColor: [number, number, number] = [241, 196, 15]; // Amarillo Oro

        // --- ENCABEZADO PREMIUM ---
        // Rectángulo decorativo superior
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, 210, 40, 'F');

        // Logo / Título
        doc.setFontSize(28);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.text('AGROFRANCO', 105, 22, { align: 'center' });

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('SISTEMA DE GESTIÓN DE COMPRAS - COCOA CENTER', 105, 30, { align: 'center' });

        // Cuadro de Información del Reporte (Derecha)
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(140, 45, 55, 25, 3, 3, 'FD');
        doc.setTextColor(0);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text('FECHA DE REPORTE', 145, 52);
        doc.setFont('helvetica', 'normal');
        doc.text(this.datePipe.transform(new Date(), 'dd/MM/yyyy') || '', 145, 58);
        doc.setFont('helvetica', 'bold');
        doc.text('HORA:', 145, 64);
        doc.setFont('helvetica', 'normal');
        doc.text(this.datePipe.transform(new Date(), 'HH:mm:ss') || '', 157, 64);

        // Título del Cuerpo
        doc.setFontSize(16);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setFont('helvetica', 'bold');
        doc.text('REPORTE DIARIO DE ADQUISICIONES', 20, 60);
        doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setLineWidth(1);
        doc.line(20, 63, 110, 63);

        // --- SECCIÓN 1: CONSOLIDADO POR VARIEDAD (Libras y Quintales) ---
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text('1. CONSOLIDADO DE INVERSIÓN POR CATEGORÍA', 20, 75);

        // Agrupamos manualmente para asegurar precisión en libras y QQ
        const resumenMap = new Map();
        this.comprasCacao.forEach(compra => {
            const cat = compra.tipoCacao.nombre;
            if (!resumenMap.has(cat)) {
                resumenMap.set(cat, { libras: 0, dolares: 0 });
            }
            const data = resumenMap.get(cat);
            data.libras += compra.cantidadLibras;
            data.dolares += compra.totalPagado;
        });

        const summaryData = Array.from(resumenMap.entries()).map(([nombre, data]) => [
            nombre || '',
            `${data.libras.toFixed(2)} lb`,
            `${(data.libras / 100).toFixed(2)} QQ`,
            `$ ${data.dolares.toFixed(2)}`
        ]);

        autoTable(doc, {
            startY: 80,
            head: [['Variedad', 'Total Libras', 'Total Quintales (QQ)', 'Inversión Total']],
            body: summaryData,
            theme: 'striped',
            headStyles: { fillColor: primaryColor as [number, number, number], halign: 'center' },
            columnStyles: {
                1: { halign: 'center' },
                2: { halign: 'center', fontStyle: 'bold' },
                3: { halign: 'right', fontStyle: 'bold' }
            },
            margin: { left: 20, right: 20 }
        });

        // --- SECCIÓN 2: DETALLE DE COMPRAS ---
        const finalY = (doc as any).lastAutoTable.finalY + 15;
        doc.setFontSize(12);
        doc.text('2. DETALLE CRONOLÓGICO DE COMPRAS', 20, finalY);

        const detailData = this.comprasCacao.map(item => {
            const nombreCliente = item.tipoCliente.id === 1 
                ? `${item.cliente?.nombres || ''} ${item.cliente?.apellidos || ''}`.trim()
                : 'Consumidor Final';

            return [
                this.datePipe.transform(item.fechaCompra, 'HH:mm') || '',
                nombreCliente || '',
                item.tipoCacao.nombre || '',
                `${item.cantidadLibras} lb`,
                `${(item.cantidadLibras / 100).toFixed(2)} QQ`,
                `$ ${item.totalPagado.toFixed(2)}`
            ];
        });

        autoTable(doc, {
            startY: finalY + 5,
            head: [['Hora', 'Cliente', 'Variedad', 'Libras', 'QQ', 'Total Pago']],
            body: detailData,
            theme: 'grid',
            headStyles: { fillColor: secondaryColor as [number, number, number] },
            columnStyles: {
                0: { halign: 'center' },
                3: { halign: 'center' },
                4: { halign: 'center' },
                5: { halign: 'right' }
            },
            margin: { left: 20, right: 20 }
        });

        // --- TOTALES GENERALES ---
        const finalYDetails = (doc as any).lastAutoTable.finalY + 10;
        const totalLibrasVal = this.comprasCacao.reduce((acc, curr) => acc + curr.cantidadLibras, 0);
        const totalDineroVal = this.comprasCacao.reduce((acc, curr) => acc + curr.totalPagado, 0);

        // Cuadro de totales
        doc.setFillColor(245, 245, 245);
        doc.rect(130, finalYDetails, 60, 22, 'F');
        doc.setDrawColor(200);
        doc.rect(130, finalYDetails, 60, 22, 'S');

        doc.setFontSize(9);
        doc.setTextColor(50);
        doc.text('TOTAL LIBRAS:', 135, finalYDetails + 7);
        doc.text('TOTAL QUINTALES:', 135, finalYDetails + 13);
        doc.text('TOTAL INVERSIÓN:', 135, finalYDetails + 19);

        doc.setTextColor(0);
        doc.setFont('helvetica', 'bold');
        doc.text(`${totalLibrasVal.toFixed(2)} lb`, 185, finalYDetails + 7, { align: 'right' });
        doc.text(`${(totalLibrasVal / 100).toFixed(2)} QQ`, 185, finalYDetails + 13, { align: 'right' });
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(`$ ${totalDineroVal.toFixed(2)}`, 185, finalYDetails + 19, { align: 'right' });

        // --- FIRMAS DE RESPONSABILIDAD ---
        const signatureY = finalYDetails + 45;
        doc.setDrawColor(100);
        doc.line(40, signatureY, 90, signatureY);
        doc.line(120, signatureY, 170, signatureY);

        doc.setFontSize(9);
        doc.setTextColor(100);
        doc.setFont('helvetica', 'normal');
        doc.text('Firma Encargado', 65, signatureY + 5, { align: 'center' });
        doc.text('Firma Gerencia', 145, signatureY + 5, { align: 'center' });

        // --- PIE DE PÁGINA ---
        const pageCount = (doc as any).internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150);
            const footerText = `Generado por AGROFRANCO - Sistema Cocoa - Página ${i} de ${pageCount}`;
            doc.text(footerText, 105, 285, { align: 'center' });
        }

        doc.save(`Reporte_AgroFranco_${fileNameDate}.pdf`);
    }

    cargarComprasCacaoFecha() {
        const fecha = this.searchForm.get('fecha')?.value;
        const formattedFecha = this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';
        this.loading = true;
        this.compraCacaoService.obtenerComprasCacaoFecha(formattedFecha).subscribe(
            (data: any[]) => { 
                this.comprasCacaoTodas = data; 
                this.loading = false;
            },
            (error) => { 
                console.error('Error al obtener las compras:', error); 
                this.loading = false;
            }
        );
    }

    limpiarForm() {
        this.searchForm.reset();
        this.obtenerComprasCacaoToday();
    }

    formatearFechaLocal(fecha: Date): string {
        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${fecha.getFullYear()}-${pad(fecha.getMonth() + 1)}-${pad(fecha.getDate())}` +
               `T${pad(fecha.getHours())}:${pad(fecha.getMinutes())}:${pad(fecha.getSeconds())}`;
    }
}
