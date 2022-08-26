//Funciones que retornen un valor.

function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2,3);

console.log(resultado)

//////////////////////////////////////////////////////////////////////////


let total = 0; //Se irá incrementando en esta variable.

function agregarCarrito(precio){ //precio es el parámetro
    return total += precio;//retornamos el valor de la variable y le ordenamos que sume el parámetro precio, que aun no está definido.
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200); //muestra el valor inicial y ahora sí asignamos el valor al parámetro.
total = agregarCarrito(10);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);





