/*FOR EACH Y MAP.
ForEach es un método únicamente utilizado en arreglos
*/

//ForEach
//Se ejecuta una vez por cada elemento que existe en el arreglo.

const carrito = [
    {nombre: "Monitor 30 pulgadas", precio: 300},
    {nombre: "Televisión 50 pulgadas", precio: 300},
    {nombre: "Celular", precio: 300},
    {nombre: "Laptop", precio: 300},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audífonos", precio: 300},
    {nombre: "Bocina", precio: 300},
    {nombre: "Consola", precio: 300}

];

//No requiere de una condición que especifique las veces que tiene que iterar, pues lo hará por cada uno de los elementos que existan dentro del arreglo.
carrito.forEach(function(producto){ //Parámetro a la función
    console.log(producto.nombre, "$",producto.precio)
});




console.log("----------------------------------------------------------------------");

//ForEach pero con arrow function.
carrito.forEach(producto => console.log(producto.nombre,"$", producto.precio));

console.log("----------------------------------------------------------------------");

//MAP
//Es muy similar a forEach. Sin embargo, forEach se utiliza cuando quiera iterar sobre un arreglo ya creado y mostrar los elementos en consola se utilia forEach.
//Cuando se quiere utilizar un nuevo arreglo entonces utiliza el Map.

//map
//Está creando un nuevo arreglo.
const arreglo2 = carrito.map(producto => `${producto.nombre
} $ ${producto.precio}`); //Se crea con el formato que indiquemos.
console.log(arreglo2);
