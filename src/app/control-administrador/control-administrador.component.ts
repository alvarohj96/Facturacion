import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-administrador',
  templateUrl: './control-administrador.component.html',
  styleUrls: ['./control-administrador.component.css']
})
export class ControlAdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  crearProyecto() {
    // Lógica para crear un nuevo proyecto
    console.log('Crear nuevo proyecto');
    // Aquí podrías abrir un modal, redirigir a otra página, etc.
  }

  crearUsuario() {
    // Lógica para crear un nuevo usuario
    console.log('Crear nuevo usuario');
    // Aquí podrías abrir un modal, redirigir a otra página, etc.
  }
}
