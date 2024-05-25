import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarHorasComponent } from './ingresar-horas/ingresar-horas.component';
import { ResumenHorasComponent } from './resumen-horas/resumen-horas.component';
import { ControlAdministradorComponent } from './control-administrador/control-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarHorasComponent,
    ResumenHorasComponent,
    ControlAdministradorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
