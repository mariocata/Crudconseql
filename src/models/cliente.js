const Sequelize = require('sequelize');
const datab = require('../database/database');
//const comprador = require('../models/comprador');

const cliente = datab.define("cliente", {
    idpersona: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
       /* references:{
          model:comprador,
          key:'idcomprador',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }*/
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nacionalidad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    
   
  });

  module.exports = cliente;