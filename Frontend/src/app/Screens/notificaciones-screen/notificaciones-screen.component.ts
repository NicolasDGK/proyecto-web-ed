import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones-screen',
  templateUrl: './notificaciones-screen.component.html',
  styleUrls: ['./notificaciones-screen.component.scss']
})
export class NotificacionesScreenComponent implements OnInit {

  notificaciones: any[] = [
    {
      id:1,
      tipo:"nuevo_curso",
      nombre:"Curso de Programación Orientada a Objetos Avanzado",
      descripcion:"orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imagen:"assets/LogoCompania.png"
    },
    {
      id:2,
      tipo:"nueva_vacante",
      nombre:"La empresa S.A.C ha publicado una nueva vacante",
      descripcion:"orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imagen:"assets/LogoCompania.png"
    },
    {
      id:3,
      tipo:"revision_cv",
      nombre:"La empresa S.A.C ha revisado tu CV.",
      descripcion:"orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imagen:"assets/LogoCompania.png"
    },
    {
      id:4,
      tipo:"nueva_vacante",
      nombre:"La empresa Gecko Corp ha publicado una nueva vacante",
      descripcion:"orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imagen:"assets/LogoCompania.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
