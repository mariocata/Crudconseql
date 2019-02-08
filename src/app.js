//import express from 'express';
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const datab = require('./database/database')

datab.authenticate()
    .then(()=> console.log('Database CONNECTED '))
    .catch(err => console.log('ERROR' + err))


//importing routes
const customerRoutes = require('./routes/customer');


//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'password123',
    port: 3306,
    database:'crudnodejsmysql'
}, 'single'))
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);


//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(3000, () => {
    console.log('Server on port 3000');
});