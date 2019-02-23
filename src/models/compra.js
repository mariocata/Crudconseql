const Sequelize = require('sequelize');
const datab = require('../database/database');
const asiento = require('../models/asiento');
const pasaje = require('../models/pasaje');
const cliente = require('../models/cliente');

const compra = datab.define("compra", {
    idcompra: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      idpasaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:pasaje,
          key:'idpasaje',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      idpersona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:cliente,
          key:'idpersona',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
       
      },
      cantidad_de_equipaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idasiento: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references:{
          model:asiento,
          key:'idasiento',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
   
  });

  module.exports = compra;