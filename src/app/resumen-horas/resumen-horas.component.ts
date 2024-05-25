import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-horas',
  templateUrl: './resumen-horas.component.html',
  styleUrls: ['./resumen-horas.component.css']
})
export class ResumenHorasComponent {
  horasPorDia = [
    { dia: 'Lunes', horas: 8 },
    { dia: 'Martes', horas: 7 },
    { dia: 'Miércoles', horas: 9 },
    // Aquí podrías cargar los datos desde una base de datos o servicio
  ];
}
