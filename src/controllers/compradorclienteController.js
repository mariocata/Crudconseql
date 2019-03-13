const controller = {};
const vuelo = require('../models/cliente')


const ruta = require('../models/comprador')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT clientes.idpersona as idc, clientes.nombre as nom, clientes.nacionalidad as nac, clientes.genero as gen, compradores.telefono as tel, compradores.correo_electronico as correo FROM clientes INNER JOIN compradores on clientes.idpersona=compradores.idcomprador ', (err, compradorcliente) => {
                if(err){
                    res.json(err);
                }
               
                res.render('compclien', {
                    data: compradorcliente
                });
        });
    });
};

module.exports = controller;