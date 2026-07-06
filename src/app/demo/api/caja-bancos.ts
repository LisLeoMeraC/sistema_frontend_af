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
