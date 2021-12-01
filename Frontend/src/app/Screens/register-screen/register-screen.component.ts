import { Component, OnInit } from '@angular/core';
import { Country, State }  from 'country-state-city';
import { ICountry } from 'country-state-city/dist/lib/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interfaces/usuario';

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

  constructor(public FormB:FormBuilder, private http:LoginService) {
    this.paises = [];
    this.CodigoPais.sort();
    for (let codigo of this.CodigoPais){
      this.paises.push(Country.getCountryByCode(codigo)!);
    }

    this.formulario = this.FormB.group({
        nombres: ["", [Validators.required, Validators.pattern("[^0-9]+")]],
        apellidos: ["",[Validators.required, Validators.pattern("[^0-9]+")]],
        email: ["",[Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
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

  
  onSubmit():any {
    const Usuario:Usuario = {
      id: 1,
      nombres: this.formulario.get("nombres")?.value,
      apellidos: this.formulario.get("apellidos")?.value,
      correo: this.formulario.get("email")?.value,
      password: this.formulario.get("password")?.value,
      pais: this.formulario.get("paises")?.value,
      ciudad: this.formulario.get("ciudades")?.value,
      documento: this.formulario.get("documento")?.value,
      telefono: this.formulario.get("telefono")?.value,
      tipoUsuario: 1,
    }
    
    console.log(Usuario);
    this.http.PostUsuario(Usuario.nombres, Usuario.apellidos, Usuario.correo, Usuario.password, Usuario.pais, Usuario.ciudad, Usuario.documento, Usuario.telefono, Usuario.tipoUsuario).subscribe();
  }
}
