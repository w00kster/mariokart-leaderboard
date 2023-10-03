const mysql = require('mysql2');
const dotenv = require('dotenv').config();
const isLocal = true;

if (isLocal){

  const localConnection =  mysql.createConnection({
    host:process.env.localhost,
    user: process.env.localuser,
    password: process.env.localpassword ,
    database: process.env.database,
    port: process.env.localport
  });

  localConnection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  
  localConnection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });
} else {
  const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password:process.env.password,
    database: process.env.database,
    ssl: {
      ca: process.env.ssl,
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
  
}
