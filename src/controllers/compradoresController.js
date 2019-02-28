const controller = {};
const comprador = require('../models/comprador')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compradores', (err, compradores) => {
                if(err){
                    res.json(err);
                }
               
                res.render('compradores', {
                    data: compradores
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { idcomprador,telefono,correo_electronico } = data;


    comprador.create({
        
        idcomprador,telefono,correo_electronico
        
    })
    .then(compradores => res.redirect('/compradores'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idcomprador }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM compradores WHERE idcomprador = ?',[idcomprador], (err,rows) => {
            res.redirect('/compradores');
        });
    })
};


controller.edit  = (req, res) => {
    const { idcomprador }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compradores WHERE idcomprador = ?',[idcomprador], (err, comprador) =>{
            res.render('compradores_edit', {
                data :comprador[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idcomprador }= req.params;
    comprador.update(
        { idcomprador:req.body.idcomprador,telefono:req.body.telefono,correo_electronico:req.body.correo_electronico },
        { where: { idcomprador: [idcomprador] } }
      )
        .then(result =>
            res.redirect('/compradores'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;