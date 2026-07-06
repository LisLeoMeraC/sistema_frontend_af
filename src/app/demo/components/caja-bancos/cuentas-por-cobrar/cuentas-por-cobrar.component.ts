import { Component, OnInit } from '@angular/core';
import { CuentaPorCobrarService } from '../../../service/cuenta-por-cobrar.service';
import { CuentaBancariaService } from '../../../service/cuenta-bancaria.service';
import { CuentaPorCobrarDTO, PagoCuentaRequestDTO, CuentaBancaria } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuentas-por-cobrar',
  templateUrl: './cuentas-por-cobrar.component.html',
  styleUrls: ['./cuentas-por-cobrar.component.scss']
})
export class CuentasPorCobrarComponent implements OnInit {

  cuentas: CuentaPorCobrarDTO[] = [];
  cuentasBancarias: CuentaBancaria[] = [];
  
  abonoDialog: boolean = false;
  cuentaSeleccionada: CuentaPorCobrarDTO | null = null;
  
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
    private cuentaCobrarService: CuentaPorCobrarService,
    private cuentaBancariaService: CuentaBancariaService
  ) { }

  ngOnInit(): void {
    this.cargarCuentasPorCobrar();
    this.cargarCuentasBancarias();
  }

  cargarCuentasPorCobrar() {
    this.cuentaCobrarService.listarCuentasPorCobrar().subscribe(res => {
      this.cuentas = res;
    });
  }

  cargarCuentasBancarias() {
    this.cuentaBancariaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentasBancarias = res;
    });
  }

  openAbonoDialog(cuenta: CuentaPorCobrarDTO) {
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

  saveAbono() {
    this.submitted = true;
    
    // Validaciones
    if (!this.cuentaSeleccionada) return;
    if (this.montoAbono <= 0) return;
    if (this.montoAbono > this.cuentaSeleccionada.saldoPendiente) {
      Swal.fire('Atención', 'El monto del cobro no puede superar el saldo pendiente.', 'warning');
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
      'Se registrará el cobro ingresando el dinero a Caja General. ¿Deseas continuar?' : 
      `Se registrará el cobro ingresando el dinero a la cuenta bancaria ${this.cuentaBancariaSeleccionada?.numeroCuenta}. ¿Deseas continuar?`;

    Swal.fire({
      title: 'Confirmar Cobro',
      text: mensajeInfo,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cuentaCobrarService.cobrarCuenta(this.cuentaSeleccionada!.id, request).subscribe({
          next: () => {
            Swal.fire('Éxito', 'Cobro registrado correctamente', 'success');
            this.hideAbonoDialog();
            this.cargarCuentasPorCobrar();
          },
          error: (err) => {
            Swal.fire('Error', err.error?.message || 'Error al registrar cobro', 'error');
          }
        });
      }
    });
  }

}
