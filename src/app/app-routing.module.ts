import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarHorasComponent } from './ingresar-horas/ingresar-horas.component';
import { ResumenHorasComponent } from './resumen-horas/resumen-horas.component';


const routes: Routes = [
  { path: '', redirectTo: '/ingresar-horas', pathMatch: 'full' },
  { path: 'ingresar-horas', component: IngresarHorasComponent },
  { path: 'resumen-horas', component: ResumenHorasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
