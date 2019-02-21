const Sequelize = require('sequelize');
const datab = require('../database/database');

const vuelo = datab.define("vuelo", {
    idvuelo: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      idruta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idavion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      idruta_desvio: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
   
  });

  module.exports = vuelo;