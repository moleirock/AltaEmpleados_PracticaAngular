import { VisualizarService } from './services/visualizar.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaLiDirective } from './directiva-li.directive';
import { BorderGreenDirective } from './border-green.directive';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CaracEmpComponent } from './carac-emp/carac-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaLiDirective,
    BorderGreenDirective,
    ListaEmpleadosComponent,
    CaracEmpComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [VisualizarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
