//Import Dependencies

const mysql = require('mysql2')
const inquirer = require('inquirer'); 
const consoleTable = require('console.table'); 
require('dotenv').config()
const {viewAllEmployees, addDepartment, addRole, updateEmployee, addEmployee, viewAllDepartments, viewAllRoles} = require('./Functionality')
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
  console.log(

 `░▒█▀▀▀░█▀▄▀█░▄▀▀▄░█░░▄▀▀▄░█░░█░█▀▀░█▀▀░░░▒█▀▄▀█░█▀▀▄░█▀▀▄░█▀▀▄░█▀▀▀░█▀▀░█▀▀▄
  ░▒█▀▀▀░█░▀░█░█▄▄█░█░░█░░█░█▄▄█░█▀▀░█▀▀░░░▒█▒█▒█░█▄▄█░█░▒█░█▄▄█░█░▀▄░█▀▀░█▄▄▀
  ░▒█▄▄▄░▀░░▒▀░█░░░░▀▀░░▀▀░░▄▄▄▀░▀▀▀░▀▀▀░░░▒█░░▒█░▀░░▀░▀░░▀░▀░░▀░▀▀▀▀░▀▀▀░▀░▀▀
  `


  )

};
promptUser();
//Initial Prompt

function promptUser() {
    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View All Employees?", 
              "View All Employee's By Roles?",
              "View all Emplyees By Deparments", 
              "Update Employee",
              "Add Employee?",
              "Add Role?",
              "Add Department?",
              "Remove Employee"
            ]
    }
]).then(function(data) {
        switch (data.choice) {
            case "View All Employees?":
              viewAllEmployees();
            break;
    
          case "View All Employee's By Roles?":
              viewAllRoles();
            break;
          case "View all Emplyees By Deparments":
              viewAllDepartments();
            break;
          
          case "Add Employee?":
                addEmployee();
              break;

          case "Update Employee":
                updateEmployee();
              break;
      
            case "Add Role?":
                addRole();
              break;
      
            case "Add Department?":
                addDepartment();
              break;

            default:

              break;
    
            }
    })
};


