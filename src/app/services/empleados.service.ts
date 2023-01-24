import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.modelo';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public static Empleados:Empleado[]=[];
  constructor() { }
}
