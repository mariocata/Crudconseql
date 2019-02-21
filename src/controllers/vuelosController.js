const controller = {};
const vuelo = require('../models/vuelo')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vuelos', (err, vuelos) => {
                if(err){
                    res.json(err);
                }
               
                res.render('vuelos', {
                    data: vuelos
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { idruta,idavion,fecha,idruta_desvio } = data;


    vuelo.create({
    
        idruta,
        idavion,
        fecha,
        idruta_desvio 
    })
    .then(vuelos => res.redirect('/vuelos'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idvuelo }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM vuelos WHERE idvuelo = ?',[idvuelo], (err,rows) => {
            res.redirect('/vuelos');
        });
    })
};


controller.edit  = (req, res) => {
    const { idvuelo }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM vuelos WHERE idvuelo = ?',[idvuelo], (err,vuelo) =>{
            res.render('vuelos_edit', {
                data :vuelo[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idvuelo }= req.params;
    vuelo.update(
        {  idruta : req.body.idruta, idavion :req.body.idavion ,fecha:req.body.fecha, idruta_desvio:req.body.idruta_desvio },
        { where: { idvuelo: [idvuelo] } }
      )
        .then(result =>
            res.redirect('/vuelos'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;