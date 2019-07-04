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

console.log(personas.filter(function(p){
    return p.edad<30;
}).map(function(p){
    return p.nombre;
}).reduce(function (prev, actual){
    return prev += actual.length;
}, 0)
);