/*
Prototype
Permite crear funciones que sólo se utilizarán en un objeto específico.
*/


// Object Constructor
function Producto(nombre, precio, disponibilidad){ //Aquí se ingresan los parámetros
    this.nombre = nombre; //Por buena práctica se dan los mismos nombres a los parámetros a los asignados.
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

function Cliente(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente ${this.nombre} ${this.apellido} tiene ${this.edad} años`;
}

//Proyotype
//Debe tener el mismo nombre de la clase.
Producto.prototype.formatearProducto = function(){ //Queda implícito el parámetro
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y una disponibilidad de ${this.disponibilidad}`;
}

//Aquí se ingresan los argumentos.
//En esta instancia se le da un nombre y un precio al producto (los valores que tendrá el objeto).
const producto2 = new Producto('Monitor curvo de 65"', 800, true); 
const producto3 = new Producto('Laptop hp-pavilon 15-cb00x', 200, false);
const cliente1 = new Cliente("Fernando", "Francisco", 22);
const cliente2 = new Cliente("August", "Comte", 500);


//function formatearProducto(producto){
//    return `El producto ${producto.nombre} tiene un precio de $ $//{producto.precio} y una disponibilidad de ${producto.disponibilidad}`;
//}


console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente1.formatearCliente());
console.log(cliente2.formatearCliente());












