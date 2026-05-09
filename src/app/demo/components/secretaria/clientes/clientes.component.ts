import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { debounceTime, Subject } from 'rxjs';
import { ClienteService } from 'src/app/demo/service/cliente.service';
import { RecintoService } from 'src/app/demo/service/recinto.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Recinto } from 'src/app/models/recinto.model';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss'],
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None,
})
export class ClientesComponent implements OnInit {
    editingClienteId: number | undefined;
    displayModal: boolean = false;
    displayEditModal: boolean = false;
    displayRecintoModal: boolean = false;
    registerForm: FormGroup;
    editForm: FormGroup;
    errorMessage: string | null = null;
    registerFormRecinto: FormGroup;
    msgs: Message[] = [];
    recintos: Recinto[] = [];
    filteredRecintos: Recinto[] = [];
    selectedRecinto: Recinto | null = null;
    clientes: Cliente[] = [];
    isEditing: boolean = false;
    selectedClienteId: number | null = null;

    //Para hacer los respectivos filtros
    private searchTerms = new Subject<{ type: string; value: string }>();
    totalRecords: number = 0;
    loading: boolean = false;
    rowsPerPage: number = 10;
    currentPage: number = 0;
    searchTerm: string = '';
    searchBy: 'cedula' | 'nombreApellido' | 'id' | 'none' = 'none';

    //Para establecer certificacion a los clientes
    selectedCliente: Cliente | null = null;
    private isSingleClientSearch: boolean = false;
    mensaje: string = '';

    constructor(
        private fb: FormBuilder,
        private messageService: MessageService,
        private recintoService: RecintoService,
        private clienteService: ClienteService,
        private confirmationService: ConfirmationService
    ) {
        this.registerForm = this.fb.group({
            id: [null],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            cedula: ['', [Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],
            telefono: ['', [Validators.pattern('^[0-9]*$')]],
            hectareas: ['', [Validators.pattern(/^\d*\.?\d*$/)]],
            recinto: [null, Validators.required],
            rainforest: [false],
            nestle: [false],
            olam: [false],
        });

        this.editForm = this.fb.group({
            id: [null],
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            cedula: ['', [Validators.minLength(10)]],
            telefono: [''],
            hectareas: ['', [Validators.pattern(/^\d*\.?\d*$/)]],
            recinto: [null, Validators.required],
            rainforest: [false],
            nestle: [false],
            olam: [false],
        });

        this.registerFormRecinto = this.fb.group({
            nombreRecinto: ['', Validators.required],
        });
    }

    //Metodos para registrar un cliente

    //Para abrir el modal de registro de cliente
    showModalDialog() {
        this.displayModal = true;
        this.registerForm.reset();
        this.selectedRecinto = null;
        this.registerForm.patchValue({ recinto: null });
    }

    //Para abrir el modal de recinto
    showRecintoModalDialog() {
        this.displayRecintoModal = true;
    }

    //Para cerrar el modal de registro de cliente
    CloseModalDialog() {
        this.registerForm.reset();
        this.selectedRecinto = null;
        this.displayModal = false;
    }

    //Para cerrar el modal de recinto
    CloseRecintoModalDialog() {
        this.registerFormRecinto.reset();
        this.displayRecintoModal = false;
    }

    ngOnInit(): void {
        this.recintoService.listarRecintos().subscribe(
            (data: Recinto[]) => {
                this.recintos = data;
                this.filteredRecintos = [...this.recintos];
            },
            (error) => {
                console.error('Error al obtener recintos:', error);
            }
        );

        this.searchTerms
            .pipe(debounceTime(300))
            .subscribe(({ type, value }) => {
                if (value) {
                    this.buscarClientes(
                        type,
                        value,
                        this.currentPage,
                        this.rowsPerPage
                    );
                } else {
                    this.cargarClientesPaginados(
                        this.currentPage,
                        this.rowsPerPage
                    );
                }
            });
    }

    //Para mostrar el dialog de confirmacion para agregar certificacion

    confirmCertificadoChange(cliente: Cliente) {
        const currentState = cliente.certificado;
        if (cliente.certificado == true) {
            this.mensaje = '¿Desea revocar la certificación de este cliente?';
        } else {
            this.mensaje = '¿Deseas otorgar la certificación a este cliente?';
        }
        this.confirmationService.confirm({
            key: 'confirm',
            message: this.mensaje,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.onCertificadoConfirmed(cliente, currentState);
            },
            reject: () => {},
        });
    }

    //Metodo para llamar al servicio y actualizar el certificado
    onCertificadoConfirmed(cliente: Cliente, currentState: boolean) {
        if (cliente) {
            this.clienteService
                .actualizarClienteCertificado(cliente.id)
                .subscribe(
                    () => {
                        // Actualizar el estado localmente para feedback inmediato
                        cliente.certificado = !currentState;
                        
                        if (this.isSingleClientSearch) {
                            this.clientes = [{...cliente}];
                        } else {
                            this.cargarClientesPaginados(
                                this.currentPage,
                                this.rowsPerPage
                            );
                        }
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Estado del certificado actualizado.',
                        });
                    },
                    () => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Error al actualizar el estado del certificado.',
                        });
                    }
                );
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Advertencia',
                detail: 'No hay cliente seleccionado.',
            });
        }
    }

    //Metodos para hacer los diferentes filtros en la busqueda de clientes

    onInputChange(type: string, event: any): void {
        const value = event.target.value;
        this.searchTerms.next({ type, value });
    }

    buscarClientes(type: string, value: string, page: number, size: number) {
        this.loading = true;
        let searchObservable;

        switch (type) {
            case 'id':
                searchObservable = this.clienteService.buscarClientePorId(
                    +value
                );
                this.isSingleClientSearch = true;
                break;
            case 'nombreApellido':
                searchObservable =
                    this.clienteService.buscarClientesPorNombreApellidoPaginado(
                        value,
                        page,
                        size
                    );
                this.isSingleClientSearch = false;
                break;
            case 'cedula':
                searchObservable =
                    this.clienteService.buscarClientesPorCodigoPaginado(
                        value,
                        page,
                        size
                    );
                this.isSingleClientSearch = false;
                break;
            default:
                this.loading = false;
                return;
        }

        searchObservable.subscribe(
            (data: any) => {
                if (type === 'id') {
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
                console.error(`Error al buscar clientes por ${type}:`, error);
            }
        );
    }

    cargarClientesPaginados(page: number, size: number) {
        this.loading = true;
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
    onLazyLoad(event: any) {
        this.currentPage = event.first / event.rows;
        this.rowsPerPage = event.rows;
        if (this.searchTerm) {
            this.buscarClientes(
                this.searchBy,
                this.searchTerm,
                this.currentPage,
                this.rowsPerPage
            );
        } else {
            this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
        }
    }

    onFilter(event: any) {
        const query = event.filter;

        if (query) {
            this.filteredRecintos = this.recintos.filter((recinto) =>
                recinto.nombreRecinto
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );
        } else {
            this.filteredRecintos = [...this.recintos];
        }
    }

    //Metdos para editar un cliente y para cambiar todos los datos para un nuevo cliente

    showEditModalDialog(cliente: Cliente) {
        this.isEditing = true;
        this.selectedClienteId = cliente.id;
        this.selectedRecinto = cliente.recinto;

        this.editForm.patchValue({
            id: cliente.id,
            nombre: cliente.nombres,
            apellido: cliente.apellidos,
            cedula: cliente.cedula,
            telefono: cliente.telefono,
            hectareas: cliente.hectareas,
            recinto: this.selectedRecinto,
            rainforest: cliente.rainforest,
            nestle: cliente.nestle,
            olam: cliente.olam,
        });
        this.displayEditModal = true;
    }

    CloseEditModalDialog() {
        this.editForm.reset();
        this.selectedRecinto = null;
        this.displayEditModal = false;
    }

    onEditSubmit() {
        if (this.editForm.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete el formulario correctamente.',
            });
            return;
        }

        const cliente: any = {
            id: this.editForm.get('id')?.value,
            nombres: this.editForm.get('nombre')?.value,
            apellidos: this.editForm.get('apellido')?.value,
            cedula: this.editForm.get('cedula')?.value,
            telefono: this.editForm.get('telefono')?.value,
            hectareas: parseFloat(this.editForm.get('hectareas')?.value),
            recinto: this.editForm.get('recinto')?.value,
            rainforest: this.editForm.get('rainforest')?.value,
            nestle: this.editForm.get('nestle')?.value,
            olam: this.editForm.get('olam')?.value,
        };

        // Actualizar cliente existente
        if (this.selectedClienteId !== null) {
            this.clienteService
                .actualizarCliente(this.selectedClienteId, cliente)
                .subscribe(
                    () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Cliente actualizado exitosamente.',
                        });
                        this.CloseEditModalDialog();
                        this.cargarClientesPaginados(
                            this.currentPage,
                            this.rowsPerPage
                        );
                    },
                    (error) => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'No se pudo actualizar el cliente.',
                        });
                        console.error('Error al actualizar cliente:', error);
                    }
                );
        }
    }

    onEditDeleteSubmit() {
        if (this.editForm.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete el formulario correctamente.',
            });
            return;
        }

        const cliente: any = {
            id: this.editForm.get('id')?.value,
            nombres: this.editForm.get('nombre')?.value,
            apellidos: this.editForm.get('apellido')?.value,
            cedula: this.editForm.get('cedula')?.value,
            telefono: this.editForm.get('telefono')?.value,
            hectareas: parseFloat(this.editForm.get('hectareas')?.value),
            recinto: this.editForm.get('recinto')?.value,
            rainforest: this.editForm.get('rainforest')?.value,
            nestle: this.editForm.get('nestle')?.value,
            olam: this.editForm.get('olam')?.value,
        };

        // Nuevo método para actualizar cliente y eliminar facturas
        if (this.selectedClienteId !== null) {
            this.clienteService
                .actualizarClienteYEliminarFacturas(
                    this.selectedClienteId,
                    cliente
                )
                .subscribe(
                    () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: 'Cliente actualizado y facturas eliminadas exitosamente.',
                        });
                        this.CloseEditModalDialog();
                        this.cargarClientesPaginados(
                            this.currentPage,
                            this.rowsPerPage
                        );
                    },
                    (error) => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'No se pudo actualizar el cliente y eliminar las facturas.',
                        });
                        console.error(
                            'Error al actualizar cliente y eliminar facturas:',
                            error
                        );
                    }
                );
        }
    }

    eliminarCliente(id: number) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: '¿Estás seguro de que deseas eliminar este cliente? Esta acción no se puede deshacer.',
            header: 'Confirmación de Eliminación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí, eliminar',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.clienteService.eliminarCliente(id).subscribe(
                    (response) => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Éxito',
                            detail: response.message || 'Cliente eliminado con éxito.',
                        });
                        if (this.isSingleClientSearch) {
                            this.clientes = this.clientes.filter((c) => c.id !== id);
                            this.totalRecords = this.clientes.length;
                        } else {
                            this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
                        }
                    },
                    (error) => {
                        let errorMessage = 'Ocurrió un error al intentar eliminar el cliente.';
                        if (error.status === 400 && error.error && error.error.error) {
                            errorMessage = error.error.error;
                        }
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error al Eliminar',
                            detail: errorMessage,
                        });
                        console.error('Error al eliminar cliente:', error);
                    }
                );
            },
            reject: () => {}
        });
    }

    onRecintoSelect(event: any) {
        this.selectedRecinto = event.value;
        this.registerForm.patchValue({ recinto: this.selectedRecinto });
    }

    //Metodo para guardar un nuevo cliente
    onSubmit() {
        if (this.registerForm.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete el formulario correctamente.',
            });
            return;
        }

        const cliente: any = {
            id: this.isEditing ? this.registerForm.get('id')?.value : undefined,
            nombres: this.registerForm.get('nombre')?.value,
            apellidos: this.registerForm.get('apellido')?.value,
            cedula: this.registerForm.get('cedula')?.value,
            telefono: this.registerForm.get('telefono')?.value,
            hectareas: parseFloat(this.registerForm.get('hectareas')?.value),
            recinto: this.registerForm.get('recinto')?.value,
            rainforest: this.registerForm.get('rainforest')?.value,
            nestle: this.registerForm.get('nestle')?.value,
            olam: this.registerForm.get('olam')?.value,
        };

        console.log('Datos del cliente enviado:', cliente);

        this.clienteService.guardarCliente(cliente).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Cliente registrado exitosamente.',
                });
                this.CloseModalDialog();
                this.cargarClientesPaginados(
                    this.currentPage,
                    this.rowsPerPage
                );
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo registrar el cliente.',
                });
                console.error('Error al registrar cliente:', error);
            }
        );
    }

    //Metodo para guardar un nuevo recinto
    onSubmitRecinto() {
        if (this.registerFormRecinto.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor complete el formulario de recinto correctamente.',
            });
            return;
        }

        const recinto: Recinto = {
            nombreRecinto: this.registerFormRecinto.get('nombreRecinto')?.value,
        };

        this.recintoService.guardarRecinto(recinto).subscribe(
            (data) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Recinto registrado exitosamente.',
                });
                this.CloseRecintoModalDialog();
                // Actualizar la referencia del arreglo para que PrimeNG detecte el cambio
                this.recintos = [...this.recintos, data];
                this.filteredRecintos = [...this.recintos];
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'No se pudo registrar el recinto.',
                });
                console.error('Error al registrar recinto:', error);
            }
        );
    }
}
