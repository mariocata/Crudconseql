const controller = {};
const ruta = require('../models/ruta')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rutas', (err, rutas) => {
                if(err){
                    res.json(err);
                }
               
                res.render('rutas', {
                    data: rutas
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    
    let { IATA_origen,IATA_destino } = data;

    ruta.create({
        IATA_origen,
        IATA_destino
        
    })
    .then(rutas => res.redirect('/rutas'))
    .catch(err => console.log(err));
  
};

controller.delete = (req, res) => {
    const { idruta }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM rutas WHERE idruta = ? ',[idvuelo], (err,rows) => {
            res.redirect('/rutas');
        });
    })
};


controller.edit  = (req, res) => {
    const { idruta }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rutas WHERE idruta = ? ',[idruta], (err, ruta) =>{
            res.render('rutas_edit', {
                data :ruta[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idruta }= req.params;
    ruta.update(
        {  IATA_origen:req.body.IATA_origen,IATA_destino:req.body.IATA_destino },
        { where: { idruta: [idruta] } }
      )
        .then(result =>
            res.redirect('/rutas'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;