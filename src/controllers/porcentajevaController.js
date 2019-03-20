const controller = {};
const vuelo = require('../models/vuelo')


const avion = require('../models/avion')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT COUNT( (aviones.cant_asi_eco + aviones.cant_asi_pri) as Total_Asientos, vuelos.asientos_necesarios as an from vuelos inner join aviones on vuelos.idavion=aviones.idavion having Total_Asientos<vuelos.asientos_necesarios)as n from vuelos ', (err, porsobreventa) => {
                if(err){
                    res.json(err);
                }
               
                res.render('vuelosafectados', {
                    data: porsobreventa
                });
        });
    });
};

module.exports = controller;