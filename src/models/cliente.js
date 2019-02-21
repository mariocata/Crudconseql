const Sequelize = require('sequelize');
const datab = require('../database/database');

const cliente = datab.define("cliente", {
    idpersona: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nacionalidad: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comprador: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
   
  });

  module.exports = cliente;