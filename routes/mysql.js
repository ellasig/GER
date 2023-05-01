const mysql = require('mysql2');
require('dotenv').config();
console.log(process.env.user);
const conn = mysql.createPool({
  host: "127.0.0.1",
  user: "admin",
  password: "admin1234",
  database: "gresak",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = conn;
