import { DetalleFijacion } from "./detalleFijacion";

export interface Fijacion{
    id:number,
    descripcion: string,
    fechaInicio: string,
    fechaCorte:string,
    detalleFijacion: DetalleFijacion[]
}