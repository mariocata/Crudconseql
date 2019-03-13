const controller = {};
const vuelo = require('../models/pista')


controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT IATA_ubicacion as IATA, distancia as dist,aereopuertos.Pais as Pais,aereopuertos.Ciudad as Ciudad FROM pistas inner join aereopuertos on aereopuertos.IATA=pistas.IATA_ubicacion', (err, pistasaeropuertos) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pistaaeropuerto', {
                    data: pistasaeropuertos
                });
        });
    });
};

module.exports = controller;