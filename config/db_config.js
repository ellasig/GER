const dotenv = require('dotenv');
module.exports = {
  host: dotenv.DB_HOST,
  user: dotenv.DB_USER,
  password: dotenv.DB_PASS,
  database: dotenv.DB_NAME,
}