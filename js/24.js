/*Switch en JavaScript.
Se utiliza como la mejor alternativa para prevenir los ifs anidados.
Se evalúan mediante case, finalizan con break y tienen una opción por default.
*/

const metodoPago = "cheque"

switch(metodoPago){ //En el paréntesis se ingresa el elemento a evaluar
    case "tarjeta":
        console.log("Pagaste con tarjeta")
        break;
        case "cheque":
        console.log("Pagaste con cheque, validación de fondos en proceso...")
        break;
        case "efectivo":
        console.log("Pagaste con efectivo, esperaremos que se registre pronto...")
        break;
    default:
        console.log("Aún no has pagado")
        break;
}
