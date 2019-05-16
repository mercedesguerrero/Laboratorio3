
var parrafo;
var div;

addEventListener('load', asignarManejadores, false);

function asignarManejadores()
{
    parrafo= document.getElementById('p1');
    
    parrafo.addEventListener('click', manejador);

    parrafo.addEventListener('mouseover', manejador);

    parrafo.addEventListener('mouseout', manejador);
    
}

function manejador(e)
{
    console.log(e.type);
}









