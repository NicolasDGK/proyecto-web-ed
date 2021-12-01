import { Component, OnInit } from '@angular/core';
import { Country, State }  from 'country-state-city';
import { ICountry } from 'country-state-city/dist/lib/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {

  public paises:ICountry[];

  ciudades:any;
  CodigoPais: string[] = ["CL","AR","BR","PA","VE","CR","CO","PE","EC","CU","UY","BO"]

  formulario:FormGroup;
  estado:boolean = false;

  constructor(public FormB:FormBuilder) {
    this.paises = [];
    this.CodigoPais.sort();
    for (let codigo of this.CodigoPais){
      this.paises.push(Country.getCountryByCode(codigo)!);
    }

    this.formulario = this.FormB.group({
        nombres: ["", [Validators.required, Validators.pattern("[^0-9]+")]],
        apellidos: ["",[Validators.required, Validators.pattern("[^0-9]+")]],
        email: ["",[Validators.required, Validators.email]],
        contraseña: ["", [Validators.required, Validators.minLength(8)]],
        paises: ["",[Validators.required]],
        ciudades: ["",[Validators.required]],
        documento: ["",[Validators.required]],
        telefono: ["",[Validators.required]],
        cv: [""]
    })
  }

  ngOnInit(): void {
  }

  select(event:any){
    this.ciudades = State.getStatesOfCountry(event.value)
  }

  validacion(){
    let datos:any=[{
      "nombres": this.formulario.get("nombres")?.value,
      "apellidos": this.formulario.get("apellidos")?.value,
      "email": this.formulario.get("email")?.value,
      "contraseña": this.formulario.get("contraseña")?.value,
      "pais": this.formulario.get("paises")?.value,
      "ciudad": this.formulario.get("ciudades")?.value,
      "documento": this.formulario.get("documento")?.value,
      "telefono": this.formulario.get("telefono")?.value,
      "cv": this.formulario.get("cv")?.value
    }];
  }
}
