//Para ejecutar el código de JS de forma estricta se usa "use strict";

//Object Methods

const producto = {
    nombreProducto: "Monitor 250 pulgadas",
    precio: 300,
    disponible: true
}

//Recordemos que si creamos una variable como const no la podemos modificar, por lo que debemos de crear la siguiente función.

Object.freeze(producto); //Impide que al objeto se le añadan más valores.

producto.imagen = 'imagen.jpg'

//////////////////////////////////////////////////////////////////////////

//Para verificar si un objeto está sellado e impide la modificación de atributos usamos:

console.log(Object.isFrozen(producto));

console.log(producto);

//////////////////////////////////////////////////////////////////////////


//Siel y frozen son muy similares, pero Frozen no permite la adición, la modificación ni eliminación, mientras que seal SÍ PERMITE LA MODIFICACIÓN. El resto de restricciones sí las comparten.

Object.seal(producto); 

console.log(Object.isSealed(producto));
