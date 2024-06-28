import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    CabeceraComponent,
    AgregarEmpleadoComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CabeceraComponent,
    AgregarEmpleadoComponent,
    ListadoEmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
