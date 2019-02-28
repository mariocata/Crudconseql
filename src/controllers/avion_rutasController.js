const controller = {};
const avion_ruta = require('../models/avion_ruta')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM avion_rutas', (err, avion_rutas) => {
                if(err){
                    res.json(err);
                }
               
                res.render('avion_rutas', {
                    data: avion_rutas
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { idavion,idruta } = data;


    avion_ruta.create({
        
        idavion,idruta 
        
    })
    .then(avion_rutas => res.redirect('/avion_rutas'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idavion,idruta }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM avion_rutas WHERE idavion = ? AND idruta = ?',[idavion,idruta], (err,rows) => {
            res.redirect('/avion_rutas');
        });
    })
};


controller.edit  = (req, res) => {
    const { idavion,idruta }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM avion_rutas WHERE idavion = ? AND idruta = ?',[idavion,idruta], (err, avion_ruta) =>{
            res.render('avion_rutas_edit', {
                data :avion_ruta[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idavion,idruta }= req.params;
    avion_ruta.update(
        { idavion:req.body.idavion,idruta:req.body.idruta },
        { where: { idavion: [idavion],idruta: [idruta] } }
      )
        .then(result =>
            res.redirect('/avion_rutas'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;