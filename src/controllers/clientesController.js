const controller = {};
const cliente = require('../models/cliente')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes', (err, clientes) => {
                if(err){
                    res.json(err);
                }
               
                res.render('clientes', {
                    data: clientes
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { nombre,nacionalidad,genero } = data;


    cliente.create({
        
         
        nombre,
        nacionalidad,
        genero
        
    })
    .then(clientes => res.redirect('/clientes'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { idpersona }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM clientes WHERE idpersona = ?',[idpersona], (err,rows) => {
            res.redirect('/clientes');
        });
    })
};


controller.edit  = (req, res) => {
    const { idpersona }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clientes WHERE idpersona = ?',[idpersona], (err, cliente) =>{
            res.render('clientes_edit', {
                data :cliente[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { idpersona }= req.params;
    cliente.update(
        { nombre:req.body.nombre,nacionalidad:req.body.nacionalidad,genero:req.body.genero },
        { where: { idpersona: [idpersona] } }
      )
        .then(result =>
            res.redirect('/clientes'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;