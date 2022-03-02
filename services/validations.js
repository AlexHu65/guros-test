'use strict';

const adnPermitidos = require('./constantes').adnPermitidos;

module.exports = class Validations {

   constructor(arrayDna) {
       this.arrayDna = arrayDna;
   }

   display() {
       return this.arrayDna;
   }

   //valida que cada indice sea un string
   string(){
	   return this.arrayDna.every((adn) => (typeof adn ==='string'));
   }

   validate(adn){
	   for (let i=0; i <= adn.length-1 ;i++){
		   if (!adnPermitidos.includes(adn[i])){
			   return false;
			}
		}
		
		return true;
   }

   validateLength(adn){
	 return adn.length;  
   }

   //validamos longitud de todos los elementos del array
   longitud(){
      let response = this.arrayDna.map((adn) => this.validateLength(adn));
      return response.every((stat) => stat == 6);
   }

   //aplicamos para solo permitir las constantes
   permitidos(){
	   let response = this.arrayDna.map((adn) => this.validate(adn));
	   return response.every((stat) => stat == true);
   }

}
