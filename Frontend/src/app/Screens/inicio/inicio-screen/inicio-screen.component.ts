import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.scss']
})
export class InicioScreenComponent implements OnInit {

  cartas: any[] =[
    {
      url: "https://www.youtube.com/embed/AEiRa5xZaZw",
      titulo: "Curso Programación",
      texto: "Módulo 2: Clase 5"
    },
    {
      url: "https://www.youtube.com/embed/xnWtGNiG2lg",
      titulo: "Curso de diseño",
      texto: "Módulo 1: Clase 1"
    }]

  ofertas: any[] = [
    { 
      titulo: "Programador front-end en empresa",
      empresa: "Program S.A.C",
      ubicacion: "Santiago de Chile, Chile",
      tiempo: 12,
      imagen: ""
    },{ 
      titulo: "Diseñador UI/UX en empresa",
      empresa: "UXp S.A.S",
      ubicacion: "Bogotá, Colombia",
      tiempo: 28,
      imagen: ""
      }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
