const controller = {};
const Precio = require('../models/precio')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM precios', (err, precios) => {
                if(err){
                    res.json(err);
                }
               
                res.render('precios', {
                    data: precios
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { idvuelo,idasiento,precio } = data;


    Precio.create({
    
        idvuelo,
        idasiento,
        precio
    })
    .then(precios => res.redirect('/precios'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idvuelo,idasiento }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM precios WHERE idvuelo = ? and idasiento = ?',[idvuelo,idasiento], (err,rows) => {
            res.redirect('/precios');
        });
    })
};


controller.edit  = (req, res) => {
    const { idvuelo,idasiento }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM precios WHERE idvuelo = ? AND idasiento = ?',[idvuelo,idasiento], (err, precio) =>{
            res.render('precios_edit', {
                data :precio[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idvuelo,idasiento }= req.params;
    Precio.update(
        {  idvuelo:req.body.idvuelo,idasiento:req.body.idasiento,precio:req.body.precio },
        { where: { idvuelo: [idvuelo],idasiento: [idasiento] } }
      )
        .then(result =>
            res.redirect('/precios'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;