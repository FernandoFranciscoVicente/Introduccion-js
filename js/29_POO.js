//POO

/* Objetct Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, disponibilidad){ //Aquí se ingresan los parámetros
    this.nombre = nombre; //Por buena práctica se dan los mismos nombres a los parámetros a los asignados.
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

const producto2 = new Producto('Monitor curvo de 65"', 800, true); //Aquí se ingresan los argumentos.
//En esta instancia se le da un nombre y un precio al producto (los valores que tendrá el objeto)
const producto3 = new Producto('Laptop hp-pavilon 15-cb00x"', 200, false);

console.log(producto2);
console.log(producto3);












