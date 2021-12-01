import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cursos, Cursos } from 'src/app/interfaces/cursos'; 
import { ListaModulos, Modulo } from 'src/app/interfaces/modulo';
import { CursosService } from 'src/app/services/cursos.service';
import { ModulosService } from 'src/app/services/modulos.service';


@Component({
  selector: 'app-curso-nuevo-individual-screen',
  templateUrl: './curso-nuevo-individual-screen.component.html',
  styleUrls: ['./curso-nuevo-individual-screen.component.scss']
})

export class CursoNuevoIndividualScreenComponent implements OnInit {

  idcurso:any;
  ListaModulos = new Array<Modulo>();
  CursosRelacionados = new Array<Cursos>();
  CursoActual:any;

  comentarios:any[] = [
    {
      id:1,
      autor:"Andrés Rodriguez",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor. Maecenas tristique lacus et blandit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      id:2,
      autor:"Juliana Rivera",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nunc quis orci cursus viverra vel eu tortor."
    },
    {
      id:3,
      autor:"Juan Camilo Gomez",
      contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]

  constructor(private route: ActivatedRoute, private httpCurso:CursosService, private httpModulo:ModulosService) {
    this.route.params.subscribe(datos => {
      this.idcurso = datos["id"];
    })
  }

  ngOnInit(): void {
    this.httpCurso.GetCursoId(this.idcurso).subscribe(datos => {
      this.CursoActual = datos[0];
    })
    
    //Modulos que pertenecen al curso
    this.httpModulo.GetModuloIdCurso(this.idcurso).subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.ListaModulos.push(datos.items[i]);
      }
    })
    
    this.httpCurso.GetCursos().subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.CursosRelacionados.push(datos.items[i]);
      }
    })
    
    for(let i=0; i<this.CursosRelacionados.length; i++) {
      if(this.CursosRelacionados[i].idcurso == this.idcurso) {
        this.CursosRelacionados.splice(i, 1);
      }
    }
  }

  //TEST
  valorRange():any {
    var valor = (<HTMLInputElement>document.getElementById("rangoModulo")).value;
    return valor;
  }
  
  
}




