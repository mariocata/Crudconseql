const Sequelize = require('sequelize');
const datab = require('../database/database');

const customer = datab.define("customer", {
    id: {
        type: Sequelize.STRING,
        
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    name: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      }
  });

  module.exports = customer;