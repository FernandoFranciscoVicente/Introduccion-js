/* 
Promise
El objeto promise es usado para computadoras asíncronas. 
Refleja un valor que podrá estar disponible ahora, en un futuro o nunca.
*/

//Declaración de un promise con arrow function.
const usuarioAutenticado = new Promise((resolve, reject) =>{ //Valores por default de un primise.
    const auth = 1;

    if(auth){
        resolve("¡Usuario autenticado!"); //El promise se cumple.
    }else{
        reject("No se pudo iniciar sesión"); //El promise no se cumple.
    }
})

//Sólo imprime el estado del promise.
console.log(usuarioAutenticado);

//Lee el valor que tenga Promise
usuarioAutenticado
    .then(function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)
    })

//Lo mismo pero con arrow function.
usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));



/*En los Promises existen 3 valores.

1- Pending: No se ha cumplido pero tampoco se ha rechazado.
2- Fulfilled: Ya se cumplió.
3- Reject: Se ha rechazado o no se pudo cumplir.


*/

















