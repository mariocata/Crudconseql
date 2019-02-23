const datab = require('../database/database');
const Sequelize = require('sequelize');

const aereopuerto = datab.define("aereopuerto", {
    IATA: {
        type: Sequelize.STRING,
        
        primaryKey: true,
        allowNull: false,
    
      },
      Pais: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Ciudad: {
        type: Sequelize.STRING,
        allowNull: false
       
      }
   
  });
  module.exports = aereopuerto;