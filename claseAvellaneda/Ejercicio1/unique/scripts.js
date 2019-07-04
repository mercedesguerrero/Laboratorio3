

Array.prototype.unique= function(a){
    return function(){return this.filter(a)}
}(function(a,b,c){
    return c.indexOf(a)
});

console.log(unique(vector));