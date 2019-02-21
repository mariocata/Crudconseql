const controller = {};
const pasaje = require('../models/pasaje')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pasajes', (err, pasajes) => {
                if(err){
                    res.json(err);
                }
               
                res.render('pasajes', {
                    data: pasajes
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { idpasaje,idvuelo,modificacion } = data;


    pasaje.create({
        idpasaje,
        idvuelo,
        modificacion
    })
    .then(pasajes => res.redirect('/pasajes'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idpasaje,idvuelo }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM pasajes WHERE idpasaje = ? and idvuelo = ?',[idpasaje,idvuelo], (err,rows) => {
            res.redirect('/pasajes');
        });
    })
};


controller.edit  = (req, res) => {
    const { idpasaje,idvuelo }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pasajes WHERE idpasaje = ? AND idvuelo = ?',[idpasaje,idvuelo], (err, pasaje) =>{
            res.render('pasajes_edit', {
                data :pasaje[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idpasaje,idvuelo }= req.params;
    pasaje.update(
        { idpasaje:req.body.idpasaje,  idvuelo:req.body.idvuelo, modificacion:req.body.modificacion },
        { where: { idpasaje: [idpasaje],idvuelo: [idvuelo] } }
      )
        .then(result =>
            res.redirect('/pasajes'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;