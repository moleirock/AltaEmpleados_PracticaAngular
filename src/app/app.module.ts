import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaLiDirective } from './directiva-li.directive';
import { BorderGreenDirective } from './border-green.directive';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CracEmpComponent } from './crac-emp/crac-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaLiDirective,
    BorderGreenDirective,
    ListaEmpleadosComponent,
    CracEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
