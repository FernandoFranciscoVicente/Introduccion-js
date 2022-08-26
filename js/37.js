//Trabajar con dos async awaits (o más)
/*
Optimización de async await mejorando el performance de tu sitio web al implementar las
funciones en un arreglo y que, en lugar de que su tiempo de espera de ejecución sea a+b, este
tiempo coincida en sus rangos para hacer una unión y que el tiempo de espera máximo sea el
mismo que el del tiempo de espera de la función más tardía.

*/

function descargarNuevosClientes(){
    return new Promise( resolve =>{ //Sólo podrá obtener los resultados esperados
        console.log("Descargando los clientes, espere...");

        setTimeout( ()=> {
            resolve("Los clientes fueron descargados");
        }, 5000); //Tiempo en milisegundos para simular la carga real.
    })
}

function descargarUltimosPedidos(){
    return new Promise( resolve =>{ //Sólo podrá obtener los resultados esperados
        console.log("Descargando pedidos, espere...");

        setTimeout( ()=> {
            resolve("Los pedidos fueron descargados");
        }, 3000); //Tiempo en milisegundos para simular la carga real.
    })
}

async function app(){ //Asignamos la palabra reservada async a la función.
    try {
        //const resultado = await descargarNuevosClientes()
        //console.log("Este código sí depende de la función anterior, por lo que se bloquearía su aparición.")
        //console.log(resultado);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

//console.log("Aquí podemos tener otra función que se seguirá ejecutando sin esperar resultados de funciones anteriores, pues no son dependientes");


