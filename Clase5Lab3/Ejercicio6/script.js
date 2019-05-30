
var boton;
var ids= 1;

addEventListener('load', function(){

    boton= document.getElementById('btnRun');

    boton.addEventListener('click', tableCreate, false);
}, false);



function ejecutar(){

    //armar una tabla con las personas

   console.log(personas);
    
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
        console.log(atributo);//atributo es la clave-- personas[prop] devuelve el valor

        columna = document.createElement("th");
        filaCabecera.appendChild(columna);
        texto = document.createTextNode(atributo);
        columna.appendChild(texto);
    }
}

function crearCeldas(tabla){

    for(var i = 0; i < personas.length; i++)
    {
        var filaCabecera = document.createElement("tr");
        var atributo;
        var columna;
        var texto;
        tabla.appendChild(filaCabecera);
        for(atributo in personas[i])
        {
            columna = document.createElement("td");
            filaCabecera.appendChild(columna);
            texto = document.createTextNode(personas[i][atributo]);
            columna.appendChild(texto);
        }
    }
}

  