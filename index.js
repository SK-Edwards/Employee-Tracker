const express = require('express');
const mysql = require('mysql')
const conTable = require('console.table')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_trackerDB"
  });
