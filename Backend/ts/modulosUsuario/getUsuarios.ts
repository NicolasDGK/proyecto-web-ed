import { Usuario } from "../interfaces/Usuarios";

const pool = require('../conexionBD');

const GetUsuarios = (req:any, res:any) => {
    let ListaUsuarioss = new Array<Usuario>();

    pool.query(`SELECT * FROM "Usuarios"`, (err:any, respuesta:any) => {
        if(err) {
            console.log(err);
            return;
        }
        
        for(let row of respuesta.rows) {
            ListaUsuarioss.push(row);
        }
        
        console.log(ListaUsuarioss);

        res.send(JSON.stringify({"satus":"ok", "items":ListaUsuarioss}));
    })
}

module.exports = {
    GetUsuarios
}