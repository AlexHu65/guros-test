# Secuencia de ADN
## Proyecto en Nodejs con AWS
## Introducción

Este proyecto esta basado en NodeJS
v14.17.6

## Iniciar instalacion local

npm install

Se anexa una archivo para base de datos llamado
and_mutante.sql

Se utilizo una base de datos mysql para generar el dump

## Ambiente de desarrollo
Se intalo nodejs, se creo una cuenta para generar en AWS para poder exponer el servicio.


## Ejecutando las pruebas ⚙️
Las pruebas se realizaron desde el postman.

Anexo la url de aws http://ec2-54-146-143-160.compute-1.amazonaws.com:3000/mutant

{
 "dna":["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
}

{
 "dna":["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]
}

El servicio expuesto para los stats es el siguiente
http://ec2-54-146-143-160.compute-1.amazonaws.com:3000/stats


## Creacion del servicio en aws
![alt text](https://github.com/AlexHu65/guros-test/capturas/Screenshot_2.png)
