/*Async Await
Cuando se llama a una función async, esta devuelve un elemento Promise. 
Cuando la función async devuelve un valor, Promise se resolverá con el 
valor devuelto. Si la función async genera una excepción o algún valor, 
Promise se rechazará con el valor generado.

Async await pausa la ejecución de la función asíncrona y espera la 
resolución de la Promise pasada y, a continuación, reanuda la ejecución
de la función Async y devuelve el valor resuelto.
*/


function descargarNuevosClientes(){
    return new Promise( resolve =>{ //Sólo podrá obtener los resultados esperados
        console.log("Descargando los clientes, espere...");

        setTimeout( ()=> {
            resolve("Los clientes fueron descargados");
        }, 5000); //Tiempo en milisegundos para simular la carga real.
    })
}

async function app(){ //Asignamos la palabra reservada async a la función.
    try {
        const resultado = await descargarNuevosClientes()
        console.log("Este código sí depende de la función anterior, por lo que se bloquearía su aparición.")
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("Aquí podemos tener otra función que se seguirá ejecutando sin esperar resultados de funciones anteriores, pues no son dependientes");








