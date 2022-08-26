/*Clases en JS.
Son una mejora sintáctica ofrecida en ECMAScript 2015 sobre la herencia 
basada en prototipos de JS. La sintáxis de clases NO introduce un nuevo modelo de herencia orientada a objetos en JS. Las clases de JS proveen una sitnáxis mucho más clara y simple para crear objetos y trabajar con
herencias.

Las clases son funciones especiales como las expresiones de funciones, declaraciones de funciones, la sintáxis de una clase tiene dos componentes: 
1- Expresiones de classes.
2- Declaraciones de clases.
*/

class Producto{
    constructor(nombre, precio, disp){ //constructor es una palabra reservada.
        this.nombre = nombre;
        this.precio = precio;
        this.disp = disp;
    }
    //Método de añadir formato nuevo.
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y una disponibilidad de ${this.disp}`;
    }
}

const producto2 = new Producto('Monitor curvo 25"', 2500, true);
const producto3 = new Producto('Celular poco 3', 1500, false);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());



















