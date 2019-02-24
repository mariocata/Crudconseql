const controller = {};
const mantenimiento = require('../models/mantenimiento')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM mantenimientos', (err, mantenimientos) => {
                if(err){
                    res.json(err);
                }
               
                res.render('mantenimientos', {
                    data: mantenimientos
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { descripcion,duracion } = data;


    mantenimiento.create({
        descripcion,duracion
    })
    .then(mantenimientos => res.redirect('/mantenimientos'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idmantenimiento }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM mantenimientos WHERE idmantenimiento = ?',[idmantenimiento], (err,rows) => {
            res.redirect('/mantenimientos');
        });
    })
};


controller.edit  = (req, res) => {
    const { idmantenimiento }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM mantenimientos WHERE idmantenimiento = ?',[idmantenimiento], (err, mantenimiento) =>{
            res.render('proveedores_edit', {
                data :mantenimiento[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idmantenimiento }= req.params;
    proveedor.update(
        { descripcion:req.body.descripcion,duracion:req.body.duracion },
        { where: { idmantenimiento: [idmantenimiento] } }
      )
        .then(result =>
            res.redirect('/mantenimientos'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;