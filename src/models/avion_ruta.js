const Sequelize = require('sequelize');
const datab = require('../database/database');
const ruta = require('../models/ruta');
const avion = require('../models/avion');

const avion_rutas = datab.define("avion_rutas", {
   
    idavion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references:{
        model:avion,
        key:'idavion',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
     
    },
    idruta : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references:{
        model:ruta,
        key:'idruta',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
});

module.exports = avion_rutas;