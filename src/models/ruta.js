const Sequelize = require('sequelize');
const datab = require('../database/database');

const rutas = datab.define("rutas", {
   
      idruta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      IATA_origen : {
        type: Sequelize.STRING,
        allowNull: false
      },
      IATA_destino: {
        type: Sequelize.STRING,
        allowNull: false
      }
  });

  module.exports = rutas;