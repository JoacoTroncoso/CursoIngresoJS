function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if( numero >= 9){
		alert("EXCELENTE tu nota es un " + numero);
	}
	else if (numero > 4){
			alert("APROBO su nota es un " + numero);
		}
		else{
			alert("Vamos, la proxima se puede. Su nota es un " + numero);
		}	
		
	

	}//FIN DE LA FUNCIÓN