function mostrar()
{
	//tomo la edad  
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad < 13){
		alert ("Es niño");
		
	}
   else{ 
		if (edad < 18){
		alert("Es adolescente");}
		else {
			alert ("Es adulto");
		}

	}



}//FIN DE LA FUNCIÓN