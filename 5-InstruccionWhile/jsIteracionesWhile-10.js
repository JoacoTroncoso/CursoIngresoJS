/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let numero;
let seguir;
let acumPositivos = 0;
let contPositivos = 0;
let acumNegativos = 0;
let contNegativos = 0;
let contCero = 0;
let contPares = 0;
let promPos;
let promNeg;
let diferencia;

do{
	
	numero = parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero)){
		numero = parseInt(prompt("Error. Ingrese un numero: "));
	}

	if( numero > 0  ){
		acumPositivos += numero;
		contPositivos++;
		
		}
		else if( numero < 0  ){
		acumNegativos += numero;
		contNegativos++;
		
		}
		else{
			 contCero++;
		}
		
		if(numero % 2 == 0){
			contPares++;
		}




		seguir = prompt("Quiere ingresar otro numero?: ");
}while(seguir == 's');

promPos = acumPositivos / contPositivos;

promNeg = acumNegativos / contNegativos;

diferencia = contPositivos - contNegativos;



}//FIN DE LA FUNCIÓN