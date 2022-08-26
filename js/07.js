//Orden de las operaciones en JS.

let resultado;

//Está aplicando primero la multiplicación, pues ejecuta primero las operaciones con la jerarquía matemática común.

resultado = 20 + 30 * 2;

//Cuando se planea obtener un porcentaje primero se debe realizar la suma total antes de realizar el cálculo con una multiplicación. Aquí se aplican los paréntesis y automáticamente esta se convierte en una operación con mayor jerarquía.

resultado = (100 + 200 + 300) *.2;

console.log(resultado)


//Incrementos

let puntaje = 10;

//Incremento en 1.
puntaje++; //10
++puntaje; //12

console.log(puntaje);

//Decremento en 1.
puntaje--;
--puntaje;

console.log(puntaje);