
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.forms[0].addEventListener('submit', function(e){

        e.preventDefault();

        manejarSubmit();
    });
    
}

function manejarSubmit(){

    var nombre= document.getElementById('txtNombre').value;
    var apellido= document.getElementById('txtApellido').value;
    var datos= 'nombre=' + encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido);
    var info= document.getElementById('info');
    info.innerHTML= "";
    var spinner= document.createElement('img');
    spinner.setAttribute('src', 'images/pacmanGif.gif');
    spinner.setAttribute('alt', 'spinner');

    var xhr= new XMLHttpRequest();

    xhr.onreadystatechange= function(){

        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                info.innerHTML= xhr.responseText;
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

    xhr.open('POST', 'http://localhost:3000/enviarDatos', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//cabecera de la peticion
    console.log(datos);
    xhr.send(datos);
}


