function mostrar()
{
	let destino;
	let estacion;
	let aumento = 0;
	let descuento = 0;
	let precioFinal
	let precioBase = 15000;
	
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

    switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
			aumento = 20;
			}
			else if(destino == "Mar del plata"){
			descuento = 20;	
			}
			else{
				descuento = 10
			}
			break;
		case "Verano":
			if(destino == "Bariloche"){
				descuento = 20;	
			}
			else if (destino == "Mar del plata"){
				aumento = 20;
			}
			else{
				aumento = 10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destino == "Cordoba"){
				precioFinal = precioBase
			}
			else{
				aumento = 10;
			}
			break;
		}			

	if(aumento != 0){
		precioFinal = precioBase + precioBase * aumento /100	
			
	}
	else if(descuento != 0){
		precioFinal = precioBase - precioBase * descuento /100
	}
	else{
		precioFinal = precioBase
	}
	alert("precioFinal $" + precioFinal);

}//FIN DE LA FUNCIÓN