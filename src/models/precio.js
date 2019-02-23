const Sequelize = require('sequelize');
const datab = require('../database/database');
const vuelo = require('../models/vuelo');
const asiento = require('../models/asiento');

const precio = datab.define("precio", {
    idvuelo: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        references:{
          model:vuelo,
          key:'idvuelo',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      
      },
    idasiento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
        references:{
          model:asiento,
          key:'idasiento',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull: false,

        
      }
  });

  module.exports = precio;