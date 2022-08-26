/*
Fetch API
La API Fetch proporciona una interfaz JS para acceder y manipular partes
del canal HTTP, tales como peticiones y respuestas. También provee un 
método global fetch() que proporciona una forma fácil y lógica de obtener 
recursos de forma asíncrona por la red.
Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por
otras tecnologías como Service Workers. Fetch también aporta un único lugar
lógico en el que definir otros conceptos relacionados con HTTP como CORS
y extensiones para HTTP.

JSON
El objeto JSON contiene métodos para analizar JavaScript Object Nottion y convertir valores a JSON. No puede ser llamado o construido, y a parte de estas dos propiedades, no tiene funcionalidad interesante por sí mismo.
JSON es una sintáxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos. Está basado sobre sintaxis JS pero es diferente de ella: algo JS no es JSON,y algo JSON no es JS.
*/

function obtenerEmpleados(){
    const archivo = 'empleados.json'; //Por que están en la misma carpeta.

    fetch(archivo)
        .then(resultado =>{
        console.log(resultado);
    })
}
obtenerEmpleados();

//Alternativa
//En las arrow function el return se da por implícito.


function obtenerEmpleados2(){
    const archivo = 'empleados.json'; //Por que están en la misma carpeta.

    fetch(archivo)
        .then(resultado =>{
        return resultado.json(); //Obliga a crear un segundo .then
        })
        .then(datos =>{
            console.log(datos);
        })
}
//obtenerEmpleados2(); Se está ejecutando dos veces, pero no deseo eliminar.

//Código comprimido

function obtenerEmpleados2(){
    const archivo = 'empleados.json'; //Por que están en la misma carpeta.

    fetch(archivo)
        .then(resultado => resultado.json()) //Obliga a crear un segundo .then
        .then(datos => {
            //console.log(datos.empleados);

            //Desestructuring
            const {empleados} = datos;
            //console.log(empleados); iterar sobre un arreglo
            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
                //Para mostrarlo dentro del HTML.
                //document.querySelector('.contenido').textContent += empleado.nombre;
            });
        })   
}
obtenerEmpleados2();

//Utilización de async await

async function obtenerEmpleados3(){
    const archivo = 'empleados.json'; //Por que están en la misma carpeta.

    const resultado = await fetch(archivo);
    const datos = await resultado.json();//Esta línea si depende de la anterior.
    console.log(datos);
}
obtenerEmpleados3();













