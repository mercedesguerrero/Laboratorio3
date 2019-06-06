
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.getElementById('btnGetPersonas').addEventListener('click', traerPersonas, false);

    document.forms[0].addEventListener('submit', (e)=>{

        e.preventDefault();

        var persona= {};

        persona.nombre= document.getElementById('txtNombre').value;
        persona.apellido= document.getElementById('txtApellido').value;

        agregarPersona(persona);

    }, false);

    
}

function agregarPersona(persona){

    var xhr= new XMLHttpRequest();
    var spinner= document.createElement('img');
    spinner.setAttribute('src', 'images/pacmanGif.gif');
    spinner.setAttribute('alt', 'spinner');
    spinner.setAttribute('style', 'height: 30px');
    var rtaPersona;

    xhr.onreadystatechange= function(){

        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)//200= salio todo bien con la peticion
            {
                rtaPersona= JSON.parse(xhr.responseText);

                console.log(persona);

                document.getElementById('id').value= rtaPersona.id;
                document.getElementById('nombre').value= rtaPersona.nombre;
                document.getElementById('apellido').value= rtaPersona.apellido;
                var spin= document.getElementById('spin')
                spin.removeChild(spin.firstChild);
            }
            else
            {
                console.log('Error: ' + xhr.status + ' ' + xhr.statusText);
            }
        }
        else
        {
            //esto podria estar en una funcion que se llame armar spinner

            document.getElementById('spin').appendChild(spinner);
        }
    };

    xhr.open('POST', 'http://localhost:3000/altaPersona', true);
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(persona));//STRINGIFY pasar a cadena, lo contrario de JSON.parse
}

function personaToString(persona)
{
    var cadena= '';

    for(var prop in persona){

        cadena+= '<b>' + prop + ':</b>' + persona[prop] + ' ';
    }
    return cadena;
}

function traerPersonas(){

    var personas= [];
    var info= document.getElementById('info');

    var lista= '';
    var spinner= document.createElement('img');
    spinner.setAttribute('src', 'images/pacmanGif.gif');
    spinner.setAttribute('alt', 'spinner');

    var xhr= new XMLHttpRequest();
    info.innerHTML='';

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

    xhr.open('GET', 'http://localhost:3000/traerPersonasArray', true);
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





