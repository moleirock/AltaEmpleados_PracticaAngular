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
  nombre:string = "";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  
  agregarEmpleado(nombre:string,apellido:string,cargo:string,salario:number){
    if(!this.checkApellido(apellido)){
      this.empleados.push(new Empleado(nombre,apellido,cargo,salario));
    }
  }

  checkApellido(apellido:string):boolean{
    for (const empleado of this.empleados) {
      if(empleado.apellido==apellido){
        return true;
      }
    }
    return false;
  }

}
