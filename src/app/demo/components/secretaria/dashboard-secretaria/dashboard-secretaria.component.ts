import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/demo/service/cliente.service';

@Component({
  selector: 'app-dashboard-secretaria',
  templateUrl: './dashboard-secretaria.component.html',
  styleUrls: ['./dashboard-secretaria.component.scss']
})
export class DashboardSecretariaComponent implements OnInit {

  totalClientes: number = 0;
  today: Date = new Date();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.obtenertotalClientesRegistrados();
  }

  obtenertotalClientesRegistrados(){
    this.clienteService.contarClientes().subscribe({
      next: (total) => {
        this.totalClientes = total;
      },
      error: (err) => {
        console.error('Error al contar clientes', err);
      }
    });
  }

}
