
var boton;
var ids= 1;

var persona = {
    "Nombre": "Raul",
    "Apellido": "Perez",
    "Edad": 40
  };

addEventListener('load', function(){

    boton= document.getElementById('btnRun');

    boton.addEventListener('click', tableCreate, false);
}, false);


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

    for(atributo in usuarios[0])
    {
        console.log(atributo);//atributo es la clave-- usuarios[prop] devuelve el valor

        columna = document.createElement("th");
        filaCabecera.appendChild(columna);
        texto = document.createTextNode(atributo);
        columna.appendChild(texto);
    }
}

function crearCeldas(tabla){

    for(var i = 0; i < usuarios.length; i++)
    {
        var filaNueva = document.createElement("tr");
        var atributo;
        var columna;
        var texto;
        tabla.appendChild(filaNueva);
        for(atributo in usuarios[i])
        {
            columna = document.createElement("td");
            filaNueva.appendChild(columna);
            texto = document.createTextNode(usuarios[i][atributo]);
            columna.appendChild(texto);
        }
    }
}

addEventListener('load', function(){

    boton= document.getElementById('btnAlta');

    boton.addEventListener('click', crearFormulario, false);
}, false);

function crearFormulario(){

    
}


  