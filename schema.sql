-- Drops the middleground if it exists currently --
DROP DATABASE IF EXISTS SHOPPR;
CREATE DATABASE SHOPPR;
-- survey_instances has one record to one participant, many questions, one chosen answer per question
CREATE TABLE User (
    id INTEGER NOT NULL,
    username VARCHAR(100) NOT NULL,
    /* Autoincrement in Sequelize ? */
    email VARCHAR(100) NOT NULL,
    password VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
) -- participants has one record to one survey instance

CREATE TABLE Friend_Connection (
    user_id INTEGER NOT NULL,
    friend_id INTEGER NOT NULL,
) 

CREATE TABLE Search (
    id INTEGER NOT NULL,
    image_url VARCHAR(200),
    image_blob VARBINARY(20000),
    UserId INTEGER,
     PRIMARY KEY (id)
) 

CREATE TABLE Item (
   id INTEGER NOT NULL,
   name VARCHAR(300) NOT NULL,
   SearchId INTEGER,
   PRIMARY KEY (id)
}