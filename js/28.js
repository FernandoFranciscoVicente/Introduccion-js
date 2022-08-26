//This.
/*
Se utiliza cuando se requiere invocar a algún atributo de algún arreglo dentro de una función.

Es importante mencionar que al no ser atributos globales, sino de un arreglo, estos sólo podrán ser accedidos si se encuentran dentro de la función.

Si se requiere usar arrow function en lugar del function tradicional y declarar this para acceder a un valor dentro del arreglo, esto no podrá ser posible sin antes haberlo declarado en la ventana global.
*/

//Para declarar en contexto global.
//Utilizar arrow function con this.
window.nombre = "Un tal yo";

const reservacion3 = {
    total: 60000,
    pagado: true,
    informacion: () => {
        console.log(`${this.nombre}`);
    }
}

console.log("----------------------------------------------------------------------");


const reservacion = {
    nombre: "Fernando",
    apellido: "Francisco",
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}

const reservacion2 = {
    nombre: "Pedro",
    apellido: "Sinapellido",
    total: 4000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`)
    }
}

reservacion.informacion();
reservacion2.informacion();
reservacion3.informacion();



































