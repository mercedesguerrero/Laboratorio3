
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.getElementById('btnGetPersonas').addEventListener('click', traerPersona, false);
    
}

function traerPersona(){

    var txtNombre= document.getElementById('txtNombre');
    var txtApellido= document.getElementById('txtApellido');
    var txtEdad= document.getElementById('txtEdad');
    var personas= [];
    var info= document.getElementById('info');

    var lista= '';
    var spinner= document.createElement('img');
    spinner.setAttribute('src', 'images/pacmanGif.gif');
    spinner.setAttribute('alt', 'spinner');

    var xhr= new XMLHttpRequest();

    xhr.onreadystatechange= function(){

        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                personas= JSON.parse(xhr.responseText);

                info.innerHTML='';

                for (var i in personas) {
                    
                    info.innerHTML+= '<p>' + personaToString(personas[i]) + '</p><hr>';
                }  
                
            }
            else
            {
                console.log('Error: ' + xhr.status + ' ' + xhr.statusText);
            }
        }
        else
        {
            //esto podria estar en una funcion que se llame armar spinner

            info.appendChild(spinner);
        }
    };

    xhr.open('GET', 'http://localhost:3000/traerPersonas', true);
    xhr.send();
}

function personaToString(persona)
{
    var cadena= '';

    for(var prop in persona){

        cadena+= '<b>' + prop + ':</b>' + persona[prop] + ' ';
    }
    return cadena;
}


