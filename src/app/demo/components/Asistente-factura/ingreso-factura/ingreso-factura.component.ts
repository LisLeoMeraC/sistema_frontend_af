import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { debounceTime, Subject } from 'rxjs';
import { ClienteService } from 'src/app/demo/service/cliente.service';
import { IngresoFacturaService } from 'src/app/demo/service/ingreso-factura.service';
import { Cliente } from 'src/app/models/cliente.model';
import { IngresoFactura } from 'src/app/models/ingresoFactura';




@Component({
    selector: 'app-ingreso-factura',
    templateUrl: './ingreso-factura.component.html',
    styleUrls: ['./ingreso-factura.component.scss'],
})


export class IngresoFacturaComponent implements OnInit {
    clientes: Cliente[] = [];
    registerForm: FormGroup;
    errorMessage: string | null = null;
    msgs: Message[] = [];

    totalRecords: number = 0;
    loading: boolean = false;
    rowsPerPage: number = 5; // Registros por página
    currentPage: number = 0; // Página actual
    searchTerms = new Subject<string>();
    searchTerm: string = '';

    constructor(
        private clienteService: ClienteService,
        private ingresoFacturaService: IngresoFacturaService,
        private messageService: MessageService,
        private fb: FormBuilder
    ) {
        this.registerForm = this.fb.group({
            codigo: [{ value: '', disabled: true }],
            nombres: [{ value: '', disabled: true }],
            apellidos: [{ value: '', disabled: true }],
            cedula: [{ value: '', disabled: true }],
            libras: ['', [Validators.pattern(/^\d*\.?\d*$/)]],
            fecha: [new Date(), Validators.required],
        });
    }

    ngOnInit(): void {
      this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);

      this.searchTerms
          .pipe(
              debounceTime(300) // Tiempo de espera antes de iniciar la búsqueda
          )
          .subscribe((value) => {
              this.loading = true; // Activa el spinner al iniciar la búsqueda
  
              if (value) {
                  this.buscarClientesPorId(value); // Busca clientes por ID
              } else {
                  // Restablece la página actual a 0 y carga todos los clientes paginados
                  this.currentPage = 0; // Vuelve a la primera página
                  this.cargarClientesPaginados(this.currentPage, this.rowsPerPage); // Carga clientes paginados
              }
          });
    }

    cargarClientesPaginados(page: number, size: number): void {
      this.loading = true; // Activa el spinner al iniciar la carga de datos
      this.clienteService.obtenerClientesPaginados(page, size).subscribe(
          (data: any) => {
              this.clientes = data.content; // Ajusta según la estructura de tu respuesta
              this.totalRecords = data.totalElements; // Total de registros
              this.loading = false; // Oculta el spinner
          },
          (error) => {
              console.error('Error al obtener clientes:', error);
              this.loading = false; // Asegúrate de ocultar el spinner en caso de error
          }
      );
  }

    buscarClientesPorId(id: string): void {
        this.loading = true; // Activa el spinner
        this.clienteService.buscarClientePorId(+id).subscribe(
            (data: any) => {
                this.clientes = [data]; // Ajusta según la estructura de tu respuesta
                this.totalRecords = 1; // Solo un cliente
                this.loading = false; // Oculta el spinner
            },
            (error) => {
                this.clientes = []; // Limpia la lista en caso de error
                this.totalRecords = 0; // Actualiza total records
                this.loading = false; // Oculta el spinner
                console.error('Error al buscar cliente por ID:', error);
            }
        );
    }
    onIdInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement; // Asegúrate de usar el tipo correcto
        this.searchTerm = inputElement.value; // Asigna el valor de entrada
        this.searchTerms.next(this.searchTerm); // Envía el valor al Subject
    }
    onLazyLoad(event: any): void {
        this.currentPage = event.first / event.rows; // Calcula la página actual
        this.rowsPerPage = event.rows; // Obtiene el tamaño de la página

        // Carga clientes paginados
        this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
    }

    /* onIdInput(event: any): void {
    const id = event.target.value;
    if (id) {
      this.clienteService.buscarClientePorId(+id).subscribe(
        (data: Cliente) => {
          this.clientes = [data];
          this.errorMessage = null;
        },
        (error) => {
          this.clientes = [];
          this.errorMessage = 'Cliente no encontrado';
          console.error('Error al buscar cliente:', error);
        }
      );
    } else {
      this.cargarClientes();
    }
  }*/

    onClear() {
        this.registerForm.reset({
            codigo: { value: '', disabled: true },
            nombres: { value: '', disabled: true },
            apellidos: { value: '', disabled: true },
            cedula: { value: '', disabled: true },
            libras: '',
            fecha: new Date(),
        });
        this.searchTerm = ''; // Limpia el valor del campo de búsqueda
        this.searchTerms.next(this.searchTerm); // Llama al método para actualizar la búsqueda
        
        // Carga todos los clientes desde la primera página
        this.currentPage = 0; // Reinicia la página actual
        this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
    }

    onRowClienteSeleccionado(event: any) {
        const cliente = event.data;
        console.log('Cliente seleccionado:', cliente);
        if (cliente) {
            this.registerForm.patchValue({
                codigo: cliente.id,
                nombres: cliente.nombres,
                apellidos: cliente.apellidos,
                cedula: cliente.cedula,
            });
        }
    }

    onSubmit() {
        if (this.registerForm.valid) {
            // Obtener los datos del formulario
            const formData = this.registerForm.value;

            // Obtener el ID del cliente seleccionado desde el formulario
            const clienteId = this.registerForm.get('codigo')?.value;

            // Construir el objeto cliente para enviar
            const cliente = { id: clienteId };

            // Crear el objeto de datos a enviar
            const data = {
                id:0,
                cliente: cliente,
                fecha: formData.fecha.toISOString(),
                cantQuintales: formData.libras || '0',
            };

            console.log('Datos a enviar:', data);

            // Enviar la solicitud al servicio
            this.ingresoFacturaService.registrarFactura(data).subscribe(
                (response) => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Éxito',
                        detail: 'Factura registrada con éxito',
                    });
                    this.onClear(); // Limpiar el formulario después del envío
                },
                (error) => {
                    console.error('Error al registrar factura:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'No se pudo registrar la factura',
                    });
                }
            );
        } else {
            console.log('Formulario no válido');
        }
    }
}
