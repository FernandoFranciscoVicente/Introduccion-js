//Métodos para los arrays

const numeros = [10,20,30,50];

console.table(numeros); //Visualizar arrays correctamente.

//Arrays con constructor (lo mismo)
const meses = ["Enero", "Febrero", "Marzo", "Abril"];

console.table(meses);

//Añadir elementos en un array cuando se conocen los índices del arreglo.
numeros[4] = 60;
console.table(numeros);

//Añadir un elemento al último, sin concer su índice.
numeros.push(70,80,90); //Permite añadir múltiples elementos.
console.table(numeros);


//Añadir un elemento al inicio del array
numeros.unshift(-10,-20,-30);
console.table(numeros);

//////////////////////////////////////////////////////////////////////////
//Para eliminar elementos de un arreglo.

//Elimina el último elemento del arreglo sin conocer su índice.
meses.pop(); 
console.table(meses);

//Elimina el primer elemento del arreglo sin conocer su índice.
meses.unshift();
console.table(meses);

//Elimina el elemento del medio del arreglo. Calculado según el índice del array.
meses.splice(1, 1);//El primer valor es el índice, el segundo es cuántos elementos a partir de ese índice se eliminarán.
console.table(meses);

//////////////////////////////////////////////////////////////////////////

/* 
Es recomendable no modificar los arrays originales y usar REST OPERATOR.
*/

const nuevoArreglo = [...meses, "Mayo", "junio", "julio"];
console.table(nuevoArreglo);
