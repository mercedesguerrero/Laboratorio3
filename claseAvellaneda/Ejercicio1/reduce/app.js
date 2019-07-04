var vec = [5,4,3,6,7,3,2];

var personas = [
    {
        nombre: "juan",
        edad: 20
    },
    {
        nombre: "pedro",
        edad: 23
    },
    {
        nombre: "pablo",
        edad: 30
    }
];

/* var contador= 0;

for(var i=0; i<vec.length; i++)
{
    contador += vec[i];
}

console.log("Total: " + contador);
 */

 var x= vec.reduce(function(prev, actual, indice){
     console.log("previo: " + prev + " actual: " + actual + " Indice: " + indice);
     return prev + actual;
 }, 0);

 console.log(x);

 var totalEdad= personas.reduce(function(prev, actual){
    prev.total += actual.edad;
    return prev;
 }, {total:0});//2do parametro objeto vacio

 console.log(totalEdad);

