/* 
FOR LOOPS
Los bucles son útiles si se desea ejecutar el mismo código una y otra vez, cada vez con un valor diferente
Es decir, irá ejecutando un código mientras una condición sea evaluada como verdadera. El código deja de ejecutarse cuando la condición se deja de cumplir.
*/

//For loop
//Siempre inician desde el índice 0.
//Mientras i sea igual a cero y, a su vez menor a 10, entonces se irá sumando de uno en uno hasta que la condición se deje de cumplir. (Antes de que i sea igual a 10)


for(let i = 1; i < 10; i++){
    if(i % 2 === 0){ //El módulo evalúa el residuo.
        console.log(`El número ${i} es par.`);
    } 
    else{
        console.log(`El número ${i} es impar.`);
    }
}

console.log("----------------------------------------------------------------------")


//Los ciclos FOR son una excelente alternativa para iterar sobre un arreglo.

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

//Recorrer todo el carrito de compras con un FOR
for(let i = 0; i < carrito.length; i++){ 
    console.log(carrito[i].nombre, "$",carrito[i].precio); //Sólo accede al nombre de todos los elementos del objeto, como un resúmen de compras de una ecommerce.
}














