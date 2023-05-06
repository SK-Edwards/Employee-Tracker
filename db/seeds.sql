---Seeding department table------
INSERT INTO department(_name)
VALUE ("Legal", "Engineering", "Sales", "Finance");


---Seeding _role table---
INSERT INTO _role(title, salary, deparment_id)
VALUE ("Engineering Lead", 300000, 2),
      ("Engineer", 160000, 2),
      ("Legal Team Lead", 310000, 1),
      ("Lawyer", 130000, 1)
      ("Sales Lead", 200000, 3)
      ("Salesperson", 120000, 3)
      ("Finance Lead", 250000, 4)
      ("Accountant", 120000, 4);


-----Seeding employee table----
-- Sales Lead: Marni Lucas
-- Legal Lead: Josh Marx
-- Engineer Lead: Lex Mathews
-- Finance Lead: Grechen Wheeler

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ("Rachel", "Weise", 1, 2 ),
      ("Josh", "Marx", 1, null),
      ("David", "Lucas", 3, 6),
      ("Magic", "Micheals", 4, 8),
      ("Muun", "Penn", 2, 7),
      ("Marni", "Lucas", 3, null),
      ("Lex", "Mathews", 2, null),
      ("Gretchen", "Wheeler", 4, null),
      ("Wonder", "Mann", 2, 7),
      ("Asafa", "Powell", 3, 6),
      ("Izzy", "Barnes", 3, 6),
      ("Shamary", "Edwards", 2, 7;) 