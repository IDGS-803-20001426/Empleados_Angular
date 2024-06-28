import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {

  empleadoNuevo : IEmpleado = {
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento: new Date,
    sexo: ""
  }

  constructor( private EmpleadosService : EmpleadosService ) { }

  agregarEmpleado(){
    this.EmpleadosService.agregarEmpleado(this.empleadoNuevo)

    this.empleadoNuevo = {
      nombre: "",
      correo: "",
      telefono: "",
      fechaNacimiento: new Date,
      sexo: ""
    }
  }

}
