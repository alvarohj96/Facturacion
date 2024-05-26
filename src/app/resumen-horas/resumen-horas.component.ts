import { Component, OnInit } from '@angular/core';

import { TrabajadoresService, Trabajador, Proyecto } from '../trabajadores.service';

export interface Employee {
  id: number;
  name: string;
  hours: number[];
}

@Component({
  selector: 'app-resumen-horas',
  templateUrl: './resumen-horas.component.html',
  styleUrls: ['./resumen-horas.component.css']
})
export class ResumenHorasComponent implements OnInit {

  trabajadores: Trabajador[] = [];
  currentDate: Date = new Date();
  currentYear: number = this.currentDate.getFullYear();
  currentMonth: number = this.currentDate.getMonth(); // 0-11 (Enero es 0, Diciembre es 11)
  currentDay: number = this.currentDate.getDate();
  daysInMonth: number[] = [];

  constructor(private trabajadoresService: TrabajadoresService ) { 
    this.daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
  }

  ngOnInit(): void {
    console.log(this.currentDay);
    this.trabajadoresService.obtenerTrabajadores().subscribe(data => {
      this.trabajadores = data;
    });
  }

  getDaysInMonth(year: number, month: number): number[] {
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }
}
