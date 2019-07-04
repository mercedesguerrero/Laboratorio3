var vec = [4,3,6,5,7,9,11,8,10];

var pares = [];

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


/* for(var i=0; i<vec.length; i++)
{
    if(!vec[i] %2)
    {
        pares.push(vec[i]);
    }
} 

console.log(pares);*/

pares= vec.filter(function(elemento){
    return elemento%2 == 0;
});

console.log(personas.filter(function (p){
    return p.nombre === 'juan';
}));

console.log(pares);