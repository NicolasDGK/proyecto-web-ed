import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsaScreenComponent } from './Screens/bolsa-screen/bolsa-screen.component';
import { InicioScreenComponent } from './Screens/inicio/inicio-screen/inicio-screen.component';
import { LoginScreenComponent } from './Screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './Screens/register-screen/register-screen.component'
import { CertificadosScreenComponent } from './Screens/certificados-screen/certificados-screen.component'
import { EmpleosScreenComponent } from './Screens/empleos-screen/empleos-screen.component';
import {CursosScreenComponent} from './Screens/cursos-screen/cursos-screen.component';
import { NotificacionesScreenComponent } from './Screens/notificaciones-screen/notificaciones-screen.component';
import { CursoNuevoScreenComponent } from './Screens/curso-nuevo-screen/curso-nuevo-screen.component';
import { CursoNuevoIndividualScreenComponent } from './Screens/curso-nuevo-individual-screen/curso-nuevo-individual-screen.component';
import {LoginempresascreenComponent} from './Screens/loginempresascreen/loginempresascreen.component';

const routes: Routes = [
  {path:'', component:InicioScreenComponent},
  {path:'login',component:LoginScreenComponent},
  {path:'loginempresa',component:LoginempresascreenComponent},
  {path:'register',component:RegisterScreenComponent},
  {path:'bolsa',component:BolsaScreenComponent},
  {path:'cursos',component:CursosScreenComponent},
  {path:'cursos/:id',component:CursoNuevoScreenComponent},
  {path:'cursoIndividual/:id',component:CursoNuevoIndividualScreenComponent},
  {path:'certificados',component:CertificadosScreenComponent},
  {path:'empleos',component:EmpleosScreenComponent},
  {path:'empleos/:id',component:EmpleosScreenComponent},
  {path:'notificaciones',component:NotificacionesScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
