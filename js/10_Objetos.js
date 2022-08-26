//Objetos en JS.

/*
const nombreProducto = "Monitor 250 pulgadas";
const precio = 300;
const disponible = true;
*/

//Objeto con los elementos como atributos.
const producto = {
    nombreProducto:"Monitor 250 pulgadas",
    precio: 300,
    disponible: true
}

//console.log(producto);

//////////////////////////////////////////////////////////////////////////


//Sintáxis de punto (acceder a una propiedad del objeto)

//console.log("Sintáxis de punto\n",producto.precio);
//console.log(producto.nombreProducto);
//console.log(producto.disponible);


//Manera alternativa sin puntos.
//console.log("Otra manera\n",producto["precio"]);

//////////////////////////////////////////////////////////////////////////


//Modificar objetos.

//Añadir nuevo elemento a objeto existente.

producto.imagen = 'imagen.jpg'
console.log(producto);

//Eliminar un elemento
delete producto.disponible;
console.log(producto);






























