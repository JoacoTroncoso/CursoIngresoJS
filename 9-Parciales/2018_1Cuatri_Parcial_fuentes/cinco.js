function mostrar()
{
let planetas;
planetas = prompt("Ingrese planeta ");

switch(planetas){
    case "tierra":
        alert("Aca vivimos");
        break;
    case "mercurio":
    case "venus":
        alert("Aca hace mas calor");
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        alert ("Aca hace mas frio");
        break;
    default:
        alert("No es un planeta valido");
        break;                               
}
}
