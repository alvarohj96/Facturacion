import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componenteVisible: string | null = null;

  mostrarComponente(componente: string) {
    this.componenteVisible = this.componenteVisible === componente ? null : componente;
  }
}

