import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IngresoFacturaService } from 'src/app/demo/service/ingreso-factura.service';
import {
    FacturasIngresadas,
    PaginacionFactura,
} from 'src/app/models/facturasIngresadas';
import {
    IngresoFactura,
} from 'src/app/models/ingresoFactura';

@Component({
    selector: 'app-view-facturas',
    templateUrl: './view-facturas.component.html',
    styleUrls: ['./view-facturas.component.scss'],
})
export class ViewFacturasComponent implements OnInit {

   /* private meses = [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
    ];*/

    months: { label: string; value: string }[] = [
        { label: 'Enero', value: '01' },
        { label: 'Febrero', value: '02' },
        { label: 'Marzo', value: '03' },
        { label: 'Abril', value: '04' },
        { label: 'Mayo', value: '05' },
        { label: 'Junio', value: '06' },
        { label: 'Julio', value: '07' },
        { label: 'Agosto', value: '08' },
        { label: 'Septiembre', value: '09' },
        { label: 'Octubre', value: '10' },
        { label: 'Noviembre', value: '11' },
        { label: 'Diciembre', value: '12' },
    ];


    selectedMonth: string | undefined;
    selectedYear: number | undefined;
    codigoCliente: number | undefined;
    searchForm:FormGroup

    facturasRegistradas: IngresoFactura[] = [];
    facturasPaginadas: FacturasIngresadas[] = [];

    modalUpdate: boolean = false;
    updateForm: FormGroup;
    facturaSeleccionada: any = null;
    facturaId: number | null = null;

    totalRecords: number = 0;
    loading: boolean = false;
    rowsPerPage: number = 10;
    currentPage: number = 0;

    constructor(
        private ingresoFacturaService: IngresoFacturaService,
        private fb: FormBuilder,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.updateForm = this.fb.group({
            codigo: [{ value: '', disabled: true }],
            nombres: [{ value: '', disabled: true }],
            apellidos: [{ value: '', disabled: true }],
            cantQuintales: ['', [Validators.pattern(/^\d*\.?\d*$/)]],
            fecha: [new Date(), Validators.required],
        });

        this.searchForm = this.fb.group({
            codigoCliente: [
                null,
                [Validators.required, Validators.pattern('^[0-9]*$')],
            ],
            selectedMonth: [null],
            selectedYear: [null, [Validators.pattern('^[0-9]{4}$')]],
        });
    }

    ngOnInit(): void {
        this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
        
    }
    
    cargarFacturasPaginadas(page: number, size: number) {
        this.loading = true;
        this.ingresoFacturaService
            .obtenerFacturasPaginadas(page, size)
            .subscribe(
                (data: PaginacionFactura) => {
                    console.log('Datos de facturas:', data);
                    this.facturasPaginadas = data.content;
                    this.totalRecords = data.totalElements;
                    this.loading = false;
                },
                (error) => {
                    console.error('Error al obtener las facturas', error);
                    this.loading = false;
                }
            );
    }

    onLazyLoad(event: any) {
        this.currentPage = event.first / event.rows;
        this.rowsPerPage = event.rows;

        console.log(
            `Cargando página: ${this.currentPage}, filas por página: ${this.rowsPerPage}`
        );

        this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
    }

    showModalUpdate(factura: FacturasIngresadas) {
        this.facturaSeleccionada = factura;
        console.log(
            'La factura seleccionada es: ' +
                JSON.stringify(this.facturaSeleccionada)
        );

        
        this.facturaId = factura.id;

        this.updateForm.patchValue({
            codigo: factura.clienteId,
            nombres: factura.nombres,
            apellidos: factura.apellidos,
            cantQuintales: factura.cantQuintales,
            fecha: new Date(
                new Date(factura.fecha).getTime() +
                    new Date().getTimezoneOffset() * 60000
            ), 
        });

        
        this.modalUpdate = true;
    }

    closeModalUpdate() {
        this.modalUpdate = false;
        this.updateForm.reset();
    }

    confirmDeleteTransaccion(factura: IngresoFactura) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Deseas eliminar esta factura?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.deleteFactura(factura.id);
            },
        });
    }

    consultarFacturasConFiltros() {
        const { codigoCliente, selectedMonth, selectedYear } = this.searchForm.value;
        this.loading=true;
        this.ingresoFacturaService.obtenerFacturasFiltradas(this.currentPage,this.rowsPerPage,codigoCliente,selectedMonth,selectedYear)
        .subscribe(
            (data:PaginacionFactura)=>{
                console.log('facturas filtradas',data);
                this.facturasPaginadas=data.content;
                this.totalRecords=data.totalElements;
                this.loading=false;
            },
            (error)=>{
                console.error('error al cargar las facturas filtradas',error);
                this.loading=false
            }
        );
    }

    limpiarFiltros() {
        this.searchForm.reset();
        this.cargarFacturasPaginadas(0, this.rowsPerPage);
    }





    deleteFactura(id: number) {
        this.ingresoFacturaService.eliminarFactura(id).subscribe({
            next: (response) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Factura eliminada correctamente',
                });
                this.cargarFacturasPaginadas(
                    this.currentPage,
                    this.rowsPerPage
                );
            },
            error: (err) => {
                if (
                    err.error &&
                    err.error.text === 'Factura eliminada exitosamente'
                ) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Factura eliminada correctamente',
                    });
                    this.cargarFacturasPaginadas(
                        this.currentPage,
                        this.rowsPerPage
                    );
                } else {
                    let errorMessage = 'No se pudo eliminar la factura';
                    if (err.error) {
                        errorMessage =
                            typeof err.error === 'string'
                                ? err.error
                                : JSON.stringify(err.error);
                    }
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: errorMessage,
                    });
                    console.error('Error al eliminar la factura:', err);
                }
            },
        });
    }
    onUpdateFactura() {
        const factura: IngresoFactura = {
            id: this.facturaSeleccionada.id,
            cliente: { id: this.updateForm.get('codigo')?.value }, 
            fecha: this.updateForm.get('fecha')?.value,
            cantQuintales: this.updateForm.get('cantQuintales')?.value,
        };
    
        console.log('id de la factura: ' + this.facturaSeleccionada.id);
        console.log("id cliente al actualizar: " + factura.cliente.id); 
        this.ingresoFacturaService
            .actualizarFactura(this.facturaSeleccionada.id, factura)
            .subscribe(
                (data: IngresoFactura) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Factura actualizada correctamente',
                    });
                    this.closeModalUpdate();
                    this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
                },
                (error: any) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Error al actualizar factura',
                    });
                }
            );
    }
}
