const controller = {};
const datab = require('../database/database');



const avion = require('../models/avion')

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT COUNT(idavion) as n  FROM aviones where idproveedor is not null', (err, numero) => {
                if(err){
                    res.json(err);
                }
               
                res.render('avionesalquilados', {
                    data: numero
                });
        });


    });

        
   
};



module.exports = controller;