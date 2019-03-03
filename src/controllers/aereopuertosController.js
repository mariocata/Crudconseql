const controller = {};
const aereopuerto = require('../models/aereopuerto')
const datab = require('../database/database');


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM aereopuertos', (err, aereopuertos) => {
                if(err){
                    res.json(err);
                }
               
                res.render('aereopuertos', {
                    data: aereopuertos
                });
        });
    });
};
controller.save = (req, res) => {
    const data = req.body;
    

    let { IATA,Pais,Ciudad } = data;


    aereopuerto.create({
        IATA,Pais,Ciudad
        
    })
    .then(aereopuertos => res.redirect('/aereopuertos'))
    .catch(err => console.log(err));

    
};

controller.delete = (req, res) => {
    const { IATA }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM aereopuertos WHERE IATA = ?',[IATA], (err,rows) => {
            res.redirect('/aereopuertos');
        });
    })
};


controller.edit  = (req, res) => {
    const { IATA }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM aereopuertos WHERE IATA = ?',[IATA], (err, aereopuerto) =>{
            res.render('aereopuertos_edit', {
                data :aereopuerto[0]
            });
        });
    });
};
controller.update = (req, res) => {
    const { IATA }= req.params;
    aereopuerto.update(
        { IATA:req.body.IATA, Pais:req.body.Pais, Ciudad:req.body.Ciudad },
        { where: { IATA: [IATA] } }
      )
        .then(result =>
            res.redirect('/aereopuertos'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )
};




module.exports = controller;