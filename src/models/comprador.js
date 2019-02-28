const Sequelize = require('sequelize');
const datab = require('../database/database');
const cliente = require('../models/cliente');


const compradores = datab.define("compradores", {
   
    idcomprador: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references:{
        model:cliente,
        key:'idpersona',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
     
    },
    telefono : {
      type: Sequelize.STRING,
      allowNull: false
    },
    correo_electronico : {
      type: Sequelize.STRING,
      allowNull: false
    }
});

module.exports = compradores;