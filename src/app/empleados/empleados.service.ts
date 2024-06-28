import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { 
    this._empleados = JSON.parse(localStorage.getItem("empleados")!) || [] 
  }

  private _empleados : IEmpleado[] = [];

  //Metodoque accede a la vista
  get empleados() : IEmpleado[]{
    return this._empleados;
  }

  //Metodo para agregar un empleado
  agregarEmpleado( empleado : IEmpleado ){
    this._empleados.push(empleado)

    localStorage.setItem("empleados", JSON.stringify(this._empleados))
  }

  // Método para eliminar un empleado
  eliminarEmpleado(index: number): void {
    this._empleados.splice(index, 1);
    localStorage.setItem("empleados", JSON.stringify(this._empleados));
  }
}
