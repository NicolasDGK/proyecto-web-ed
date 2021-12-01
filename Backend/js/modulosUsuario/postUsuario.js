"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pool = require('../conexionBD');
var PostUsuario = function (req, res) {
    pool.query("INSERT INTO \"Usuarios\" (nombres, apellidos, correo, password, pais, ciudad, documento, telefono, \"tipoUsuario\") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [req.body.nombres,
        req.body.apellidos,
        req.body.correo,
        req.body.password,
        req.body.pais,
        req.body.ciudad,
        req.body.documento,
        req.body.telefono,
        req.body.tipoUsuario], function (err, respuesta) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(respuesta.rows[0].id);
        res.send(JSON.stringify({ "satus": "ok", "item": respuesta.rows[0].id }));
    });
};
module.exports = {
    PostUsuario: PostUsuario
};
