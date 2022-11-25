import { Component } from '@angular/core';
import { Empleado } from 'src/models/empleado.modelo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'AltaEmpleados';
  empleados:Array<Empleado>=[];
  salario:number=0;
  
  agregarEmpleado(nombre:string,apellido:string,cargo:string,salario:string){
    this.salario=Number(salario);
    this.empleados.push(new Empleado(nombre,apellido,cargo,this.salario));
  }

}
