const Sequelize = require('sequelize');
const datab = require('../database/database');

const asiento = datab.define("asiento", {
   
      idasiento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      tipo_de_asiento : {
        type: Sequelize.STRING,
        allowNull: false
      }
   
  });

  module.exports = asiento;