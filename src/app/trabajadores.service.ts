import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Trabajador {
  id: string;
  nombre: string;
  horas: number[];
}

export interface Proyecto {
  id: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  constructor() { }

  private trabajadores: Trabajador[] = [
    { id: '1', nombre: 'Juan Pérez', horas: Array(31).fill(0).map(() => Math.floor(Math.random() * 10)) },
    { id: '2', nombre: 'Laura García', horas: Array(31).fill(0).map(() => Math.floor(Math.random() * 10)) },
    { id: '3', nombre: 'Carlos Sánchez', horas: Array(31).fill(0).map(() => Math.floor(Math.random() * 10)) },
    { id: '4', nombre: 'Elena Torres', horas: Array(31).fill(0).map(() => Math.floor(Math.random() * 10)) }
  ];

  private proyectos: Proyecto[] = [
    { id: '10000001', descripcion: 'Proyecto 1' },
    { id: '10000002', descripcion: 'Proyecto 2' },
    { id: '10000003', descripcion: 'Proyecto 3' },
    { id: '10000004', descripcion: 'Proyecto 4' }
  ];

  obtenerTrabajadores(): Observable<Trabajador[]> {
//    return this.http.get('url-a-tu-api');
  // Simulamos una respuesta HTTP con el método 'of' de RxJS
    return of(this.trabajadores);
  }

  obtenerProyectos(): Observable<Proyecto[]> {
    return of(this.proyectos)
  }
}