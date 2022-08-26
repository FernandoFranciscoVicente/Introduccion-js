/*
Try Catch
La declaración try catch señala un bloque de instrucciones a intentar (try)
y especifica una respuesta si se produce una excepción (catch).

En JS, cuando ocurre algún error en el código este se detiene y no continúa
ejecutándose, lo que trae conflictos para saber si existen más errores dentro
del mismo.
Try catch permite que se especifique que existe un error, pero que el resto
del código termine de ejecutarse.
*/

const numero1 = 20;
const numero3 = 30;

console.log(numero1)

try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}

console.log(numero3);













