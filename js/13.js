//Spread Operator

const producto = {
    nombreProducto: "Monitor 250 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg.",
    medida: "1m"
}

//////////////////////////////////////////////////////////////////////////

//Unión de ambos objetos con SPREAD OPERATOR.
/*
Es decir, crea un nuevo producto que contenga todas las propiedades de los objetos especificados sin modificar los elementos originales.
*/

const nuevoProducto ={...producto, ...medidas};

console.log(nuevoProducto);
