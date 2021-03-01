function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let importe;
  let neto;
  let seguir;
  let acumC = 0;
  let acumCal = 0;
  let acumA = 0;
  let descuento;
  let tipoMaxBolsas;
  let maxPrecio;
  let maxTipo;
  let flag = 1;
  let subtotal = 0;
  let acumBolsas = 0;

  do{
    
    tipo = prompt("Ingrese el tipo de validad: ");
    while(!(tipo == "arena" || tipo == "cal" || tipo == "cemento" )){
      tipo = prompt("Error.Ingrese el tipo de validad: ")
    }
    
    cantidad = prompt("Ingrese la cantidad de bolsas: ");

    precio = parseInt(prompt("Ingrese el precio de la bolsa: "));
    while(!(precio >=0 || isNaN(precio))){
      precio = parseInt(prompt("Error. Ingrese el precio de la bolsa: "));

    }
    importe = precio * cantidad;
    subtotal += importe;
    acumBolsas

    switch(tipo){
      case "arena":
        acumA += cantidad;
        break;
      case "cal":
        acumCal += cantidad;
        break;
      case "cemento":
        acumC += cantidad;
        break;

    }

    if( flag || precio > maxPrecio){
      maxPrecio = precio;
      maxTipo = tipo;
      flag = 0;
    }

    seguir = prompt("Quiere comprar algo mas?: ");
  }while(seguir == 's');

  if(acumBolsas < 10){
    descuento = 0;

  }
  else if(acumBolsas < 30){
    descuento = 0.15;
  }
  else{
    descuento = 0.25;
  }
  if(acumA > acumC && acumA > acumCal){
    tipoMaxBolsas = "arena";
  }
  else if(acumC >= acumA && acumC > acumCal){
    tipoMaxBolsas = "cal";

  }
  else{
tipoMaxBolsas = "cemento";
  }


  console.log("a- importe bruto a pagar $ " + subtotal);

if(descuento != 0){
  neto = subtotal - subtotal * descuento;
  console.log("a- importe neto a pagar $ " + neto);
}
console.log("tipo mas cant de bolsas " + tipoMaxBolsas);
console.log(" tipo mas caro es " + maxTipo + "con un valor & " + maxPrecio);



}
