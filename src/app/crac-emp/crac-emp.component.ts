import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-crac-emp',
  templateUrl: './crac-emp.component.html',
  styleUrls: ['./crac-emp.component.css']
})
export class CracEmpComponent implements OnInit {
  @Output() caracTemp = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  agregarCaracteristica(caracteristica: String){
    this.caracTemp.emit(caracteristica);
  }
}
