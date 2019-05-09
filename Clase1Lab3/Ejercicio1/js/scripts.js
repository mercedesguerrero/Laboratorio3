//aca puedo poner codigo java script

        //var titulo= document.getElementById('miH1')

        window.addEventListener('load', inicializarEventos);


        function inicializarEventos()
        {
            var imagen= document.getElementsByTagName('img')[0];

            imagen.addEventListener('mouseover', function(e){

                e.target.setAttribute('src', './Koala.jpg');
            });
        }


        function cambiarColor()
        {
            var h1= document.getElementById('miH1');

            h1.style.color= "blue";

        }

        