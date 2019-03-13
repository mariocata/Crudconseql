const controller = {};
const vuelo = require('../models/vuelo')


const ruta = require('../models/ruta')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT vuelos.idvuelo as idv,vuelos.idruta as idr, vuelos.idavion as ida, rutas.IATA_origen as IATAO, rutas.IATA_destino as IATAD FROM vuelos INNER JOIN rutas on vuelos.idruta=rutas.idruta ', (err, ubicacionaviones) => {
                if(err){
                    res.json(err);
                }
               
                res.render('bitacoradevuelo', {
                    data: ubicacionaviones
                });
        });
    });
};

module.exports = controller;