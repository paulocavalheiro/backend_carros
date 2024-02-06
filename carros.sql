CREATE DATABASE cars;
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    login VARCHAR(255) UNIQUE,
    senha VARCHAR(255)
);
CREATE TABLE marca (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) UNIQUE
);
CREATE TABLE carro (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    ano INTEGER,
    cor VARCHAR(255),
    modelo VARCHAR(255),
    tipo_transmissao VARCHAR(255),
    marca_id INTEGER REFERENCES marca(id)
);


