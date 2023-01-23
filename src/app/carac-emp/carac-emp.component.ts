import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { VisualizarService } from '../services/visualizar.service';
@Component({
  selector: 'app-carac-emp',
  templateUrl: './carac-emp.component.html',
  styleUrls: ['./carac-emp.component.css']
})
export class CaracEmpComponent implements OnInit {
  visualizarService:VisualizarService = new VisualizarService();
  @Output() caracTemp = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  agregarCaracteristica(caracteristica: string){
    this.visualizarService.printParameter(caracteristica);
    this.caracTemp.emit(caracteristica);
  }
}
