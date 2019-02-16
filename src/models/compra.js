const Sequelize = require('sequelize');
const datab = require('../database/database');

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
      },
      idpersona: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cantidad_de_equipaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idasiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
   
  });

  module.exports = compra;