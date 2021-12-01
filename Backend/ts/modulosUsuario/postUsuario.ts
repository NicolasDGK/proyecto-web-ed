import { Usuario } from "../interfaces/Usuarios";

const pool = require('../conexionBD');

const PostUsuario = (req:any, res:any) => {
    pool.query(`INSERT INTO "Usuarios" (nombres, apellidos, correo, password, pais, ciudad, documento, telefono, "tipoUsuario") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
                [req.body.nombres,
                req.body.apellidos,
                req.body.correo,
                req.body.password,
                req.body.pais,
                req.body.ciudad,
                req.body.documento,
                req.body.telefono,
                req.body.tipoUsuario], (err:any, respuesta:any) => {
                
                if(err) {
                    console.log(err);
                    return;
                }            
                
                console.log(respuesta.rows[0].id);
                res.send(JSON.stringify({"satus":"ok", "item":respuesta.rows[0].id}));
    })
}

module.exports = {
    PostUsuario
}