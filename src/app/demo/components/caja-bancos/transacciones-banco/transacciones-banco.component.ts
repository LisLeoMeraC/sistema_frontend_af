import { Component, OnInit } from '@angular/core';
import { TransaccionBancariaService } from '../../../service/transaccion-bancaria.service';
import { CuentaBancariaService } from '../../../service/cuenta-bancaria.service';
import { CuentaBancaria, TransaccionBancariaDTO, DepositoRetiroDTO } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transacciones-banco',
  templateUrl: './transacciones-banco.component.html',
  styleUrls: ['./transacciones-banco.component.scss']
})
export class TransaccionesBancoComponent implements OnInit {

  cuentas: CuentaBancaria[] = [];
  cuentaSeleccionada: CuentaBancaria | null = null;
  transacciones: TransaccionBancariaDTO[] = [];

  // Variables para depositos/retiros
  depositoRetiroDialog: boolean = false;
  tipoOperacion: 'DEPOSITO' | 'RETIRO' = 'DEPOSITO';
  montoOperacion: number = 0;
  descripcionOperacion: string = '';
  submitted: boolean = false;

  // Variables para comprobantes
  comprobanteDialog: boolean = false;
  transaccionSeleccionadaParaComprobante: TransaccionBancariaDTO | null = null;
  archivoComprobante: File | null = null;

  constructor(
    private transaccionService: TransaccionBancariaService,
    private cuentaService: CuentaBancariaService
  ) { }

  ngOnInit(): void {
    this.cargarCuentas();
  }

  cargarCuentas() {
    this.cuentaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentas = res;
    });
  }

  onCuentaChange() {
    if (this.cuentaSeleccionada && this.cuentaSeleccionada.id) {
      this.cargarTransacciones(this.cuentaSeleccionada.id);
    } else {
      this.transacciones = [];
    }
  }

  cargarTransacciones(cuentaId: number) {
    this.transaccionService.listarPorCuenta(cuentaId).subscribe(res => {
      this.transacciones = res;
      // Actualizar el saldo de la cuenta actual
      if (this.cuentaSeleccionada && this.cuentaSeleccionada.id === cuentaId) {
          this.cuentaService.obtenerCuentaBancariaPorId(cuentaId).subscribe(cuentaActualizada => {
              this.cuentaSeleccionada!.saldoActual = cuentaActualizada.saldoActual;
          });
      }
    });
  }

  openDeposito() {
    if (!this.cuentaSeleccionada) {
      Swal.fire('Atención', 'Debe seleccionar una cuenta bancaria primero', 'warning');
      return;
    }
    this.tipoOperacion = 'DEPOSITO';
    this.montoOperacion = 0;
    this.descripcionOperacion = '';
    this.submitted = false;
    this.depositoRetiroDialog = true;
  }

  openRetiro() {
    if (!this.cuentaSeleccionada) {
      Swal.fire('Atención', 'Debe seleccionar una cuenta bancaria primero', 'warning');
      return;
    }
    this.tipoOperacion = 'RETIRO';
    this.montoOperacion = 0;
    this.descripcionOperacion = '';
    this.submitted = false;
    this.depositoRetiroDialog = true;
  }

  hideDepositoRetiroDialog() {
    this.depositoRetiroDialog = false;
    this.submitted = false;
  }

  saveDepositoRetiro() {
    this.submitted = true;
    if (this.montoOperacion > 0 && this.descripcionOperacion.trim() && this.cuentaSeleccionada?.id) {
      
      const dto: DepositoRetiroDTO = {
        monto: this.montoOperacion,
        descripcion: this.descripcionOperacion,
        cuentaBancariaId: this.cuentaSeleccionada.id
      };

      let mensajeAviso = this.tipoOperacion === 'DEPOSITO' ?
        'Este monto será RESTADO del saldo de Caja General para enviarse al Banco. ¿Deseas continuar?' :
        'Este monto será SUMADO al saldo de Caja General tras retirar del Banco. ¿Deseas continuar?';

      Swal.fire({
        title: '¿Confirmar Operación?',
        text: mensajeAviso,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.tipoOperacion === 'DEPOSITO') {
            this.transaccionService.realizarDeposito(dto).subscribe({
              next: () => this.operacionExitosa(),
              error: (err) => Swal.fire('Error', err.error?.message || 'Error al procesar depósito', 'error')
            });
          } else {
            this.transaccionService.realizarRetiro(dto).subscribe({
              next: () => this.operacionExitosa(),
              error: (err) => Swal.fire('Error', err.error?.message || 'Error al procesar retiro', 'error')
            });
          }
        }
      });
    }
  }

  operacionExitosa() {
    Swal.fire('Éxito', `Operación registrada correctamente`, 'success');
    this.hideDepositoRetiroDialog();
    if (this.cuentaSeleccionada?.id) {
      this.cargarTransacciones(this.cuentaSeleccionada.id);
    }
  }

  // Comprobantes
  descargarComprobante(transaccion: TransaccionBancariaDTO) {
    if(transaccion.id) {
      this.transaccionService.descargarComprobante(transaccion.id).subscribe((response: any) => {
        let filename = `Comprobante_${transaccion.numeroComprobante || transaccion.id}.pdf`;
        const contentDisposition = response.headers.get('content-disposition');
        if (contentDisposition) {
            const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
            if (filenameMatch && filenameMatch.length === 2)
                filename = filenameMatch[1];
        }

        const blob = response.body;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, err => {
        Swal.fire('Error', 'No se pudo descargar el comprobante', 'error');
      });
    }
  }

  eliminarComprobante(transaccion: TransaccionBancariaDTO) {
    if (transaccion.id) {
      Swal.fire({
        title: '¿Eliminar comprobante?',
        text: '¿Está seguro de que desea eliminar este comprobante?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.transaccionService.eliminarComprobante(transaccion.id!).subscribe({
            next: () => {
              Swal.fire('Eliminado', 'Comprobante eliminado correctamente', 'success');
              if (this.cuentaSeleccionada?.id) {
                this.cargarTransacciones(this.cuentaSeleccionada.id);
              }
            },
            error: () => {
              Swal.fire('Error', 'No se pudo eliminar el comprobante', 'error');
            }
          });
        }
      });
    }
  }

  openSubirComprobante(transaccion: TransaccionBancariaDTO) {
    this.transaccionSeleccionadaParaComprobante = transaccion;
    this.archivoComprobante = null;
    this.comprobanteDialog = true;
  }

  hideComprobanteDialog() {
    this.comprobanteDialog = false;
    this.archivoComprobante = null;
    this.transaccionSeleccionadaParaComprobante = null;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivoComprobante = event.target.files[0];
    }
  }

  subirComprobante() {
    if (this.archivoComprobante && this.transaccionSeleccionadaParaComprobante?.id) {
      this.transaccionService.subirComprobante(this.transaccionSeleccionadaParaComprobante.id, this.archivoComprobante).subscribe({
        next: () => {
          Swal.fire('Éxito', 'Comprobante subido correctamente', 'success');
          this.hideComprobanteDialog();
          if (this.cuentaSeleccionada?.id) {
            this.cargarTransacciones(this.cuentaSeleccionada.id);
          }
        },
        error: () => {
          Swal.fire('Error', 'Hubo un error al subir el comprobante', 'error');
        }
      });
    } else {
      Swal.fire('Atención', 'Debe seleccionar un archivo', 'warning');
    }
  }

}
