import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisualizarService {

  printParameter(parameter: string) {
    alert(parameter);
  }
  constructor() { }
}
