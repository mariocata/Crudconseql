const controller = {};
const vuelo = require('../models/vuelo')


controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT asientos_necesarios as asientos, idvuelo as ivuelos FROM vuelos', (err, pasajerosabordados) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pasajeroabordado', {
                    data: pasajerosabordados
                });
        });
    });
};

module.exports = controller;