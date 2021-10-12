export class EmpleadoModel{
    idUnico: string;
    nombre: string;
    apellido: string;
    edad: number;
    estado: string;

    constructor(idUnico: string,nombre: string,apellido: string,edad: number, estado: string){
            this.idUnico = idUnico;
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.estado = estado;
    }
}