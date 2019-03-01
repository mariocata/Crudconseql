const controller = {};
const pista = require('../models/pista')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pistas', (err, pistas) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pistas', {
                    data: pistas
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { IATA_ubicacion,distancia } = data;


    pista.create({
        IATA_ubicacion,distancia
        
    })
    .then(pistas => res.redirect('/pistas'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idpista }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM pistas WHERE idpista = ?',[idpista], (err,rows) => {
            res.redirect('/pistas');
        });
    })
};


controller.edit  = (req, res) => {
    const { idpista }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pistas WHERE idpista = ?',[idpista], (err, pista) =>{
            res.render('pistas_edit', {
                data :pista[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idpista }= req.params;
    pista.update(
        { IATA_ubicacion:req.body.IATA_ubicacion,distancia:req.body.distancia },
        { where: { idpista: [idpista] } }
      )
        .then(result =>
            res.redirect('/pistas'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;