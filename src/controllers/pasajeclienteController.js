const controller = {};
const cliente = require('../models/cliente')


const compra = require('../models/compra')

const pasaje = require('../models/pasaje')

const asiento = require('../models/asiento')

const ruta = require('../models/ruta')

const vuelo = require('../models/vuelo')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT compras.idpersona as idc, compras.idpasaje as idp, compras.cantidad_de_equipaje as equi, clientes.nombre as nom, clientes.genero as gen, pasajes.idvuelo as vuel, asientos.tipo_de_asiento as asien, rutas.IATA_origen as ori, rutas.IATA_destino as dest FROM compras INNER JOIN clientes on compras.idpersona=clientes.idpersona INNER JOIN pasajes on compras.idpasaje=pasajes.idpasaje INNER JOIN asientos on compras.idasiento = asientos.idasiento INNER JOIN vuelos on pasajes.idvuelo = vuelos.idvuelo INNER JOIN rutas on vuelos.idruta=rutas.idruta ', (err, pasajecliente) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pasclien', {
                    data: pasajecliente
                });
        });
    });
};

module.exports = controller;