import { Component, OnInit } from '@angular/core';
import { CuentaPorPagarService } from '../../../service/cuenta-por-pagar.service';
import { CuentaBancariaService } from '../../../service/cuenta-bancaria.service';
import { CuentaPorPagarDTO, PagoCuentaRequestDTO, CuentaBancaria, PagoCuentaDTO } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuentas-por-pagar',
  templateUrl: './cuentas-por-pagar.component.html',
  styleUrls: ['./cuentas-por-pagar.component.scss']
})
export class CuentasPorPagarComponent implements OnInit {

  cuentas: CuentaPorPagarDTO[] = [];
  cuentasBancarias: CuentaBancaria[] = [];
  
  vistaActual: 'PENDIENTES' | 'PAGADAS' = 'PENDIENTES';
  loading: boolean = false;

  abonoDialog: boolean = false;
  historialDialog: boolean = false;
  cuentaSeleccionada: CuentaPorPagarDTO | null = null;
  pagosHistorial: PagoCuentaDTO[] = [];
  loadingHistorial: boolean = false;
  
  // Formulario Abono
  montoAbono: number = 0;
  metodoPago: string = 'EFECTIVO';
  cuentaBancariaSeleccionada: CuentaBancaria | null = null;
  descripcionAbono: string = '';
  submitted: boolean = false;

  metodosPago = [
    { label: 'Efectivo', value: 'EFECTIVO' },
    { label: 'Transferencia Bancaria', value: 'TRANSFERENCIA' }
  ];

  constructor(
    private cuentaPagarService: CuentaPorPagarService,
    private cuentaBancariaService: CuentaBancariaService
  ) { }

  ngOnInit(): void {
    this.cargarCuentasPorPagar();
    this.cargarCuentasBancarias();
  }

  cargarCuentasPorPagar() {
    this.loading = true;
    this.cuentaPagarService.listarCuentasPorPagar().subscribe(res => {
      this.cuentas = res;
      this.loading = false;
    });
  }

  cargarCuentasPagadas() {
    this.loading = true;
    this.cuentaPagarService.listarCuentasPagadas().subscribe(res => {
      this.cuentas = res;
      this.loading = false;
    });
  }

  toggleVista() {
    if (this.vistaActual === 'PENDIENTES') {
      this.vistaActual = 'PAGADAS';
      this.cargarCuentasPagadas();
    } else {
      this.vistaActual = 'PENDIENTES';
      this.cargarCuentasPorPagar();
    }
  }

  cargarCuentasBancarias() {
    this.cuentaBancariaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentasBancarias = res;
    });
  }

  openAbonoDialog(cuenta: CuentaPorPagarDTO) {
    this.cuentaSeleccionada = cuenta;
    this.montoAbono = 0;
    this.metodoPago = 'EFECTIVO';
    this.cuentaBancariaSeleccionada = null;
    this.descripcionAbono = '';
    this.submitted = false;
    this.abonoDialog = true;
  }

  hideAbonoDialog() {
    this.abonoDialog = false;
    this.submitted = false;
    this.cuentaSeleccionada = null;
  }

  verHistorial(cuenta: CuentaPorPagarDTO) {
    this.cuentaSeleccionada = cuenta;
    this.historialDialog = true;
    this.loadingHistorial = true;
    this.pagosHistorial = [];
    
    this.cuentaPagarService.obtenerPagosCuenta(cuenta.id).subscribe({
      next: (res) => {
        this.pagosHistorial = res;
        this.loadingHistorial = false;
      },
      error: (err) => {
        console.error(err);
        this.loadingHistorial = false;
      }
    });
  }

  hideHistorialDialog() {
    this.historialDialog = false;
    this.cuentaSeleccionada = null;
  }

  saveAbono() {
    this.submitted = true;
    
    // Validaciones
    if (!this.cuentaSeleccionada) return;
    if (this.montoAbono <= 0) return;
    if (this.montoAbono > this.cuentaSeleccionada.saldoPendiente) {
      Swal.fire('Atención', 'El monto del abono no puede superar el saldo pendiente.', 'warning');
      return;
    }
    if (!this.descripcionAbono.trim()) return;
    if (this.metodoPago === 'TRANSFERENCIA' && !this.cuentaBancariaSeleccionada) return;

    const request: PagoCuentaRequestDTO = {
      monto: this.montoAbono,
      metodoPago: this.metodoPago,
      descripcion: this.descripcionAbono,
      cuentaBancariaId: this.metodoPago === 'TRANSFERENCIA' ? this.cuentaBancariaSeleccionada?.id : undefined
    };

    let mensajeInfo = this.metodoPago === 'EFECTIVO' ? 
      'Se registrará el pago restando el dinero de Caja General. ¿Deseas continuar?' : 
      `Se registrará el pago restando de la cuenta bancaria ${this.cuentaBancariaSeleccionada?.numeroCuenta}. ¿Deseas continuar?`;

    Swal.fire({
      title: 'Confirmar Abono',
      text: mensajeInfo,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cuentaPagarService.pagarCuenta(this.cuentaSeleccionada!.id, request).subscribe({
          next: () => {
            Swal.fire('Éxito', 'Abono registrado correctamente', 'success');
            this.hideAbonoDialog();
            this.cargarCuentasPorPagar();
          },
          error: (err) => {
            Swal.fire('Error', err.error?.message || 'Error al registrar abono', 'error');
          }
        });
      }
    });
  }

}
