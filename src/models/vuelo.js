const Sequelize = require('sequelize');
const datab = require('../database/database');
const ruta = require('../models/ruta');
const avion = require('../models/avion');

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
        references:{
          model:ruta,
          key:'idruta',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      idavion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:avion,
          key:'idavion',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      asientos_necesarios :{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idruta_desvio: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:ruta,
          key:'idruta',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
   
  });

  module.exports = vuelo;