// const mysql = require('mysql');
import mysql from 'mysql2/promise';

const mysqlDb = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: 'pass',  // Replace with your MySQL password
  database: 'boilerplate',  // Replace with your database name
});

mysqlDb.connect(err => {
  if (err) {
    console.log("Error connecting to MySQL database");
  } else {
    console.log("Connected!");
  };
});

// Use connection to query
// mysqlDb.query('SELECT * FROM users', (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });

// Close connection
mysqlDb.end();

module.exports = mysqlDb;



// MySQL connection settings
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',  // Replace with your MySQL username
//   password: 'pass',  // Replace with your MySQL password
//   database: 'boilerplate',  // Replace with your database name
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });