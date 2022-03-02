
//mysql

module.exports = class Handlers {

	constructor(arrayDna) {
		this.arrayDna = arrayDna;
		this.connect = null;
	}	


	matriz(){
			let matriz = [];
					

			this.arrayDna.forEach((adn)=>{

				let temporal = [];

				for(let i=0; i <= adn.length-1 ;i++){
					temporal.push(adn[i]);
				}

				matriz.push(temporal);
			});

		return matriz;
	}

	diagFila = (matriz,nRow)=>{

		let line = [];
	  
		for (let i=0;i<=matriz.length-nRow-1;i++)
			line.push(matriz[i+nRow][i]);
	  
		return line;
	  
	}

	diagSuperior(matriz,nCol){

		let line = [];

		for (let i=0;i<=matriz.length-nCol-1;i++){
			line.push(matriz[i][i+nCol]);
		}

		return line;
	}

	diagonales(matriz){

		let diag = [];
		//Diagonal superior
		matriz.forEach((col,i) => diag.push(this.diagSuperior(matriz,i)) );

		//Traigo la diagonal inferior.
		matriz.forEach((row,i)=>{ 
			if (i > 0){
				diag.push(this.diagFila(matriz,i)); 
			}
		});

		return diag;

	}

	obtenerColumna = (matriz,nColumna)=>{

		let grupos = [];
	  
		//Extraigo la columna entera.
		for (let i =0;i<=matriz.length-1;i++)
			grupos.push(matriz[i][nColumna]);
	  
		return grupos;
	  
	  }
	
	extraerCols = (matriz)=>{
		return matriz.map((col,i) => this.obtenerColumna(matriz,i) );	  
	}

	obtenerFilas = (matriz,nFilas)=>{

		let grupos = [];
	  
		//Extraigo la fila entera.
		for (let i =0;i<=matriz.length-1;i++)
		  grupos.push(matriz[nFilas][i]);
	  
		return grupos;
	  
	  }

	extraerFilas = (matriz)=>{

		return matriz.map((col,i) => this.obtenerFilas(matriz,i) );
	  
	}
}