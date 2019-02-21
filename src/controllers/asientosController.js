const controller = {};
const asiento = require('../models/asiento')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM asientos', (err, compras) => {
                if(err){
                    res.json(err);
                }
               
                res.render('asientos', {
                    data: compras
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { tipo_de_asiento } = data;


    asiento.create({
        tipo_de_asiento
    })
    .then(asientos => res.redirect('/asientos'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idasiento }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM asientos WHERE idasiento = ?',[idasiento], (err,rows) => {
            res.redirect('/asientos');
        });
    })
};


controller.edit  = (req, res) => {
    const { idasiento }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM asientos WHERE idasiento = ?',[idasiento], (err, asiento) =>{
            res.render('asientos_edit', {
                data :asiento[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idasiento }= req.params;
    asiento.update(
        { tipo_de_asiento: req.body.tipo_de_asiento },
        { where: { idasiento: [idasiento] } }
      )
        .then(result =>
            res.redirect('/asientos'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;