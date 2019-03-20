const controller = {};
const vuelo = require('../models/vuelo')


const avion = require('../models/avion')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT vuelos.idvuelo as idv,aviones.idavion as ida,(aviones.cant_asi_eco + aviones.cant_asi_pri) as Total_Asientos, vuelos.asientos_necesarios as an from vuelos inner join aviones on vuelos.idavion=aviones.idavion having Total_Asientos<vuelos.asientos_necesarios ', (err, sobreventa) => {
                if(err){
                    res.json(err);
                }
               
                res.render('vuelosafectados', {
                    data: sobreventa
                });
        });
    });
};

module.exports = controller;