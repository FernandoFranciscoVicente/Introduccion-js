//Arrow function

//Sintáxis básica de arrow function:
const aprendiendo = () => {

}

//Ejemplo
const aprendiendo2 = (tecnologia) =>{
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo2("JS");

//Alternativa
const aprendiendo3 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo3("python");

//////////////////////////////////////////////////////////////////////////
//Reutilizando ejemplo de 15.js

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
meses.forEach(mes => {
    if (mes == "Marzo"){
        console.log("Marzo si existe dentro del array.");
    }
});

console.log("----------------------------------------------------------------------")

//////////////////////////////////////////////////////////////////////////

//Some: Ideal para arreglo de objetos.

//Se puede simplificar a una línea por la eliminación de los paréntesis y las llaves.
//El return queda implícito, por lo que se elimina también.
resultado = carrito.some(producto => producto.nombre === "Celular" //Se tiene que acceder a cada propiedad de los objetos para que funcione bien.
)

console.log(resultado)

//////////////////////////////////////////////////////////////////////////
console.log("----------------------------------------------------------------------")

//REDUCE
//Para sumar toods los precios contenidos en las propiedades de objetos.

//Los paréntesis de dejan cuando hay más de dos parámetros.
resultado = carrito.reduce((total, producto) =>  total + producto.precio , 0); //Se define el valor inicial.
console.log(resultado)

//////////////////////////////////////////////////////////////////////////
console.log("----------------------------------------------------------------------")

//FILTER
resultado = carrito.filter(producto => producto.precio >= 300);

resultado = carrito.filter(producto => producto.nombre !== "Laptop"
);

console.log(resultado);

