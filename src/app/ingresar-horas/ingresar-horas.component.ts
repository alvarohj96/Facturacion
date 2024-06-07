import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { TrabajadoresService, Trabajador, Proyecto } from '../trabajadores.service';
import { MAX_HORAS, MIN_HORAS } from '../constantes';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-ingresar-horas',
  templateUrl: './ingresar-horas.component.html',
  styleUrls: ['./ingresar-horas.component.css']
})
export class IngresarHorasComponent {

  trabajadores: Trabajador[] = [];
  // Variable creada para que cuando se escriba una parte del nombre, sea maás fácil encontrar el trabajador
  filteredTrabajadores: Trabajador[] = [];

  proyectos: Proyecto[] = [];
  filteredProyectos: Proyecto[] = [];

  selectedTrabajador: string = '';
  selectedProyecto: string = '';
  horasTrabajadas: number = 0;
  selectedFecha: Date = new Date();

  constructor(private trabajadoresService: TrabajadoresService, private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.get('http://127.0.0.1:5000/obtener-horas', { headers })
      .subscribe(response => {
        console.log('Trabajadores:', response);
        this.trabajadores = response as any[];
      }, error => {
        console.error('Error al obtener trabajadores:', error);
      });
    this.trabajadoresService.obtenerProyectos().subscribe(data => {
      this.proyectos = data;
      this.filteredProyectos = this.proyectos;
    });
  }

  onInputChangeTrabajadores(event: any) {
    const filterValue = event.target.value.toLowerCase();
    this.filteredTrabajadores = this.trabajadores.filter(trabajador => 
      trabajador.nombre.toLowerCase().includes(filterValue)
    );
  }

  onInputChangeProyectos(event: any) {
    const filterValue = event.target.value.toLowerCase();
    this.filteredProyectos = this.proyectos.filter(proyecto => 
      proyecto.id.toLowerCase().includes(filterValue)
    );
  }

  guardarHoras() {

      console.log("El número está dentro del rango permitido.");
      const payload = { 
        selectedTrabajador: this.selectedTrabajador,
        selectedProyecto: this.selectedProyecto,
        selectedFecha: this.selectedFecha,
        horasTrabajadas: this.horasTrabajadas
      };
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post('http://127.0.0.1:5000/log', payload, {  headers, observe: 'response' }).subscribe(response => { 
        if (response.status === 200) {
          this.dialog.open(SuccessDialogComponent, {
            data: { success: true }
          });
        }
      }, error => {
        this.dialog.open(SuccessDialogComponent, {
          data: { success: false }
        });
      });
    }
}
