import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompraCacaoService } from 'src/app/demo/service/compra-cacao.service';

@Component({
    selector: 'app-compras-semanales',
    templateUrl: './compras-semanales.component.html',
    styleUrls: ['./compras-semanales.component.scss'],
    providers: [DatePipe],
})
export class ComprasSemanalesComponent implements OnInit {
    comprasSemanales: any[] = [];
    totalQuintales: number = 0;
    dineroTotal: number = 0;
    promedio: number = 0;

    totalLibras: number = 0;

    fechaInicio: Date | undefined;
    fechaFin: Date | undefined;

    searchForm: FormGroup;

    tipoCacao: any[] = [];

    constructor(
        private comprasCacaOService: CompraCacaoService,
        private fb: FormBuilder,
        private datePipe: DatePipe
    ) {
        this.searchForm = this.fb.group({
            fechaInicio: [null],
            fechaFin: [null],
            tipoCacao: [null],
        });
    }
    ngOnInit(): void {
        this.tipoCacao = [
            { name: 'En Baba', value: 'En Baba' },
            { name: 'Oreado', value: 'Oreado' },
        ];
        this.cargarComprasSemanales();
    }

    cargarComprasSemanales() {
        this.comprasCacaOService.listarComprasSemanales().subscribe(
            (data: any[]) => {
                this.comprasSemanales = data;
                this.calcularTotales();
            },
            (error) => { 
                console.error('Error al obtener las compras:', error);
            }
        );
    }

    calcularTotales(): void {
        this.totalLibras = parseFloat(
            this.comprasSemanales
                .reduce((sum, item) => sum + (item.sumaCantidadLibra || 0), 0)
                .toFixed(2)
        );

        this.totalQuintales = parseFloat((this.totalLibras / 100).toFixed(2));

        this.dineroTotal = parseFloat(
            this.comprasSemanales
                .reduce((sum, item) => sum + (item.sumaValorMasDos || 0), 0)
                .toFixed(2)
        );

        this.promedio =
            this.totalQuintales > 0
                ? parseFloat(
                      (this.dineroTotal / this.totalQuintales).toFixed(2)
                  )
                : 0;
    }

    cargarComprasSemanalesporFecha() {
        const fechaInicio = this.searchForm.get('fechaInicio')?.value;
        const fechaFin = this.searchForm.get('fechaFin')?.value;
        const tipoCacaoObj = this.searchForm.get('tipoCacao')?.value;

        const formattedFechaInicio =
            this.datePipe.transform(fechaInicio, 'yyyy-MM-dd') || '';
        const formattedFechaFin =
            this.datePipe.transform(fechaFin, 'yyyy-MM-dd') || '';

        const tipoCacao = tipoCacaoObj ? tipoCacaoObj.value : '';

        this.comprasCacaOService
            .listarComprasSemanalesPorFechas(
                formattedFechaInicio,
                formattedFechaFin,
                tipoCacao
            )
            .subscribe(
                (data: any[]) => {
                    this.comprasSemanales = data;
                    this.calcularTotales();
                },
                (error) => {
                    console.error('Error al obtener las compras:', error);
                }
            );
    }
    limpiarFechas() {
        this.searchForm.reset();
        this.cargarComprasSemanales();
    }
}
