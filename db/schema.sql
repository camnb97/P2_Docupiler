DROP DATABASE IF EXISTS p2_db;
CREATE DATABASE p2_db;

USE p2_db;

-- Dog Walkers Table
-- Stores user, password, and their clients
CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user VARCHAR(30),
    password VARCHAR(30),
    clients_id INT,
    FOREIGN KEY (clients_id),
    REFERENCES clients (id)
    ON DELETE SET NULL
);

-- Client Table
-- Stores client name, address, contact info, and pet name
CREATE TABLE clients (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    address VARCHAR(100),
    email VARCHAR(50),
    phone DECIMAL(10),
    pets_id INT,
    FOREIGN KEY (pets_id),
    REFERENCES pets (id)
    ON DELETE SET NULL
);

-- Pets Table
-- Stores pet name, age, breed, owners, and when they are walked
CREATE TABLE pets (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    dog_name VARCHAR(30),
    dog_age DECIMAL(3),
    breed VARCHAR(30),
    walk_time DECIMAL(2),
    walk_day VARCHAR(30),
    clients_id INT,
    FOREIGN KEY (clients_id),
    REFERENCES clients (id),
    ON DELETE SET NULL
);