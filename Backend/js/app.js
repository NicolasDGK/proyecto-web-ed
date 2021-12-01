"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
/* Empleos */
var EmpleosLista = require('./modulosEmpleos/getEmpleos');
var EmpleoUnico = require('./modulosEmpleos/getEmpleoId');
var InsertarEmpleo = require('./modulosEmpleos/postEmpleo');
/* Cursos */
var CursosLista = require('./modulosCurso/getCursos');
var CursoId = require('./modulosCurso/getCursoId');
/* Modulos */
var ModulosIdLista = require('./modulosModulo/getModuloIdCurso');
/* Usuarios */
var UsuariosLista = require('./modulosUsuario/getUsuarios');
var InsertarUsuario = require('./modulosUsuario/postUsuario');
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.use(cors());
app.use(bodyParser.json());
/* Query para bolsa */
app.get('/Empleos/:id', EmpleoUnico.GetEmpleoId);
app.get('/Empleos', EmpleosLista.GetEmpleos);
app.post('/AgregarEmpleo', bodyParser.json(), InsertarEmpleo.PostEmpleo);
/* Query para cursos */
app.get('/Cursos', CursosLista.GetCursos);
app.get('/Cursos/:id', CursoId.GetCursoId);
/* Query para modulos */
app.get('/Modulos/:id', ModulosIdLista.GetModuloIdCurso);
/* Query para usuarios */
app.get('/Usuarios', UsuariosLista.GetUsuarios);
app.post('/AgregarUsuario', bodyParser.json(), InsertarUsuario.PostUsuario);
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
