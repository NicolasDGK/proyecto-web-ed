export interface Cursos {
  idcurso: number,
  curso:string,
  total: number,
  titulo: string,
  url: string
}

export let cursos: Array<Cursos>=[{
  idcurso:1,
  curso:"Programación",
  total:3,
  titulo: "Curso de programación en Js",
  url:"https://www.youtube.com/embed/rEsSxd0L4GI",
},{
  idcurso: 2,
  curso:"Diseño",
  total: 3,
  titulo: "Curso de Diseño",
  url: "https://www.youtube.com/embed/rEsSxd0L4GI"
},
{
  idcurso: 3,
  curso:"Programación",
  total: 3,
  titulo: "Curso de Desarrollo en Videojuegos",
  url: "https://www.youtube.com/embed/rEsSxd0L4GI"
},
{
  idcurso: 4,
  curso:"Diseño",
  total: 3,
  titulo: "Curso de Diseño de Interfaz",
  url: "https://www.youtube.com/embed/rEsSxd0L4GI"
},
{
  idcurso: 5,
  curso:"Diseño",
  total: 3,
  titulo: "Curso de Video Digital",
  url: "https://www.youtube.com/embed/rEsSxd0L4GI"
},
{
  idcurso: 6,
  curso:"Humanidades",
  total: 3,
  titulo: "Curso de Filosofia",
  url: "https://www.youtube.com/embed/rEsSxd0L4GI"
},
];