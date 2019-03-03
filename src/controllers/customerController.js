const controller = {};
const datab = require('../database/database');



const avion = require('../models/avion')


const vuelo = require('../models/vuelo')


const ruta = require('../models/ruta')


controller.list = (req, res) => {
    
               
                res.render('customers', {
              
                });
        };
   

/*
controller.list1 = (req, res) => {
    const { IATA_ubicacion }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *  FROM pistas where IATA_ubicacion = ? ',[IATA_ubicacion], (err, pista) => {
                if(err){
                    res.json(err);
                }
               
                res.render('customers', {
                    data: pista
                });
        });
    });
};*/





/*controller.list = (req, res) => {
                res.render('customers')
        
};




/*
controller.save = (req, res) => {
    const data = req.body;
    

    let { name, address, phone } = data;


    user.create({
            name,
            address,
            phone
    })
    .then(customer => res.redirect('/'))
    .catch(err => console.log(err));

    /*
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            console.log(customer);
            res.redirect('/');
        });
    })
    
};


controller.edit  = (req, res) => {
    const { id }= req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customers WHERE id = ?',[id], (err, customer) =>{
            res.render('customer_edit', {
                data :customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id }= req.params;
    user.update(
        { name: req.body.name, address : req.body.address, phone :req.body.phone },
        { where: { id: [id] } }
      )
        .then(result =>
            res.redirect('/'),
            console.log("user updated successfully!")
            
        )
        .catch(err =>
            console.log("Project update failed !")
        )

    /*
    const { id }= req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customers set ? WHERE id = ?', [newCustomer,id], (err, rows) => {
            res.redirect('/');
        });
    })



};




controller.delete = (req, res) => {
    const { id }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customers WHERE id = ?',[id], (err,rows) => {
            res.redirect('/');
        });
    })
};
*/


module.exports = controller;