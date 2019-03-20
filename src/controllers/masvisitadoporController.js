const controller = {};
const vuelo = require('../models/vuelo')


const ruta = require('../models/ruta')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('select tabla1.destino as destino, ((tabla1.pasajeros/sum(tabla2.total))*100) as porcentaje from (SELECT IATA_destino as destino,sum(asientos_necesarios) as pasajeros from rutas Inner Join vuelos on vuelos.idruta=rutas.idruta group by IATA_destino order by sum(asientos_necesarios) desc)as tabla1,(select sum(asientos_necesarios) as total from vuelos)as tabla2 group by tabla1.destino   ', (err, masvisitadospor) => {
                if(err){
                    res.json(err);
                }
               
                res.render('masvisitadospor', {
                    data: masvisitadospor
                });
        });
    });
};

module.exports = controller;