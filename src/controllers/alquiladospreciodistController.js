const controller = {};
const vuelo = require('../models/avion')


const ruta = require('../models/proveedor')

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT aviones.idavion as ida, proveedores.nombre_proveedor as nombre, aviones.precio_dist_recorrida as precio, proveedores.tiempo_respuets as tiempo FROM aviones INNER JOIN proveedores on aviones.idproveedor=proveedores.idproveedor GROUP BY idavion ORDER BY precio_dist_recorrida desc ', (err, alquiladospreciodist) => {
                if(err){
                    res.json(err);
                }
               
                res.render('alquiladoprecio', {
                    data: alquiladospreciodist
                });
        });
    });
};

module.exports = controller;