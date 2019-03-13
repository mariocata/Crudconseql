const controller = {};
const vuelo = require('../models/vuelo')


const precio = require('../models/precio')
const pasaje = require('../models/pasaje')
const compra = require('../models/compra')
const asiento = require('../models/asiento')
controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT pasajes.idvuelo as vuelo,(sum(precios.precio) + sum(pasajes.modificacion)) as ingreso from pasajes inner join compras on compras.idpasaje=pasajes.idpasaje inner join precios on compras.idasiento=precios.idasiento AND pasajes.idvuelo=precios.idvuelo  group by pasajes.idvuelo ', (err, ingresos) => {
                if(err){
                    res.json(err);
                }
               
                res.render('ingresoporvuelo', {
                    data: ingresos
                });
        });
    });
};

module.exports = controller;