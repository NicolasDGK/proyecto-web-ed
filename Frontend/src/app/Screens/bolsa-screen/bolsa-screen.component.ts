import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/services/bolsa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleo } from 'src/app/interfaces/bolsa';

@Component({
  selector: 'app-bolsa-screen',
  templateUrl: './bolsa-screen.component.html',
  styleUrls: ['./bolsa-screen.component.scss']
})
export class BolsaScreenComponent implements OnInit {

  ListaEmpleos = new Array<Empleo>();

  constructor(private http:BolsaService) { }

  ngOnInit(): void {
    this.http.GetEmpleos().subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.ListaEmpleos.push(datos.items[i]);
      }
    })
  }

  


}
