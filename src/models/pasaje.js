const Sequelize = require('sequelize');
const datab = require('../database/database');
const vuelo = require('../models/vuelo');

const pasaje = datab.define("pasaje", {
   
      idpasaje: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
        
      },
      idvuelo : {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
          model:vuelo,
          key:'idvuelo',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
    modificacion:{
      type: Sequelize.INTEGER,
      allowNull: false


    }
   
  });

  module.exports = pasaje;