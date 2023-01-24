import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.modelo';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  @Input() empleado: Empleado;
  arrayCaracteristicas: String[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  agregarCaracteristica(caracteristica: String){
    this.arrayCaracteristicas.push(caracteristica);
  }

}
