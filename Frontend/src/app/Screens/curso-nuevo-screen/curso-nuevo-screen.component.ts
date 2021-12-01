import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Cursos } from 'src/app/interfaces/cursos';
import { Modulo, ListaModulos } from 'src/app/interfaces/modulo';
import { ModulosService } from 'src/app/services/modulos.service';


@Component({
  selector: 'app-curso-nuevo-screen',
  templateUrl: './curso-nuevo-screen.component.html',
  styleUrls: ['./curso-nuevo-screen.component.scss']
})
export class CursoNuevoScreenComponent implements OnInit {

  ListaModulos = new Array<Modulo>();
  id: number = 0;

  constructor(private route: ActivatedRoute, private httpCurso:CursosService, private httpModulo:ModulosService) { 
    this.route.params.subscribe(datos => {
      this.id = datos["id"];
    })
  }

  
  ngOnInit() {
    this.httpModulo.GetModuloIdCurso(this.id).subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.ListaModulos.push(datos.items[i]);
      }
    })
  }

}
