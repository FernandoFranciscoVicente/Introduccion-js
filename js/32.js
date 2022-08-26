/*
Herencias
JavaScript solo tiene una estructura de herencia: Objetos.
Cada objeto tiene una propiedad privada (Referida como su Prototype) que mantiene un enlace a otro objeto llamado su prototipo. Ese objeto tiene su 
propio prototipo, y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es null. Por definición, null no tiene prototipo, y actúa como el enlace final de esa cadena de prototipos.

Casi todos los objetos en JavaScript son instancias de object que se sitúa a la cabeza de la cadena de prototipos.

JS no tiene "métodos" en la forma que los lenguajes basados en clases los define. En JS cualquier función puede añadirse a un objeto como una propiedad. Una función heredada se comporta como cualquier otra propiedad.
*/



class Producto{
    constructor(nombre, precio, disp){ //constructor es una palabra reservada.
        this.nombre = nombre;
        this.precio = precio;
        this.disp = disp
    }
    //Método de añadir formato nuevo.
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio} y su disponibilidad es ${this.disp}`;
    }
}

const producto2 = new Producto('Monitor curvo 25"', 2500, false);
const producto3 = new Producto('Celular poco 3', 1500, true);

//Herencia
//Evita redundancia en el código.
//Está heredando el constructor y los métodos.
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);//Sólo lo que existe en la clase padre.
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro("JavaScript: la revolución", 120, "9732974927");

console.log(producto2.formatearProducto());
console.log(libro.formatearProducto());



