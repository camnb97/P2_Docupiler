DROP DATABASE IF EXISTS p2_db;
CREATE DATABASE p2_db;

USE p2_db;

CREATE TABLE walkers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user_name VARCHAR(30),
    password VARCHAR(30)
);
