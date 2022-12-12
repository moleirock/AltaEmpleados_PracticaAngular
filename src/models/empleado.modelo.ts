export class Empleado{
    public static idS:number=1;
    public nombre:string;
    public apellido:string;
    public cargo:string;
    public salario:number;
    public id:number;
    constructor(nombre:string,apellido:string,cargo:string,salario:number){
        this.id=Empleado.idS++;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }
}