function mostrar()
{
let nota;
let sexo;
let acumNotas = 0;
let contNotas = 0;
let promedio;
let contVarones = 0;
let notaMasBaja;
let sexoNotaMasBaja;
let flag = 0;

for (let i = 0; i < 5; i++){
    nota = parseInt(prompt("Ingrese la nota: "));
    while(!(nota >= 0 && nota <= 10) || isNaN(nota)){
        nota = parseInt(prompt("Nota invalida. Ingrese nota: "));
    }
    acumNotas += nota;

    sexo = prompt("Ingrese sexo: ");
    while(!(sexo == "f" || sexo == "m")){
        sexo = prompt("Sexo invalido. Ingrese sexo: ");
    }

    switch (sexo){
        case "m":
            if(nota >= 6){
            contVarones++;
        }
        break;
    }
    if(flag == 0){
        notaMasBaja = nota;
        sexoNotaMasBaja = sexo;
         flag = 1;
    }
    if(notaMasBaja > nota){
        notaMasBaja = nota;
        sexoNotaMasBaja = sexo;
    }
}
promedio = acumNotas / 5;

alert("a. El promedio de las notas totales " + promedio); 
alert("b. La nota mas baja: " + notaMasBaja + " y su sexo " + sexoNotaMasBaja ); 
alert("c. Cantidad varones nota mayor o igual a 6: " + contVarones);
}
