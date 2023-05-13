INSERT INTO department(name)
VALUES ("Legal"),
    ("Engineering"),
    ("Sales"),
    ("Finance");



INSERT INTO role(title, salary, department_id)
VALUES ("Engineering Lead", 300000, 2),
      ("Engineer", 160000, 2),
      ("Legal Team Lead", 310000, 1),
      ("Lawyer", 130000, 1),
      ("Sales Lead", 200000, 3),
      ("Salesperson", 120000, 3),
      ("Finance Lead", 250000, 4),
      ("Accountant", 120000, 4);



INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Marx", 1, null),
	  ("Marni", "Lucas", 3, null),
      ("Lex", "Mathews", 2, null),
      ("Gretchen", "Wheeler", 4, null),
      ("Wonder", "Mann", 2, 3),
      ("Asafa", "Powell", 3, 2),
       ("David", "Lucas", 3, 2),
      ("Izzy", "Barnes", 3, 2),
       ("Magic", "Micheals", 4, 4),
      ("Shamary", "Edwards", 2, 3),
        ("Muun", "Penn", 2, 3),
        ("Rachel", "Weise", 1, 1);