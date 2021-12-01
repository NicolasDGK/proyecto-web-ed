import { Component, OnInit } from '@angular/core';
import { BolsaService } from 'src/app/services/bolsa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleo } from 'src/app/interfaces/bolsa';

@Component({
  selector: 'app-empleos-screen',
  templateUrl: './empleos-screen.component.html',
  styleUrls: ['./empleos-screen.component.scss']
})
export class EmpleosScreenComponent implements OnInit {
 
  id:number=0;
  empleosRelacionados:any
  ListaEmpleos = new Array<Empleo>();
  Empleo:any;
   
  constructor(private ruta:ActivatedRoute, private router: Router, private http:BolsaService) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"]
    })
  }

  ngOnInit(): void {
    this.http.GetEmpleos().subscribe(datos => {
      for(let i=0; i<datos.items.length; i++) {
        this.ListaEmpleos.push(datos.items[i]);
      }
      
      this.Empleo = (this.ListaEmpleos.find(objeto=>objeto.idEmpleo == this.id));
      console.log(this.ListaEmpleos);

      //this.Empleo = (this.ListaEmpleos.reloadEmpleos(this.Empleo!));
      for(let i=0; i<this.ListaEmpleos.length; i++) {
        if(this.ListaEmpleos[i].idEmpleo == this.id) {
          this.ListaEmpleos.splice(i, 1);
        }
      }
      console.log(this.ListaEmpleos);
    })
  
    /* this.empleo = empleos.find(objeto=>objeto.idEmpleo==this.id);
    this.empleosRelacionados = this.bolsa.reloadEmpleos(this.empleo!);
    this.empleosRelacionados.splice(2,this.empleosRelacionados.length); */
  }

  /*
  getEmpleos(){
    return empleos;
  }

  setEmpleos(empleos:Array<empleo>){
    this.empleos = empleos;
  }

  sortEmpleos(empleos:Array<empleo>){
    return this.empleos.sort((x,y) => +new Date(y.fecha) - +new Date(x.fecha));
  }

  reloadEmpleos(empleo:empleo):Array<empleo>{
    let aux = Object.create(empleos);
    let index = aux.indexOf(empleo);
    aux.splice(index,1);
    return aux;
  */
}
