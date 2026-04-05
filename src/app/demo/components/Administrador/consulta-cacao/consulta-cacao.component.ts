import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IngresoFacturaService } from 'src/app/demo/service/ingreso-factura.service';
import { TooltipItem } from 'chart.js';
import { ClienteService } from 'src/app/demo/service/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import { debounceTime, forkJoin, Subject } from 'rxjs';
import { RespuestaFacturas } from 'src/app/models/respuestaFacturas';
import { DatePipe, formatDate } from '@angular/common';
@Component({
    selector: 'app-consulta-cacao',
    templateUrl: './consulta-cacao.component.html',
    styleUrls: ['./consulta-cacao.component.scss'],
})
export class ConsultaCacaoComponent implements OnInit {
    private meses = [
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
    ];

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

    registerForm: FormGroup;

    graficoForm: FormGroup;

    loadings: boolean = false;

    selectedMonth: string | undefined;
    selectedYear: number | undefined;
    codigoCliente: number | undefined;
    codigoClienteModal: number | undefined;
    nombreCliente: string | undefined;
    facturas: any[] = [];
    totalLibras: number = 0;
    codigoClienteInvalid: boolean = false;
    yearInvalid: boolean = false;

    fechaDesde: Date | undefined = new Date();
    fechaHasta: Date | undefined = new Date();
    graficoData: any;
    graficoOptions: any;
    ModalGrafico: boolean = false;




    clientes: any[] = [];
    ClientesModal: boolean = false;
    @ViewChild('clientesTable') clientesTable: any;
    @ViewChild('searchInput') searchInput!: ElementRef;
    @ViewChild('searchInputId') searchInputId!: ElementRef;

    totalRecords: number = 0;
    loading: boolean = false;
    rowsPerPage: number = 10;
    currentPage: number = 0;
    private searchTermSubject: Subject<string> = new Subject<string>();
    private currentSearchTerm: string = '';
    searchTerms = new Subject<string>();
    searchTerm: string = '';

    clienteNombre: string = '';

    constructor(
        private ingresoFacturaService: IngresoFacturaService,
        private fb: FormBuilder,
        private messageService: MessageService,
        private clienteService: ClienteService,
        private datePipe: DatePipe,
    ) {
        //paso 2
        /* this.registerForm = this.fb.group({
             codigoCliente: [
                 null,
                 [Validators.required, Validators.pattern('^[0-9]*$')],
             ],
             selectedMonth: [null],
             selectedYear: [null, [Validators.pattern('^[0-9]{4}$')]],
         });*/

        this.registerForm = this.fb.group({
            codigoCliente: ['', Validators.required],
            fechaDesde: [''],
            fechaHasta: ['']
        });

        this.graficoForm = this.fb.group({
            codigoClienteModal: [''],
            fechaDesde: [''],
            fechaHasta: [''],
            graficoData: [''],
            graficoOptions: [''],
        });


    }

    ngOnInit(): void {
        this.searchTermSubject.pipe(debounceTime(300)).subscribe(term => this.onSearchTermChange(term, true));
        this.searchTerms.pipe(debounceTime(300)).subscribe(id => this.onSearchTermChange(id, false));
    }

    //Metodos para la busqueda de un cliente
    private onSearchTermChange(term: string, isNameSearch: boolean): void {
        this.loading = true;
        if (isNameSearch) {
            this.handleNameSearch(term);
        } else {
            this.handleIdSearch(term);
        }
    }

    private handleNameSearch(term: string): void {
        if (term.length >= 1) {

            setTimeout(() => {
                this.currentSearchTerm = term;
                this.buscarClientes(term, this.currentPage, this.rowsPerPage);
            }, 1000);
        } else {
            this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
        }
    }

    private handleIdSearch(id: string): void {
        if (id) {
            this.buscarClientes(id, 0, 1);
        } else {
            this.currentPage = 0;
            this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
        }
    }

    //Para buscar un cliente
    cargarClientesPaginados(page: number, size: number) {
        this.clienteService.obtenerClientesPaginados(page, size).subscribe(
            (data: any) => {
                this.clientes = data.content;
                this.totalRecords = data.totalElements;
                this.loading = false;
            },
            (error) => {
                console.error('Error al obtener clientes:', error);
                this.loading = false;
            }
        );
    }

    openClienteModal() {
        this.currentPage = 0;
        this.totalRecords = 0;
        this.clientes = [];
        this.ClientesModal = true;
        this.loading = true;
        this.cargarClientesPaginados(this.currentPage, 5);
    }

    closeClienteModal() {
        this.ClientesModal = false;
        this.clientes = [];
        this.searchInput.nativeElement.value = '';
        this.searchInputId.nativeElement.value = '';
    }

    private buscarClientes(term: string, page: number, size: number): void {
        const isNumeric = !isNaN(Number(term));

        const searchObservable = isNumeric
            ? this.clienteService.buscarClientePorId(+term)
            : this.clienteService.buscarClientesPorNombreApellidoPaginado(term, page, size);

        searchObservable.subscribe(
            (data: any) => {
                if (isNumeric) {
                    this.clientes = [data];
                    this.totalRecords = 1;
                } else {
                    this.clientes = data.content;
                    this.totalRecords = data.totalElements;
                }
                this.loading = false;
            },
            (error) => {
                this.clientes = [];
                this.totalRecords = 0;
                this.loading = false;
                console.error('Error al buscar cliente:', error);
            }
        );
    }

    onTermInput(event: any) {
        const term = event.target.value;
        this.searchTermSubject.next(term);
    }

    onIdInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const id = inputElement.value;
        this.searchTerms.next(id);
    }

    onLazyLoad(event: any) {
        const page = event.first / event.rows;
        const size = event.rows;
        this.loading = true;

        if (this.currentSearchTerm) {
            this.buscarClientes(this.currentSearchTerm, page, size);
        } else {
            this.cargarClientesPaginados(page, size);
        }
    }

    onLazyLoader(event: any): void {
        this.currentPage = event.first / event.rows;
        this.rowsPerPage = event.rows;
        this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
    }

    //Metodo para cargar los detalles de cada cliente

    /*consultar(): void {
        this.clienteNombre = '';
        this.facturas = [null];
        this.totalLibras = 0;
        if (this.registerForm.valid) {
            const { codigoCliente, selectedMonth, selectedYear } = this.registerForm.value;

            this.loadings = true;

            this.clienteService.buscarClientePorId(codigoCliente).subscribe(
                (cliente) => {
                    if (this.clienteNombre == "") {
                        this.clienteNombre = `${cliente.nombres} ${cliente.apellidos}`;
                    }
                },
                (error) => {
                    console.error('Error al buscar cliente por ID:', error);
                    this.clienteNombre = ''; // Limpiar si hay un error
                    this.loadings = false;
                }
            );

            this.ingresoFacturaService
                .buscarFacturas(codigoCliente, selectedMonth, selectedYear)
                .subscribe((data) => {
                    this.facturas = [data];
                    if (this.facturas[0].detalles && this.facturas[0].detalles.length > 0) {
                        this.totalLibras = Math.round(
                            this.facturas[0].detalles.reduce(
                                (total: number, detalle: { cantQuintales: number }) => total + detalle.cantQuintales,
                                0
                            ) * 100
                        ) / 100;
                    } else {
                        this.totalLibras = 0;
                    }
                    this.loadings = false;

                },
                    () => {
                        this.loadings = false;
                    }
                );
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete el formulario correctamente.',
            });
        }
    }*/

        consultar(): void {
    this.clienteNombre = '';
    this.facturas = [null];
    this.totalLibras = 0;
    
    if (this.registerForm.valid) {
        const { codigoCliente, fechaDesde, fechaHasta } = this.registerForm.value;
        
        // Validar que fechaDesde no sea mayor que fechaHasta
        if (fechaDesde && fechaHasta && new Date(fechaDesde) > new Date(fechaHasta)) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'La fecha desde no puede ser mayor que la fecha hasta'
            });
            return;
        }

        this.loadings = true;

        // Buscar información del cliente
        this.clienteService.buscarClientePorId(codigoCliente).subscribe(
            (cliente) => {
                this.clienteNombre = `${cliente.nombres} ${cliente.apellidos}`;
            },
            (error) => {
                console.error('Error al buscar cliente por ID:', error);
                this.loadings = false;
            }
        );

        // Formatear fechas para el servicio
        const fechaDesdeFormatted = fechaDesde ? formatDate(fechaDesde, 'yyyy-MM-dd', 'en-US') : undefined;
        const fechaHastaFormatted = fechaHasta ? formatDate(fechaHasta, 'yyyy-MM-dd', 'en-US') : undefined;

        // Buscar facturas
        this.ingresoFacturaService
            .buscarFacturasPorFecha(codigoCliente, fechaDesdeFormatted, fechaHastaFormatted)
            .subscribe(
                (data) => {
                    this.facturas = [data]; 
                    if (this.facturas[0]?.detalles?.length > 0) {
                        this.totalLibras = Math.round(
                            this.facturas[0].detalles.reduce(
                                (total: number, detalle: { cantQuintales: number }) => 
                                    total + detalle.cantQuintales,
                                0
                            ) * 100
                        ) / 100;
                    } else {
                        this.totalLibras = 0; 
                        this.messageService.add({
                            severity: 'info',
                            summary: 'Información',
                            detail: 'No se encontraron facturas en el rango de fechas especificado'
                        });
                    }
                    this.loadings = false;
                },
                (error) => {
                    console.error('Error al buscar facturas:', error);
                    this.loadings = false;
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Ocurrió un error al buscar las facturas'
                    });
                }
            );
    } else {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Por favor complete el formulario correctamente.'
        });
    }
}



    showModalDialog() {
        const codCliente = this.registerForm.get('codigoCliente')?.value;
        this.codigoClienteModal = codCliente;
        this.ModalGrafico = true;
        this.clienteNombre = '';
    }
    closeModalDialog() {
        this.ModalGrafico = false;
        this.limpiarControles();
        this.clienteNombre = '';
    }

    limpiarControlesPrincipales() {
        this.registerForm.reset();
        this.facturas = [null];
        this.totalLibras = 0;
        this.clienteNombre = '';
    }

    limpiarControles() {
        this.graficoForm.reset();
        this.fechaDesde = new Date();
        this.fechaHasta = new Date();
        this.graficoData = null;
        this.clienteNombre = '';
        this.graficoOptions = null;
    }



    onSelectCliente(cliente: Cliente) {
        this.codigoCliente = cliente.id;
        this.registerForm.controls['codigoCliente'].setValue(cliente.id);
        this.clienteNombre = cliente.nombres + ' ' + cliente.apellidos;
        this.closeClienteModal();
    }


    generarGrafico(): void {
        // Limpiar el nombre del cliente al inicio si el input está vacío
        if (!this.codigoClienteModal) {
            this.clienteNombre = ''; // Resetea el nombre del cliente
            console.error('El código del cliente es obligatorio para generar el gráfico.');
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Por favor ingrese un código de cliente.',
            });
            return; // Salir del método si no hay código del cliente
        }

        // Buscar el cliente por ID
        this.clienteService.buscarClientePorId(this.codigoClienteModal).subscribe(
            (cliente) => {
                // Asignar el nombre del cliente si existe
                this.clienteNombre = `${cliente.nombres} ${cliente.apellidos}`;

                // Proceder a generar el gráfico
                this.generarDatosGrafico();
            },
            (error) => {
                console.error('Error al buscar cliente por ID:', error);
                this.clienteNombre = ''; // Limpiar el nombre si ocurre un error
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo obtener los datos del cliente. Verifique el código ingresado.',
                });
            }
        );
    }

    generarDatosGrafico(): void {
        if (this.codigoClienteModal && this.fechaDesde && this.fechaHasta) {
            const fechaDesde = new Date(this.fechaDesde);
            const fechaHasta = new Date(this.fechaHasta);

            console.log('Rango de fechas ingresadas:');
            console.log('Desde:', fechaDesde.toISOString().split('T')[0]);
            console.log('Hasta:', fechaHasta.toISOString().split('T')[0]);

            const datosPorMes: { [key: string]: number } = {};

            let mesActual = fechaDesde.getUTCMonth();
            let anioActual = fechaDesde.getUTCFullYear();

            const observables = [];

            while (new Date(anioActual, mesActual) <= fechaHasta) {
                const observable = this.ingresoFacturaService.buscarFacturasGrafico(
                    this.codigoClienteModal,
                    mesActual + 1,
                    anioActual
                );
                observables.push(observable);
                if (mesActual === 11) {
                    mesActual = 0;
                    anioActual++;
                } else {
                    mesActual++;
                }
            }

            forkJoin(observables).subscribe((results: RespuestaFacturas[]) => {
                results.forEach((data, index) => {
                    console.log(`Datos recibidos de la API para el mes ${index + 1}:`);
                    console.log(data);

                    if (data.detalles && data.detalles.length > 0) {
                        data.detalles.forEach((detalle) => {
                            const fecha = new Date(detalle.fecha);
                            const mes = fecha.getUTCMonth() + 1;
                            const anio = fecha.getUTCFullYear();
                            const mesAnio = this.formatearMesAnio(mes - 1, anio);

                            console.log(`Fecha en formato UTC: ${fecha.toISOString()}`);
                            console.log('Mes-Año:', mesAnio);

                            if (fecha >= fechaDesde && fecha <= fechaHasta) {
                                console.log(`Procesando: ${mesAnio} - ${detalle.cantQuintales}`);

                                // Acumular valores asegurando precisión de dos decimales
                                datosPorMes[mesAnio] = parseFloat(
                                    ((datosPorMes[mesAnio] || 0) + (detalle.cantQuintales || 0)).toFixed(2)
                                );
                            }
                        });
                    }
                });

                console.log('Datos agrupados por mes:');
                console.log(JSON.stringify(datosPorMes, null, 2));
                const sortedKeys = Object.keys(datosPorMes).sort((a, b) => {
                    const [mesA, anioA] = a.split('-').map((val, index) =>
                        index === 0 ? this.meses.indexOf(val) : parseInt(val)
                    );
                    const [mesB, anioB] = b.split('-').map((val, index) =>
                        index === 0 ? this.meses.indexOf(val) : parseInt(val)
                    );
                    return new Date(anioA, mesA).getTime() - new Date(anioB, mesB).getTime();
                });

                const labels = sortedKeys;

                // Formatear los valores para el gráfico con dos decimales
                const values = sortedKeys.map((key) => parseFloat(datosPorMes[key].toFixed(2)));

                this.graficoData = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Cantidad de Quintales',
                            backgroundColor: '#42A5F5',
                            borderColor: '#1E88E5',
                            data: values,
                        },
                    ],
                };

                this.graficoOptions = {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top' as const,
                            labels: {
                                color: '#333',
                            },
                        },
                        tooltip: {
                            callbacks: {
                                label: (tooltipItem: TooltipItem<'bar'>) => {
                                    return `Quintales: ${parseFloat(tooltipItem.raw as string).toFixed(2)}`;
                                },
                            },
                            backgroundColor: '#333',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: '#666',
                                font: {
                                    weight: '500',
                                },
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        y: {
                            ticks: {
                                color: '#666',
                            },
                            grid: {
                                color: '#ddd',
                                drawBorder: false,
                            },
                        },
                    },
                };
            });
        } else {
            console.error('Faltan datos para generar el gráfico.');
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'Por favor complete todos los campos requeridos.',
            });
        }
    }

    private formatearMesAnio(mes: number, anio: number): string {
        return `${this.meses[mes]}-${anio}`;
    }



}
