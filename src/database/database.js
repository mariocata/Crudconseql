const Sequelize = require('sequelize');
module.exports  = new Sequelize('mysql://uurkbobvikxwo4qr:2MKmhjrmWyOQFLkjt3Dm@bqwjulbr9ukl5hk5syin-mysql.services.clever-cloud.com:3306/bqwjulbr9ukl5hk5syin', {
  //host: 'localhost',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

