const datab = require('../database/database');
const Sequelize = require('sequelize');

const mantenimiento = datab.define("mantenimiento", {
    idmantenimiento: {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    
      },
     descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duracion: {
        type: Sequelize.INTEGER,
        allowNull: false
       
      }
   
  });
  module.exports = mantenimiento;