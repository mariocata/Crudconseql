const datab = require('../database/database');
const Sequelize = require('sequelize');

const proveedores = datab.define("proveedores", {
    idproveedor: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    
      },
     nombre_proveedor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tiempo_respuets: {
        type: Sequelize.INTEGER,
        allowNull: false
       
      }
   
  });
  module.exports = proveedores;