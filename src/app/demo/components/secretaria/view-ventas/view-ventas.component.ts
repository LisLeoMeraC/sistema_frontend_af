import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError, Observable, of, tap } from 'rxjs';
import { VentasService } from 'src/app/demo/service/ventas.service';
import { ordenesVenta, pagosOrdenesVenta } from 'src/app/models/venta';


interface ExpandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-view-ventas',
  templateUrl: './view-ventas.component.html',
  styleUrls: ['./view-ventas.component.scss']
})
export class ViewVentasComponent implements OnInit {

  ordenesVenta: ordenesVenta[] = [];
  expandedRows: ExpandedRows = {};


  displayDialog: boolean = false;
  nuevoPagoForm: FormGroup;


  tiposDePago = [
    { nombre: 'Transferencia', valor: 'T' },
    { nombre: 'Efectivo', valor: 'E' }
  ];

  fechaPlaceholder: string = 'dd/MM/AAAA';


  constructor(private ventaService: VentasService, private fb: FormBuilder, private messageService: MessageService, private router: Router,
    private confirmationService: ConfirmationService) {

    this.nuevoPagoForm = this.fb.group({
      idOrdenVenta: [null, Validators.required],
      fechaPago: [null, Validators.required],
      tipoPago: [null, Validators.required],
      valorPago: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarOrdenesVenta();
  }


  toggleRow(orden: ordenesVenta) {
    if (this.expandedRows[orden.id]) {
      delete this.expandedRows[orden.id];
    } else {
      this.expandedRows = {}; // Esto cierra otras filas abiertas
      if (!orden.pagosOrdenesVenta) {
        this.cargarPagos(orden).subscribe(() => {
          this.expandedRows[orden.id] = true;
        });
      } else {
        this.expandedRows[orden.id] = true;
      }
    }
  }
  handleInput(event: any): void {
    const value = event.target.value;
    if (!value) {
      this.fechaPlaceholder = 'dd/MM/AAAA';
    }
  }

  mostrarComponenteVenta() {
    this.router.navigate(['/secretaria/ventas']);
  }

  cargarOrdenesVenta() {
    this.ventaService.obtenerOrdenesVenta().subscribe(
      (data) => {
        this.ordenesVenta = data;
        console.log("Se cargaron las ordenes de venta:", data);
      },
      (error) => {
        console.error('Error al obtener prestamos:', error);
      }
    );
  }

  confirmDeleteOrden(orden: ordenesVenta, event: Event): void {
    event.stopPropagation();
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar la orden #${orden.id} del cliente ${orden.comprador}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarOrdenVenta(orden.id);
      },
    });
  }

  eliminarOrdenVenta(ordenId: number): void {
    this.ventaService.eliminarOrdenVenta(ordenId).subscribe({
      next: () => {
        // Mensaje principal de éxito
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Orden eliminada correctamente',
          life: 3000
        });

        // Mensaje informativo sobre revisión de caja (se muestra después)
        setTimeout(() => {
          this.messageService.add({
            severity: 'info',
            summary: 'Revisión recomendada',
            detail: 'Por favor verifique en caja si existía un registro relacionado a esta venta',
            life: 8000, // Más tiempo visible
            icon: 'pi pi-info-circle'
          });
        }, 500); // Pequeño retardo para mejor UX

        this.cargarOrdenesVenta();
        this.expandedRows = {};
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'No se pudo eliminar la orden',
          life: 5000
        });
      }
    });
  }

  cargarPagos(orden: ordenesVenta): Observable<any> {
    return this.ventaService.obtenerPagosOrdenVenta(orden.id).pipe(
      tap((data) => {
        orden.pagosOrdenesVenta = data;
        console.log(`Pagos para la orden de venta ${orden.id}:`, orden.pagosOrdenesVenta);
      }),
      catchError((error) => {
        console.error(
          `Error al obtener pagos para la orden ${orden.id}:`,
          error
        );
        return of([]);
      })
    );
  }

  registrarPago() {
    if (this.nuevoPagoForm.invalid) {
      console.error('Formulario inválido');
      return;
    }

    const orden = this.ordenesVenta.find(o => o.id === this.nuevoPagoForm.value.idOrdenVenta);
    if (!orden) {
      console.error('Orden no encontrada.');
      return;
    }

    const valorPago = parseFloat(this.nuevoPagoForm.value.valorPago);
    const saldoPendiente = orden.pagosOrdenesVenta && orden.pagosOrdenesVenta.length > 0 ? orden.pagosOrdenesVenta[orden.pagosOrdenesVenta.length - 1].saldo : orden.valorTotal || 0;

    // Validación: No permitir pagos mayores al saldo pendiente
    if (valorPago > (saldoPendiente || 0)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: `El valor del pago (${valorPago}) no puede ser mayor al saldo pendiente (${saldoPendiente}).`,
      });
      return;
    }



    const fechaPagoLocal = new Date(this.nuevoPagoForm.value.fechaPago);
    const fechaPagoUTC = new Date(
      Date.UTC(
        fechaPagoLocal.getFullYear(),
        fechaPagoLocal.getMonth(),
        fechaPagoLocal.getDate(),
        fechaPagoLocal.getHours(),
        fechaPagoLocal.getMinutes(),
        fechaPagoLocal.getSeconds()
      )
    );

    const pagoData: pagosOrdenesVenta = {
      id: 0,
      ordenVenta: { id: this.nuevoPagoForm.value.idOrdenVenta },
      fechaPago: fechaPagoUTC.toISOString(),
      tipoPago: this.nuevoPagoForm.value.tipoPago,
      valorPago: valorPago
    };

    console.log('Pago a registrar:', JSON.stringify(pagoData, null, 2));

    this.ventaService.registrarPagoOrdenVenta(pagoData).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Pago registrado exitosamente.',
        });

        this.cargarPagos(orden).subscribe(() => {
          console.log(`Pagos actualizados para la orden de venta ${orden.id}`);

          const ultimoPago = orden.pagosOrdenesVenta && orden.pagosOrdenesVenta.length > 0 ? orden.pagosOrdenesVenta[orden.pagosOrdenesVenta.length - 1] : null;
          const nuevoSaldoPendiente = ultimoPago ? ultimoPago.saldo : 0;

          console.log("Saldo pendiente después del pago:", nuevoSaldoPendiente);

          if (nuevoSaldoPendiente === 0) {
            this.cargarOrdenesVenta();
            this.expandedRows = {};
          } else {
            this.expandedRows[orden.id] = true;
          }
        });

        this.closePagoDialog();
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se puede registrar el pago. Intente de nuevo.',
        });
        console.error('Error al registrar pago:', error);
      }
    );
  }



  closePagoDialog() {
    this.displayDialog = false;
    this.nuevoPagoForm.reset();
  }

  showPagoDialog(orden: ordenesVenta) {
    if (!this.expandedRows[orden.id]) {
      this.toggleRow(orden);
    }
    this.nuevoPagoForm.patchValue({
      idOrdenVenta: orden.id,
      fechaPago: new Date(),
    });
    this.displayDialog = true;
  }


}


