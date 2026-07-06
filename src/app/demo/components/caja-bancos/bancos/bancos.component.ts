import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../../service/banco.service';
import { Banco } from '../../../api/caja-bancos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})
export class BancosComponent implements OnInit {

  bancos: Banco[] = [];
  bancoDialog: boolean = false;
  banco: Banco = { nombre: '' };
  submitted: boolean = false;

  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
    this.cargarBancos();
  }

  cargarBancos() {
    this.bancoService.listarBancosActivos().subscribe(res => {
      this.bancos = res;
    });
  }

  openNew() {
    this.banco = { nombre: '' };
    this.submitted = false;
    this.bancoDialog = true;
  }

  editBanco(banco: Banco) {
    this.banco = { ...banco };
    this.bancoDialog = true;
  }

  hideDialog() {
    this.bancoDialog = false;
    this.submitted = false;
  }

  saveBanco() {
    this.submitted = true;

    if (this.banco.nombre?.trim()) {
      if (this.banco.id) {
        this.bancoService.actualizarBanco(this.banco.id, this.banco).subscribe({
          next: () => {
            Swal.fire('Éxito', 'Banco actualizado correctamente', 'success');
            this.cargarBancos();
            this.hideDialog();
          },
          error: (err) => {
            Swal.fire('Error', 'Hubo un error al actualizar', 'error');
          }
        });
      } else {
        this.bancoService.crearBanco(this.banco).subscribe({
          next: () => {
            Swal.fire('Éxito', 'Banco creado correctamente', 'success');
            this.cargarBancos();
            this.hideDialog();
          },
          error: (err) => {
            Swal.fire('Error', 'Hubo un error al crear', 'error');
          }
        });
      }
    }
  }

  deleteBanco(banco: Banco) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `No podrás revertir esto. Se desactivará el banco: ${banco.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(banco.id) {
          this.bancoService.desactivarBanco(banco.id).subscribe({
            next: () => {
              Swal.fire('Eliminado!', 'El banco ha sido desactivado.', 'success');
              this.cargarBancos();
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
