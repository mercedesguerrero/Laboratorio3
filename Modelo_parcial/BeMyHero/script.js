import { Z_BLOCK } from "zlib";

var boton;
var ids= 1;

window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    tableCreate();

    boton= document.getElementById('btnAgregar');

    boton.addEventListener('click', crearFormulario, false);
    
}

function crearFormulario(){

    var div = document.getElementById("miFormu");
    var formu = document.createElement("form");

    //formu.setAttribute('method',"post");
    formu.setAttribute('action',"#");

    var i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");
    i.setAttribute('name',"username");

    var s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Agregar");

    formu.appendChild(i);
    formu.appendChild(s);

    div.appendChild(formu);

    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1px");
    formu.appendChild(tabla);
    crearCabecera(tabla);
    crearCeldas(tabla);

    

    <form action="#">

        <fieldset>

        <table>
            <tr>
                <td><label for= "txtNombre">Nombre:</label></td>
                <td><input type="text" id="txtNombre"></td>
            </tr>
            <tr>
                <td><label for= "txtApellido">Apellido:</label></td>
                <td><input type="text" id="txtApellido"></td>
            </tr>
            <tr>
                    <td><label for= "txtAlias">Alias:</label></td>
                    <td><input type="text" id="txtAlias"></td>
            </tr>
            <tr>
                    <td><label for= "txtEdad">Edad:</label></td>
                    <td><input type="text" id="txtEdad"></td>
            </tr>
            <tr>
                <td><label class="sideSelect">Heroe
                        <input type="checkbox" name="side" id="chkHeroe" checked="checked">
                        <span class="checkmark"></span>
                    </label></td>
                    
                <td><label class="sideSelect">Villano
                        <input type="checkbox" name="side" id="chkVillano">
                        <span class="checkmark"></span>
                    </label></td>                    
            </tr>
            <tr>
                <td><input type="Submit" value="Agregar"></td>
                <td><input type="Submit" value="Cancelar"></td>
            </tr>
        </table>

    </fieldset>

    </form>

    

}

function leeDatosFormulario()
{
    document.forms[0].addEventListener('submit', (e)=>{

        e.preventDefault();

        var persona= {};

        persona.nombre= document.getElementById('txtNombre').value;
        persona.apellido= document.getElementById('txtApellido').value;
        persona.edad= document.getElementById('txtEdad').value;

        agregarPersona(personas);

    }, false);
}

function llamaModificar(){

    document.forms[1].addEventListener('submit', (e)=>{

        e.preventDefault();

        var persona= {};

        
        persona.id= document.getElementById('idMod').value;
        persona.nombre= document.getElementById('nombreMod').value;
        persona.apellido= document.getElementById('apellidoMod').value;
        persona.edad= document.getElementById('edadMod').value;

        modificarPersona(persona);

    }, false);

}


function tableCreate() {
    var div = document.getElementById("info");
    var tabla = document.createElement("table");
    tabla.setAttribute("border", "1px");
    div.appendChild(tabla);
    crearCabecera(tabla);
    crearCeldas(tabla);
}

function crearCabecera(tabla){
    //tr= table row (fila)
    var filaCabecera = document.createElement("tr");
    var atributo;
    var columna;
    var texto;

    tabla.appendChild(filaCabecera);

    for(atributo in personas[0])
    {
        console.log(atributo);//atributo es la clave-- usuarios[prop] devuelve el valor

        columna = document.createElement("th");
        filaCabecera.appendChild(columna);
        texto = document.createTextNode(atributo);
        columna.appendChild(texto);
    }
}

function crearCeldas(tabla){

    for(var i = 0; i < personas.length; i++)
    {
        var filaNueva = document.createElement("tr");
        var atributo;
        var columna;
        var texto;
        tabla.appendChild(filaNueva);
        for(atributo in personas[i])
        {
            columna = document.createElement("td");
            filaNueva.appendChild(columna);
            texto = document.createTextNode(personas[i][atributo]);
            columna.appendChild(texto);
        }
    }
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
                document.getElementById('edad').value= rtaPersona.edad;
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

function modificarPersona(persona){

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

    xhr.open('POST', 'http://localhost:3000/modificarPersona', true);
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
                usuarios= JSON.parse(xhr.responseText);

                info.innerHTML='';

                for (var i in usuarios) {
                    
                    info.innerHTML+= '<p>' + personaToString(usuarios[i]) + '</p><hr>';
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




  