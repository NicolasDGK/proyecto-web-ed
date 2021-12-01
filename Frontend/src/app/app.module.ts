import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginScreenComponent } from './Screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './Screens/register-screen/register-screen.component';
import { InicioScreenComponent } from './Screens/inicio/inicio-screen/inicio-screen.component';

import { BolsaScreenComponent } from './Screens/bolsa-screen/bolsa-screen.component';
import { CertificadosScreenComponent } from './Screens/certificados-screen/certificados-screen.component';
import { EmpleosScreenComponent } from './Screens/empleos-screen/empleos-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosScreenComponent } from './Screens/cursos-screen/cursos-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificacionesScreenComponent } from './Screens/notificaciones-screen/notificaciones-screen.component';
import { CursoNuevoScreenComponent } from './Screens/curso-nuevo-screen/curso-nuevo-screen.component';
import { CursoNuevoIndividualScreenComponent } from './Screens/curso-nuevo-individual-screen/curso-nuevo-individual-screen.component';

import { HttpClientModule } from '@angular/common/http';
import { ModuloVideoComponent } from './components/modulo-video/modulo-video.component';
import { LoginempresascreenComponent } from './Screens/loginempresascreen/loginempresascreen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    InicioScreenComponent,
    BolsaScreenComponent,
    CertificadosScreenComponent,
    EmpleosScreenComponent,
    CursosScreenComponent,
    NotificacionesScreenComponent,
    CursoNuevoScreenComponent,
    CursoNuevoIndividualScreenComponent,
    ModuloVideoComponent,
    LoginempresascreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
