const controller = {};
const vuelo = require('../models/vuelo')


const avion = require('../models/avion')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('select ((tabla1.naf/(count(tabla2.r)))*100) as porcentaje from (SELECT count(*) as naf,vuelos.idvuelo as idv,aviones.idavion as ida,(aviones.cant_asi_eco + aviones.cant_asi_pri)as Total_Asientos , vuelos.asientos_necesarios as an,(date_format(vuelos.fecha,"%M %Y")) as mes from vuelos inner join aviones on vuelos.idavion=aviones.idavion group by  idv having Total_Asientos<vuelos.asientos_necesarios)as tabla1,(select idvuelo as r from vuelos) as tabla2 ', (err, porcentajetotal) => {
                if(err){
                    res.json(err);
                }
               
                res.render('porcentajetotalva', {
                    data: porcentajetotal
                });
        });
    });
};

module.exports = controller;