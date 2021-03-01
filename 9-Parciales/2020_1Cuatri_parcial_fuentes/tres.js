function mostrar()
{
  let nombre;
  let edad;
  let sexo;
  let estadoCivil;
  let temperatura;
  let maxTemp = 0;
  let nombreMaxTem;
  let acumS = 0;
  let contV = 0;
  let contSoV = 0;
  let promedio;
  let contHomSolt = 0;
  let seguir;
  let flag = 0;
  let contAnciTemp = 0;

  do{
	   nombre = prompt("Ingrese el nombre: ");
	  edad = parseInt(prompt("Ingrese la edad: "));
	  while( edad <= 0 || isNaN(edad)){
		edad = parseInt(prompt("Error. Ingrese la edad: "));
	 }
	  sexo = prompt("Ingrese el sexo: ");
	  while(!(sexo == "f" || sexo == "m")){
		sexo = prompt("Error. Ingrese el sexo: ");
	 }
	  estadoCivil = prompt("Ingrese Estado Civil: ");
	  while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")){
		estadoCivil = prompt("Error. Ingrese Estado Civil: ");
	  }
	  temperatura = parseInt(prompt("Ingrese la temperatura: "));
	  while(temperatura < 35 && temperatura > 43){
		temperatura = parseInt(prompt("Ingrese la temperatura: "));
	  }

	  if(flag == 0 || maxTemp < temperatura){
		  maxTemp = temperatura;
		  nombreMaxTem = nombre;
		  flag = 1;
	  }
	  if(edad >= 18 && estadoCivil == "viudo"){
		  contV++;
	  }
	  if(sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")){
		  contSoV++;
	  }
	  if(edad > 60 && temperatura > 38){
		  contAnciTemp++;
	  }
	  if(sexo == "m" && estadoCivil == "soltero"){
		  acumS += edad
		  contHomSolt++;
	  }

	  seguir = prompt("¿Desea agregar a alguien mas?");
	}while(seguir == 's');

	alert("a. El nombre de la persona con mas temperatura es: " + nombreMaxTem);
	alert("b. Cantidad de mayores viudos: " + contV);
	alert("c. Cantidad de hombres que hay solteros o viudos: " + contSoV);
	alert("d. Cantidad personas de la tercera edad que tienen mas de 38: " + contAnciTemp);
	promedio = acumS / contHomSolt;
	alert("e. Promedio de edad entre hombres solteros: " + promedio);
	

	   


   
  }

