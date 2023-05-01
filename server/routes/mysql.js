const mysql = require('mysql');
const util = require('util');

//MySQL's connection parameters (server, login etc.) are stored in db.config.js file
const dbConfig = require("../config/db_config.js");

const conn = mysql.createConnection(dbConfig);
util.promisify(conn.query).bind(conn);
conn.connect((err) => {
  if (err) throw err
});

module.exports = conn;