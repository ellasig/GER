const mysql = require('mysql');
const util = require('util');

//MySQL's connection parameters (server, login etc.) are stored in db.config.js file
const dbConfig = require("../config/db_config.js");

const conn = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = conn;