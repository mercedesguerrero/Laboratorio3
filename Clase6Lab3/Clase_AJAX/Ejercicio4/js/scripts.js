
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.getElementById('btnGetPersona').addEventListener('click', traerPersona, false);
    
}

function traerPersona(){

    var txtNombre= document.getElementById('txtNombre');
    var txtApellido= document.getElementById('txtApellido');
    var txtEdad= document.getElementById('txtEdad');
    var persona;
    var info= document.getElementById('info');

    var spinner= document.createElement('img');
    spinner.setAttribute('src', 'images/pacmanGif.gif');
    spinner.setAttribute('alt', 'spinner');

    var xhr= new XMLHttpRequest();

    xhr.onreadystatechange= function(){

        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                persona= JSON.parse(xhr.responseText);
                txtNombre.value= persona.apellido;
                txtApellido.value= persona.apellido;
                txtEdad.value= persona.edad;
                info.innerHTML= "";
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

    xhr.open('GET', 'http://localhost:3000/traerJSON', true);
    xhr.send();
}


