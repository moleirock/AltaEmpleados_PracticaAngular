import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-carac-emp',
  templateUrl: './carac-emp.component.html',
  styleUrls: ['./carac-emp.component.css']
})
export class CaracEmpComponent implements OnInit {
  @Output() caracTemp = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  agregarCaracteristica(caracteristica: String){
    this.caracTemp.emit(caracteristica);
  }
}
