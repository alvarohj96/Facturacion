import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarHorasComponent } from './ingresar-horas/ingresar-horas.component';
import { ResumenHorasComponent } from './resumen-horas/resumen-horas.component';
import { ControlAdministradorComponent } from './control-administrador/control-administrador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarHorasComponent,
    ResumenHorasComponent,
    ControlAdministradorComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  entryComponents: [SuccessDialogComponent], // Necesario para diálogos en Angular
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
