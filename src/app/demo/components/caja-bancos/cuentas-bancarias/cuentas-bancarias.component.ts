import { Component, OnInit } from '@angular/core';
import { CuentaBancariaService } from '../../../service/cuenta-bancaria.service';
import { BancoService } from '../../../service/banco.service';
import { CuentaBancaria, Banco } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuentas-bancarias',
  templateUrl: './cuentas-bancarias.component.html',
  styleUrls: ['./cuentas-bancarias.component.scss']
})
export class CuentasBancariasComponent implements OnInit {

  cuentas: CuentaBancaria[] = [];
  bancos: Banco[] = [];
  tiposCuenta: any[] = [
    { label: 'Corriente', value: 'CORRIENTE' },
    { label: 'Ahorros', value: 'AHORROS' }
  ];

  cuentaDialog: boolean = false;
  cuenta: CuentaBancaria = {
    banco: { nombre: '' },
    numeroCuenta: '',
    tipoCuenta: '',
    titular: '',
    saldoActual: 0
  };
  
  bancoSeleccionado: Banco | null = null;
  submitted: boolean = false;

  constructor(
    private cuentaService: CuentaBancariaService,
    private bancoService: BancoService
  ) { }

  ngOnInit(): void {
    this.cargarCuentas();
    this.cargarBancos();
  }

  cargarCuentas() {
    this.cuentaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentas = res;
    });
  }

  cargarBancos() {
    this.bancoService.listarBancosActivos().subscribe(res => {
      this.bancos = res;
    });
  }

  openNew() {
    this.cuenta = { banco: { nombre: '' }, numeroCuenta: '', tipoCuenta: '', titular: '', saldoActual: 0 };
    this.bancoSeleccionado = null;
    this.submitted = false;
    this.cuentaDialog = true;
  }

  editCuenta(cuenta: CuentaBancaria) {
    this.cuenta = { ...cuenta };
    // Find the banco object in the loaded list so the dropdown selects it properly
    if (this.cuenta.banco && this.cuenta.banco.id) {
      this.bancoSeleccionado = this.bancos.find(b => b.id === this.cuenta.banco.id) || null;
    }
    this.cuentaDialog = true;
  }

  hideDialog() {
    this.cuentaDialog = false;
    this.submitted = false;
  }

  saveCuenta() {
    this.submitted = true;

    if (this.cuenta.numeroCuenta?.trim() && this.cuenta.tipoCuenta && this.cuenta.titular?.trim() && this.bancoSeleccionado) {
      if (this.cuenta.id) {
        this.cuenta.banco = this.bancoSeleccionado;
        this.cuentaService.actualizarCuentaBancaria(this.cuenta.id, this.cuenta).subscribe({
          next: () => {
            Swal.fire('Éxito', 'Cuenta bancaria actualizada correctamente', 'success');
            this.cargarCuentas();
            this.hideDialog();
          },
          error: () => {
            Swal.fire('Error', 'Hubo un error al actualizar', 'error');
          }
        });
      } else {
        if(this.bancoSeleccionado.id) {
           this.cuentaService.crearCuentaBancaria(this.bancoSeleccionado.id, this.cuenta).subscribe({
            next: () => {
              Swal.fire('Éxito', 'Cuenta bancaria creada correctamente', 'success');
              this.cargarCuentas();
              this.hideDialog();
            },
            error: () => {
              Swal.fire('Error', 'Hubo un error al crear', 'error');
            }
          });
        }
      }
    }
  }

  deleteCuenta(cuenta: CuentaBancaria) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `No podrás revertir esto. Se desactivará la cuenta: ${cuenta.numeroCuenta}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(cuenta.id) {
          this.cuentaService.desactivarCuentaBancaria(cuenta.id).subscribe({
            next: () => {
              Swal.fire('Eliminado!', 'La cuenta bancaria ha sido desactivada.', 'success');
              this.cargarCuentas();
            },
            error: () => {
              Swal.fire('Error', 'Hubo un problema al desactivar.', 'error');
            }
          });
        }
      }
    });
  }

}
