import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Cursos } from 'src/app/interfaces/cursos';

@Component({
  selector: 'app-cursos-screen',
  templateUrl: './cursos-screen.component.html',
  styleUrls: ['./cursos-screen.component.scss']
})
export class CursosScreenComponent {
  
  ListaCursos = new Array<Cursos>();
  
  constructor(private http:CursosService) { }

  ngOnInit(): void {
    this.http.GetCursos().subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.ListaCursos.push(datos.items[i]);
      }
    })
  }

}
