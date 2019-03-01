const Sequelize = require('sequelize');
const datab = require('../database/database');
const proveedores = require('../models/proveedor');
const mantenimiento = require('../models/mantenimiento');

const aviones = datab.define("aviones", {
   
    idavion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    fabricante : {
      type: Sequelize.STRING,
      allowNull: false
    },
    modelo : {
      type: Sequelize.STRING,
      allowNull: false
    },
    vel_max : {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    vel_crucero : {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cant_asi_eco : {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cant_asi_pri : {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    peso_vacio: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    peso_max: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    carga_max_equip: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    carga_max_cabina: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    pilotos_nece: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    tipo_combus: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cant_combus: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cant_banos: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cant_salidas_emer: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    equip_medi: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dist_depegue_crgmax: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: true,
      //defaultValue: true
    },
    id_mantenimiento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:mantenimiento,
          key:'idmantenimiento',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
    precio_dist_recorrida: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    idproveedor:{
        type: Sequelize.INTEGER,
      allowNull: true,
      references:{
        model:proveedores,
        key:'idproveedor',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
});

module.exports = aviones;