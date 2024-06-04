import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private trabajadoresService: TrabajadoresService, private http: HttpClient ) { 
    this.daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
  }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/obtener-horas')
      .subscribe(response => {
        console.log('Trabajadores:', response);
        this.trabajadores = response as any[];
      }, error => {
        console.error('Error al obtener trabajadores:', error);
      });
  }

  getDaysInMonth(year: number, month: number): number[] {
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }
}
