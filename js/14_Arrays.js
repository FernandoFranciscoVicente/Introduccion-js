//Arreglos

const numeros = [10,20,30,50];

console.table(numeros); //Visualizar arrays correctamente.

//Arrays con constructor (lo mismo)
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");

console.table(meses);

//Los arrays pueden tener todo tipo de dato como elemento.
const arreglo = ['Hola', 10, true, 'Sí', null, {nombre: "Fernando", edad:"22", carrera:"ISOF"}, [1,2,3,4,5.5]];

console.table(arreglo);

//////////////////////////////////////////////////////////////////////////


//Acceder a los valores de un array. (Por medio del índice.)
console.log(arreglo[6]);

//Conocer la extensión de un array.
console.log("El array meses tiene:",(meses.length),"elementos.");


//////////////////////////////////////////////////////////////////////////


//Para recorrer todos los elementos de un array:
numeros.forEach( function(numero){
    console.log(numero);
})

arreglo.forEach(function(elemento){
    console.log(elemento);
})






























