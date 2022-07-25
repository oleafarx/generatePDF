'use strict';
const mysql = require('mysql');
const config = require('./config.js');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : config.HOST,
  user     : config.USER,
  password : config.PASS,
  database : config.DB
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;