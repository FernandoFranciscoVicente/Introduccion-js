//Métodos de arrays.

//Arreglo unidimensional:
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

//Arreglo de objetos
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

//Para verificar si un elemento existe dentro de un array.

//forEach: Recorre el arreglo elemento por elemento comprobando la condicional especificada.
meses.forEach(function(mes){
    if (mes == "Marzo"){
        console.log("Marzo si existe dentro del array.");
    }
});

//////////////////////////////////////////////////////////////////////////


//Includes: Sólo regresa un boolean de la validación.
//Sólo funciona bien en un array unidimensional.
let resultado = meses.includes("Marzo");
console.log(resultado);

//////////////////////////////////////////////////////////////////////////

//Some: Ideal para arreglo de objetos.
resultado = carrito.some(function(producto){
    return producto.nombre === "Celular" //Se tiene que acceder a cada propiedad de los objetos para que funcione bien.

})

console.log(resultado)

//////////////////////////////////////////////////////////////////////////

//REDUCE
//Para sumar todos los precios contenidos en las propiedades de objetos.

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); //Se define el valor inicial.

console.log(resultado)


//FILTER
resultado = carrito.filter(function(producto){
    return producto.precio >= 300
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== "Laptop"
});

console.log(resultado);















