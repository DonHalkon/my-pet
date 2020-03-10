insert into PET_PROJECTS (id,name,description,short_description,task)
    values (1,'Calculator','A simple, fast, and intuitive command-line calculator. You can also use calc to evaluate an expression with just a single command (i.e. without opening the shell). To do this, just use calc [expression]. Calc supports all the standard stuf: +, -, *, /.','Implement dummy command line calculator.','Implement intuitive command-line calculator with support: +, -, *, / operations.'),
           (2,'Hello World','The simplest first project. It should just print ‘Hello world!’ and exit.','The simplest project.','Your project should just print ‘Hello world!’ and exit.'),
           (3,'Guess the number','Program takes random number from 0 to 100 and user has 5 attempts to guess this number.','Command line game for guessing random number.','Implement game "Guess the number"');

insert into validations
    values (1, 'Test 1: 1 + 1 = ?'),
           (2, 'Test 2: 1 - 1 = ?'),
           (3, 'Test 3: 4 / 2 = ?'),
           (4, 'Test 1: Work fine'),
           (5, 'Test 2: Print "Hello World!"'),
           (6, 'Test 1: Set number to guess'),
           (7, 'Test 2: Guess rundom number'),
           (8, 'Test 3: Hahaha');

insert into pet_projects_validations
    values (1, 1),
           (1, 2),
           (1, 3),
           (2, 4),
           (2, 5),
           (3, 6),
           (3, 7),
           (3, 8);

insert into pet_project_examples
    values (1, 'input: \n1 \n+ \n1 \noutput: \n2'),
           (1, ''),
           (1, ''),
           (1, ''),
           (1, ''),
           (1, ''),
           (1, ''),
           (1, ''),
           (1, '');

