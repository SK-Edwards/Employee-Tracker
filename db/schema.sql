---Creating database----
DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;

USE employees_DB;

----Creating tables----

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    _name VARCHAR(30)
);


CREATE TABLE _role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    title VARCHAR(30),
    salary DECIMAL,
    deparment_id INT,
    FOREIGN KEY ( department_id) REFERENCES department(id);
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES _role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id);
);