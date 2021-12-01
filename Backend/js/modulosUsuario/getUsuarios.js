"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pool = require('../conexionBD');
var GetUsuarios = function (req, res) {
    var ListaUsuarioss = new Array();
    pool.query("SELECT * FROM \"Usuarios\"", function (err, respuesta) {
        if (err) {
            console.log(err);
            return;
        }
        for (var _i = 0, _a = respuesta.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            ListaUsuarioss.push(row);
        }
        console.log(ListaUsuarioss);
        res.send(JSON.stringify({ "satus": "ok", "items": ListaUsuarioss }));
    });
};
module.exports = {
    GetUsuarios: GetUsuarios
};
