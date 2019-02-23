const Sequelize = require('sequelize');
const datab = require('../database/database');


const compradores = datab.define("compradores", {
   
    idcomprador: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    telefono : {
      type: Sequelize.STRING,
      allowNull: false
    },
    correo_electronico : {
      type: Sequelize.STRING,
      allowNull: false
    }
});

module.exports = compradores;