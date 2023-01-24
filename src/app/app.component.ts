import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.modelo';
import { VisualizarService } from './services/visualizar.service';
import { EmpleadosService } from './services/empleados.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'AltaEmpleados';
  empleados: Array<Empleado> = EmpleadosService.Empleados;
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;

  visualizar: VisualizarService = new VisualizarService();
  constructor() {
  }

  agregarEmpleado(
    nombre: string,
    apellido: string,
    cargo: string,
    salario: number
  ) {
    if (!this.checkApellido(apellido)) {
      this.visualizar.printParameter(nombre);
      this.empleados.push(new Empleado(nombre, apellido, cargo, salario));
    }
  }

  checkApellido(apellido: string): boolean {
    for (const empleado of this.empleados) {
      if (empleado.apellido == apellido) {
        return true;
      }
    }
    return false;
  }

  existeApellidos(apellido: string) {
    for (const empleado of this.empleados) {
      if (empleado.apellido == apellido) {
        return true;
      }
    }
    return false;
  }
}
