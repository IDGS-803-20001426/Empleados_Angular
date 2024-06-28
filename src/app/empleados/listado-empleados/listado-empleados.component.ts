import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export class ListadoEmpleadosComponent {

  constructor( private EmpleadosService :  EmpleadosService ) {}

  get empleados() : IEmpleado[] {
    return this.EmpleadosService.empleados;
  }

  eliminarEmpleado(index: number): void {
    const confirmacion = window.confirm('¿Está seguro de que desea eliminar este empleado?');
    if (confirmacion) {
      this.EmpleadosService.eliminarEmpleado(index);
      //this.empleados = this.empleadosService.empleados; // Actualiza la lista localmente
    }
  }

}
