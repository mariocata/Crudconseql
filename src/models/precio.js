const Sequelize = require('sequelize');
const datab = require('../database/database');

const precio = datab.define("precio", {
    idvuelo: {
        type: Sequelize.STRING,
        
        primaryKey: true,
        allowNull: false,
      
      },
    idasiento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      }
  });

  module.exports = precio;