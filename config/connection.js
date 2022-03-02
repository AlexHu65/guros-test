module.exports = class Connection {

	#host;
    #database;
    #user;
    #password;

	constructor() {
		this.#host = 'localhost';
		this.#database = 'and_mutante';
		this.#user = 'alex';
		this.#password = 's1st3m2s';
		this.connection = null;
	}

	createConection(){

		let mysql = require('mysql');
		let connection = mysql.createConnection({
			host     : this.#host,
			database : this.#database,
			user     : this.#user,
			password : this.#password
		});

		connection.connect(function(err) {
			if (err) {
				console.error('Error connecting: ' + err.stack);
				return;
			}

			console.log('Connected as id ' + connection.threadId);			
		
		});

		return connection;

	}

}



// conectividad para mysql
/*var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'and_mutante',
    user     : 'root',
    password : '',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM mutants', function (error, results, fields) {
    if (error){
        throw error;
	}

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();*/