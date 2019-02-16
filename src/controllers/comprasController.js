const controller = {};
const compra = require('../models/compra')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compras', (err, compras) => {
                if(err){
                    res.json(err);
                }
               
                res.render('compras', {
                    data: compras
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { idpasaje, idpersona, cantidad_de_equipaje,idasiento } = data;


    compra.create({
        idpasaje,
        idpersona, 
        cantidad_de_equipaje,
        idasiento
    })
    .then(compras => res.redirect('/compras'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idcompra }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM compras WHERE idcompra = ?',[idcompra], (err,rows) => {
            res.redirect('/compras');
        });
    })
};


controller.edit  = (req, res) => {
    const { idcompra }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compras WHERE idcompra = ?',[idcompra], (err, compra) =>{
            res.render('compras_edit', {
                data :compra[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idcompra }= req.params;
    compra.update(
        { idpasaje: req.body.idpasaje, idpersona : req.body.idpersona, cantidad_de_equipaje :req.body.cantidad_de_equipaje, idasiento:req.body.idasiento },
        { where: { idcompra: [idcompra] } }
      )
        .then(result =>
            res.redirect('/compras'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;