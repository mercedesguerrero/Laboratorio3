
var formulario= document.getElementsByName('formulario')[0];
var elementos= formulario.elements;
var boton= document.getElementById('btn');

formulario.addEventListener("submit", validar);

var validar= function(e){
    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
}

var validarNombre= function(e){
    if(formulario.nombre.value == 0)
    {
        alert("Complete el campo Nombre");
        e.preventDefault();
    }
};

var validarRadio= function(e){
    if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true)
    {
    }
    else{
        alert("Complete el campo sexo");
        e.preventDefault();
    }
};

var validarCheckbox= function(e){
    if(formulario.terminos.checked == false)
    {
        alert("Acepte los terminos");
        e.preventDefault();
    }
};











