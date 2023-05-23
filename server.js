//Import Dependencies

const mysql = require('mysql2')
const inquirer = require('inquirer'); 
const consoleTable = require('console.table'); 
require('dotenv').config()
const {promptUser} = require('./Functionality')
// Connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'employ_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId);
  afterConnection();
});

// Welcome image shows 
afterConnection = () => {
  console.log(`  

  ░▒█▀▀▀░█▀▄▀█░▄▀▀▄░█░░▄▀▀▄░█░░█░█▀▀░█▀▀░░░▒█▀▄▀█░█▀▀▄░█▀▀▄░█▀▀▄░█▀▀▀░█▀▀░█▀▀▄
  ░▒█▀▀▀░█░▀░█░█▄▄█░█░░█░░█░█▄▄█░█▀▀░█▀▀░░░▒█▒█▒█░█▄▄█░█░▒█░█▄▄█░█░▀▄░█▀▀░█▄▄▀
  ░▒█▄▄▄░▀░░▒▀░█░░░░▀▀░░▀▀░░▄▄▄▀░▀▀▀░▀▀▀░░░▒█░░▒█░▀░░▀░▀░░▀░▀░░▀░▀▀▀▀░▀▀▀░▀░▀▀
  `


  )

};
promptUser();
