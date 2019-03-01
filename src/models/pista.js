const Sequelize = require('sequelize');
const datab = require('../database/database');
const aereopuerto = require('../models/aereopuerto');

const pistas = datab.define("pistas", {
   
      idpista: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      IATA_ubicacion : {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:aereopuerto,
          key:'IATA',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }

      },
      distancia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
  });

  module.exports = pistas;