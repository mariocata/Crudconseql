const controller = {};
const vuelo = require('../models/vuelo')


const ruta = require('../models/ruta')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT IATA_destino as destino,sum(asientos_necesarios) as pasajeros from rutas Inner Join vuelos on vuelos.idruta=rutas.idruta group by IATA_destino order by sum(asientos_necesarios) desc limit 3   ', (err, masvisitados) => {
                if(err){
                    res.json(err);
                }
               
                res.render('destinosmasvisitados', {
                    data: masvisitados
                });
        });
    });
};

module.exports = controller;