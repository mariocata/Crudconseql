const Sequelize = require('sequelize');
const datab = require('../database/database');

const pasaje = datab.define("pasaje", {
   
      idpasaje: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
      },
      idvuelo : {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    modificacion:{
      type: Sequelize.INTEGER,
      allowNull: false


    }
   
  });

  module.exports = pasaje;