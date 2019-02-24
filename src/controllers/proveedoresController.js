const controller = {};
const proveedor = require('../models/proveedor')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores', (err, proveedores) => {
                if(err){
                    res.json(err);
                }
               
                res.render('proveedores', {
                    data: proveedores
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { nombre_proveedor,tiempo_respuets } = data;


    proveedor.create({
        nombre_proveedor,tiempo_respuets
    })
    .then(proveedores => res.redirect('/proveedores'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idproveedor }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM proveedores WHERE idproveedor = ?',[idproveedor], (err,rows) => {
            res.redirect('/proveedores');
        });
    })
};


controller.edit  = (req, res) => {
    const { idproveedor }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores WHERE idproveedor = ?',[idproveedor], (err, proveedor) =>{
            res.render('proveedores_edit', {
                data :proveedor[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idproveedor }= req.params;
    proveedor.update(
        { nombre_proveedor:req.body.nombre_proveedor, tiempo_respuets:req.body.tiempo_respuets },
        { where: { idproveedor: [idproveedor] } }
      )
        .then(result =>
            res.redirect('/proveedores'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;