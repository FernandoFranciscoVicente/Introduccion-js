/* 
WHILE Y DO WHILE
Crea un bucle que ejecuta una sentencia especificada mientras cierta 
condición se evalúe como verdadera. Dicha condición es evaluada antes de
ejecutar la sentencia.
*/

//While Loop

let i = 0; //Indice

while(i <= 10){ //Condición
    if(i % 2 === 0){
        console.log(`El número ${i} es par.`);
    }
    else{
        console.log(`El número ${i} es impar.`)
    }

    i++; //Incremento

}

console.log("----------------------------------------------------------------------")


//Para iterar con While con el objeto carrito de compras.

//A diferencia de FOR, primero evaluará la condición y después ejecutará el código

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

//Recorrer todo el carrito de compras con un while.

let j = 0;//Indice

while(j < carrito.length){ //Condición.
    console.log(carrito[j].nombre)

    j++; //Incremento
}

console.log("----------------------------------------------------------------------")


//Do while loop
//A difencia del while, el ciclo do while ejecuta el código al menos una vez y después evalúa.

let k = 0;

do{
    console.log(k);
    k++; //Incremento.
} while (k < 10); //Condición.















