const controller = {};
const vuelo = require('../models/vuelo')


const avion = require('../models/avion')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT vuelos.idvuelo as idv,vuelos.asientos_necesarios an, count(pasajes.idvuelo) as pav from vuelos inner join pasajes on pasajes.idvuelo=vuelos.idvuelo group by pasajes.idvuelo ', (err, pasajevsvuelo) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pasajesvsabordaje', {
                    data: pasajevsvuelo
                });
        });
    });
};

module.exports = controller;