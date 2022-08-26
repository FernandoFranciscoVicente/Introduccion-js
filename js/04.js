//Tipos de datos en JS.

const producto = 'Monitor de 20 pulgadas'; //Cadena de texto
const producto2 = String('Monitor de 30 pulgadas');

//Siempre que se defina el constructor new terminan siendo objetos
//no strings.
const producto3 = new String('Monitor de 400 pulgadas');

console.log(typeof producto)//Imprimir el tipo de dato de una constante
console.log(typeof producto2)
console.log(typeof producto3)

//Para mostrar un string con comillas como parte del string es necesario escapar esas comillas como se muestra a continuación / o simplemente lo declaras con comillas simples y no se require escapar nada.

const producto4 = 'Monitor de 20"';

console.log(producto4)


/*LENGTH
Para conocer la extesión de las cadenas de texto, únicamente de las cadenas de texto:*/

const producto5 = 'La verdad no sé que estoy haciendo con mi vida. Al principio era divertido pero ahora quiero dejar el camino'

console.log(producto5.length + " No estés triste, vro. :c");


/*IndexOf 
(Retorna posición de un carácter dentro de una cadena de texto*/
console.log(producto5.indexOf('divertido'));
console.log(producto5.indexOf('feliz'));

/*Includes
Retorna true o false si encuentra un caracter o conjunto de caracteres en una cadena de texto*/

console.log(producto5.includes('divertido'));
console.log(producto5.includes('feliz'));