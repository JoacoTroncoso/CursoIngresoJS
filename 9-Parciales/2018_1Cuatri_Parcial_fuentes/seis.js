function mostrar()
{
let hora;


hora = parseInt(document.getElementById("laHora").value);

switch(hora){
    case hora:
        if(hora >= 7 && hora <= 11){
            alert("Es de mañana");
        }
        else if(hora >=12 && hora <=19 ){
            alert("Es tarde");
        }  
        else if(hora >= 20 && hora < 24 || hora >=0 && hora <=6){
            if(hora >= 20 && hora < 24 ){
            alert ("Es de noche");
            alert ("A dormir");
            }
            else{
                alert ("Es de noche");
            }

        }
        break;
    default:
        alert("La hora no existe");          
}

}
