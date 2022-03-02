

const Handlers = require('./handlers');
const Connection = require('../config/connection');


module.exports = class Mutante {

	constructor(){
		this.connect = null;
	}

	consecutivos = (line,top) => {	

		let cont  = 0;
		let mutantCont = 0;
		let last = '';
		let actual  = '';

		for (let i = 0; i < line.length; i++) {	

			last = (i==0) ? line[0]:line[i-1];
			actual = line[i];

			if(last == actual){
				cont++;
			}

			if(cont == top && mutantCont <= top){
				//si ya encontramos mas de 4 letras iguales
				mutantCont++;
			}			
			
			if(mutantCont >= 1){
				return true;
			}
			
		}

		return false;
	}
	
	hasMutation(dnaArray){

		let handler = new Handlers(dnaArray);
		let matriz = handler.matriz(dnaArray);		
		console.log('Matriz creada', matriz);

		//validamos la matriz en diagonal
		let diags  = handler.diagonales(matriz);
		this.insert(diags);
		console.log('Diagonales', diags);	

		//validamos las columnas
		let cols  = handler.extraerCols(matriz);
		this.insert(cols);
		console.log('Columnas', cols);

		//validamos las rows
		let rows  = handler.extraerFilas(matriz);
		this.insert(rows);
		console.log('Filas', rows);

		//iniciamos la validacion
		return ( [...diags, ...cols, ...rows].find((line) =>  this.consecutivos(line,4)));

	}

	insert(array){	

		let connection = new Connection();
		this.connect = connection.createConection();

		for (let i = 0; i < array.length; i++) {
			const element = (array[i]);	
			console.log('Elements to insert', element);
			//insertar el gen
			let sql = "INSERT INTO mutants (adn) VALUES (?)";
			let values = [JSON.stringify(element)];
			this.connect.query(sql, values, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
				// get inserted id
				console.log('Todo Id:' + results.insertId);
			});
		}	

		this.connect.end();
	}

	selectMutant(string){

		let mysql = require('mysql');
		let connection = new Connection();
		let sql = 'SELECT id FROM mutants where adn='+ mysql.escape(string);				

		this.connect = connection.createConection();
		this.connect.query(sql, function (error, results, fields) {

			if (error){
				throw error;
			}	

			results.forEach(result => {

			});
		});

		this.connect.end();
	}

	

}