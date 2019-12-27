CREATE DATABASE IF NOT EXISTS pizzas_db;
USE pizzas_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS pizzas;

-- Create the pizzas table
CREATE TABLE pizzas (
    id int NOT NULL AUTO_INCREMENT,
    pizza_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
