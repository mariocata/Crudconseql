const controller = {};
const precio = require('../models/precio')
const pasaje = require('../models/pasaje')
const compra = require('../models/compra')
const asiento = require('../models/asiento')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT (sum(precios.precio) + sum(pasajes.modificacion)) as venta,(date_format(vuelos.fecha,"%M %Y")) as mes from vuelos inner join pasajes on pasajes.idvuelo=vuelos.idvuelo inner join compras on compras.idpasaje=pasajes.idpasaje  inner join precios on compras.idasiento=precios.idasiento AND pasajes.idvuelo=precios.idvuelo  group by mes order by venta desc', (err, mesganancia) => {
                if(err){
                    res.json(err);
                }
               
                res.render('mesganancia', {
                    data: mesganancia
                });
        });
    });
};

module.exports = controller;