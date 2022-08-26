
//Objeto

const producto = {
    nombreProducto: "Monitor 250 pulgadas",
    precio: 300,
    disponible: true
}

//Forma anterior de extraer atributos de un objeto.
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;
//const disponibleProducto = producto.disponible;

//console.log(precioProducto);
//console.log(nombreProducto);
//console.log(precioProducto);

//////////////////////////////////////////////////////////////////////////


/*
Destructuring (Nueva forma): Consiste en extraer el valor y trae la variable en un solo paso.
*/


const {precio, nombreProducto} = producto; //Evita repetir código.

console.log(nombreProducto);
console.log(precio);

























