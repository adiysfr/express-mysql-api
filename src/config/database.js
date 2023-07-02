require('dotenv').config()
// get the client
const mysql = require('mysql2');
// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // host: "localhost",
  // user: "root1",
  // password: "root1",
  // database: "express_mysql",
});

module.exports = dbPool.promise();