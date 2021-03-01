/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese su sexo: ");

	while(!(sexo == "f" && sexo == "m")){
		sexo = prompt("Error. Ingrese su sexo: ");

	}
	document.getElementById("txtIdSexo").value = sexo;


	
}//FIN DE LA FUNCIÓN