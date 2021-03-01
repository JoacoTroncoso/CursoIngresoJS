function mostrar()
{
let precio;
let descuento;
let precioFinal;

precio = parseInt(prompt("Ingrese el precio: " ));
descuento = parseInt(prompt("Ingrese el descuento: " ));


descuento = precio - precio * descuento / 100;
precioFinal = descuento;

document.getElementById("elPrecioFinal").value = precioFinal;

}
