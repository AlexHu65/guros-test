const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//servicios
const Validations = require('./services/validations');
const Mutante = require('./services/mutante');
const Connection = require('./config/connection');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/mutant', (req, res) => {	

	try {	

		respuesta = false;

		//configuramos el header de la respuesta
		res.setHeader('Content-Type', 'text/plain');

		//instanciamos las validaciones necesarias
		let validateADN = new Validations(req.body.dna);

		console.log('Validamos si es string');
		console.log('Validamos si es permitido');
		console.log('Validamos longitud');

		// si pasa las primeras validaciones
		if(validateADN.permitidos() && validateADN.permitidos() && validateADN.longitud()){
			respuesta  = true;
		}

		//controlamos la respuesta
		if(!respuesta){
			res.status(422).send({status: 0, msg: 'No tiene caracteres validos o la longitud no es adecuada'});				
		}else{

			let mutante = new Mutante();
			let isMutant = mutante.hasMutation(req.body.dna);			

			if (isMutant) {
				
				let mysql = require('mysql');
				let connection = new Connection();
				let sql = 'SELECT id FROM mutants where adn='+ mysql.escape(JSON.stringify(isMutant));				

				this.connect = connection.createConection();
				this.connect.query(sql, function (error, results, fields) {

					if (error){
						throw error;
					}	

					results.forEach(result => {
						update(result.id);
					});
				});

				function update(id) {

					let sqlUpdate = 'UPDATE mutants SET mutant = 1 where id=' + id;
					this.connect = connection.createConection();
					this.connect.query(sqlUpdate, function (error, results, fields) {
						if (error){
							throw error;
						}	

						console.log('Updated', results);
					});					
				}

				this.connect.end();
				res.status(200).send((isMutant));
			}				
		}

	} catch (error) {
		console.log(error);
		res.status(400).send(({status: 0, msg: 'Bad request'}));				
	}
});


app.get('/stats', (req, res) => {	

	res.setHeader('Content-Type', 'text/plain');
	let connection = new Connection();
	let sql = 'SELECT (SELECT COUNT(id) FROM mutants WHERE mutant = 1) as count_mutations, (SELECT COUNT(id) FROM mutants WHERE mutant = 0) as count_no_mutation,	((SELECT COUNT(id) FROM mutants WHERE mutant = 1)/(SELECT COUNT(id) FROM mutants WHERE mutant = 0)) as ratio,COUNT(id) as total	FROM mutants GROUP BY count_mutations, count_no_mutation;';				

	this.connect = connection.createConection();
	this.connect.query(sql, function (error, results, fields) {

		if (error){
			throw error;
		}
		console.log('Results stats', results);
		res.status(200).send((results));
	});

	this.connect.end();

});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
