
window.addEventListener('load', inicializarEventos);

function inicializarEventos()
{
    //aca atrapamos el evento submit que lo lanza el formulario (no el botòn)

    document.forms[0].addEventListener('submit', function(e){
        //e trae informacion acerca del evento
        //preventdefault lo que hace es que no haga lo que hace por defecto, sino que yo me encargo
        console.log(document.forms[0]);
        e.preventDefault();

        var informacion= "";
        var rdoSexoM= document.getElementById('rdoMasculino');
        var rdoSexoF= document.getElementById('rdoFemenino');

        informacion+= "Nombre: " + document.getElementById('txtNombre').value + "<br>";
        informacion += "Contraseña: " + document.getElementById('txtClave').value + "<br>";

        if(document.getElementById('chkjs').checked)
        {
            informacion+= "<br> Sabe JavaScript";
        }
        else
        {
            informacion+= "<br> No sabe JavaScript";
        }

        if(rdoSexoM.checked)
        {
            informacion+= "<br> Sexo: " + rdoSexoM.value;
        }
        else
        {
            informacion+= "<br> Sexo: " + rdoSexoF.value;
        }
        
        document.getElementById('info').innerHTML= informacion;
    });
}