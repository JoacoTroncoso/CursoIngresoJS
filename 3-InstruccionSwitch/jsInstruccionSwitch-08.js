function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Frío");
			break;
		case "Cataratas":
			alert("Calor");
			break;
		case "Ushuaia":
			alert("Frío");
			break;
		case "Mar del plata":
			alert("Calor");
			break;
	}
}			
						
//FIN DE LA FUNCIÓN