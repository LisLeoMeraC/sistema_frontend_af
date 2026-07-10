export interface Banco {
    id?: number;
    nombre: string;
    estado?: boolean;
}

export interface CuentaBancaria {
    id?: number;
    banco: Banco;
    numeroCuenta: string;
    tipoCuenta: string;
    titular: string;
    saldoActual?: number;
    estado?: boolean;
}

export interface TransaccionBancariaDTO {
    id?: number;
    cuentaBancariaId: number;
    fechaHora: string;
    tipo: string;
    monto: number;
    descripcion: string;
    numeroComprobante: string;
    tieneComprobante: boolean;
}

export interface DepositoRetiroDTO {
    monto: number;
    cuentaBancariaId: number;
    descripcion: string;
}

export interface CuentaPorPagarDTO {
    id: number;
    compraCacaoId: number;
    clienteNombre: string;
    montoTotal: number;
    montoPagado: number;
    saldoPendiente: number;
    fechaCreacion: string;
    estado: string;
}

export interface CuentaPorCobrarDTO {
    id: number;
    ordenVentaCacaoId: number;
    proveedorNombre: string;
    montoTotal: number;
    montoCobrado: number;
    saldoPendiente: number;
    fechaCreacion: string;
    estado: string;
}

export interface PagoCuentaRequestDTO {
    monto: number;
    metodoPago: string;
    cuentaBancariaId?: number;
    descripcion: string;
}

export interface PagoCuentaDTO {
    id: number;
    monto: number;
    metodoPago: string;
    descripcion: string;
    fechaPago: string;
}

export interface ReporteLibroBancosDTO {
    cuentaId: number;
    bancoNombre: string;
    numeroCuenta: string;
    tipoCuenta: string;
    fechaInicio: string;
    fechaFin: string;
    saldoInicial: number;
    totalIngresos: number;
    totalEgresos: number;
    saldoFinal: number;
    transacciones: TransaccionBancariaDTO[];
}

export interface CuentaConsolidadaDTO {
    id: number;
    tipo: string;
    banco: string;
    cuenta: string;
    numeroCuenta: string;
    moneda: string;
    saldoDisponible: number;
    estado: string;
    ultimoMovimiento: string;
    responsable: string;
}

export interface BancoConsolidadoDTO {
    banco: string;
    saldo: number;
    porcentaje: number;
}

export interface DashboardFinancieroDTO {
    liquidezTotal: number;
    totalBancos: number;
    totalCajas: number;
    
    numCuentasActivas: number;
    numBancos: number;
    numCajas: number;
    
    porcentajeBancos: number;
    porcentajeCajas: number;
    
    distribucionBancos: BancoConsolidadoDTO[];
    cuentasConsolidadas: CuentaConsolidadaDTO[];

    cuentasInactivas: number;
    saldoPromedioCuenta: number;
    mayorSaldo: number;
    menorSaldo: number;

    cuentasSaldoSuficiente: number;
    cuentasSaldoBajo: number;
    cuentasSinFondos: number;
    cuentasSinMovimientos: number;
}