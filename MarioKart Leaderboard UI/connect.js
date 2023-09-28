const mysql = require('mysql2');
const dotenv = require('dotenv').config();
const isLocal = true;
const connection = mysql.createConnection({
  host: isLocal ? process.env.localhost : process.env.host,
  user: isLocal ? process.env.localuser: process.env.user,
  password: isLocal ? process.env.localpassword : process.env.password,
  database: process.env.database,
  ssl: {
    ca: isLocal ? "" : process.env.ssl,
    rejectUnauthorized: false
  }
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});
