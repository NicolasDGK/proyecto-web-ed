import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  HttpUploadOptions = {
    headers: new HttpHeaders (
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
        'Content-Type': 'application/json',
      }
    ),
  };
  
  GetUsuarios():Observable<any> {
    return this.http.get(`${environment.hostname}/Usuarios`);
  }
  
  PostUsuario(nombre:string, apellidos:string, correo:string, password:string, pais:string, ciudad:string, documento:string, telefono:string, tipoUsuario:number):Observable<any> {
    return this.http.post(`${environment.hostname}/AgregarUsuario`, JSON.stringify({"nombres":nombre, "apellidos":apellidos, "correo":correo, "password":password, "pais":pais, "ciudad":ciudad, "documento":documento, "telefono":telefono, "tipoUsuario":tipoUsuario}), this.HttpUploadOptions);
  }
}
