
$(document).ready(inicializarManejadores);

function inicializarManejadores(){
    $("#miH1").click(function(){
        /* alert("Click en h1"); */
        var h1= $(this);
        h1.css("color", "blue");
        h1.text("Otro texto");
        /* alert($(this).text()); */
        alert(h1.text());
    });

    var parrafos= $("p");

    parrafos.click(cambiarTexto);

    $("#p3").attr("class", "rojo");/* SETTER */

    var elementoRojos= $(".rojo");

    elementoRojos.click(function() {
        $(this).css("color", "red");
        
    });

    $("div").html("<input type='text'>");

    alert($("#p1").attr("id"));/* GETTER */

    

}

function cambiarTexto() {
    $(this).text("me cambiaron LPM");
    
}

