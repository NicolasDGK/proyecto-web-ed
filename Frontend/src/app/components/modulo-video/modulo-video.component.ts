import { Component, OnInit, Input } from '@angular/core';
import { Modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-modulo-video',
  templateUrl: './modulo-video.component.html',
  styleUrls: ['./modulo-video.component.scss']
})
export class ModuloVideoComponent implements OnInit {

  @Input()
  Modulo:Modulo;

  constructor() {
    this.Modulo = {
      idModulo: 0,
      url: '',
      titulo: '',
      texto: '',
      descripcion: '',
      idCurso: 0
    }
  }

  ngOnInit(): void {
  }

}
