// config.js
const dotenv = require('dotenv').config();

module.exports = {

  HOST: `${process.env.HOST1}.${process.env.HOST2}`,
  USER: process.env.USER,
  PASS: process.env.PASS,
  DB: process.env.DB

}