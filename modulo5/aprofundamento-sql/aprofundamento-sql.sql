
CREATE TABLE Projetos (
id VARCHAR(10) PRIMARY KEY,
name VARCHAR(10)  NOT NULL,
title VARCHAR(10) NOT NULL,
date DATE NOT NULL
);

SELECT * FROM Projetos;

INSERT INTO Projetos (id, name, title, date)
VALUES(
"001",
"LabeSky",
"LSy",
"2023/10/05"
);

INSERT INTO Projetos (id, name, title, date)
VALUES(
"002",
"Labefy",
"LFy",
"2024/01/06"
);

INSERT INTO Projetos (id, name, title, date)
VALUES(
"003",
"AstroZoom",
"AZm",
"2022/12/20"
);

ALTER TABLE Projetos DROP COLUMN title;
 
ALTER TABLE Projetos CHANGE date dueDate date ;

DESCRIBE Projetos