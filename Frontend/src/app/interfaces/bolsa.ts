export interface Empleo{
    idEmpleo:number;
    titulo:string;
    empresa:string;
    pais:string;
    ciudad:string;
    imagen: string;
    fecha:Date;
    descripcion:string;
    telefono: string;
    correo: string;
    salario: string;
    jornada: string;
    verificacion:boolean;
  }

  /* export let empleos: Array<Empleo>=[{
      "idEmpleo":1,
      "titulo": "Programador front-end en empresa",
      "empresa": "Program S.A.C",
      "pais": "Chile",
      "ciudad": "Santiago de Chile",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "telefono": "+1 6817243",
      "correo": "Programsac@gmail.com",
      "salario": "",
      "jornada": "Full time",
      "verificacion":true
    },{
      "idEmpleo":2,
      "titulo": "Diseñador UI en empresa",
      "empresa": "UXp S.A.S",
      "pais": "Colombia",
      "ciudad": "Bogotá",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "telefono": "+1 6817243",
      "correo": "Programsac@gmail.com",
      "salario": "",
      "jornada": "Full time",
      "verificacion":false
    },{
      "idEmpleo":3,
      "titulo": "Product Designer",
      "empresa": "Gecko Corp.",
      "pais": "Chile",
      "ciudad": "Santiago de Chile",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "telefono": "+1 6817243",
      "correo": "Programsac@gmail.com",
      "salario": "",
      "jornada": "Full time",
      "verificacion":true
    },{
      "idEmpleo":4,
      "titulo": "Vacante en ventas",
      "empresa": "Sunny Company",
      "pais": "Colombia",
      "ciudad": "Bogotá",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "telefono": "+1 6817243",
      "correo": "Programsac@gmail.com",
      "salario": "",
      "jornada": "Full time",
      "verificacion":false
    },{
      "idEmpleo":5,
      "titulo": "Diseñador UX en empresa",
      "empresa": "UXp S.A.S",
      "pais": "Colombia",
      "ciudad": "Bogotá",
      "imagen": "assets/LogoCompania.png",
      "fecha": new Date(),
      "descripcion": "Lorem ipsum dolor sit amet, consectetuer, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "telefono": "+1 6817243",
      "correo": "Programsac@gmail.com",
      "salario": "",
      "jornada": "Full time",
      "verificacion":false
  }] */