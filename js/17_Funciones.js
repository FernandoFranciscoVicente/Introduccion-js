//Funciones.

//Declaración de función. Palabara reservada function.
//La función se puede mandar a llamar antes de que la función sea definida y no marcará error.

function sumar(){
    //Cuerpo de función
    console.log(10 + 10);
}

sumar();//La función se manda a llamar.

//////////////////////////////////////////////////////////////////////////


//Expresión de la función.
//La función no se puede mandar a llamar antes de que la función sea definida, pues marcará error.


const sumar2 = function(num1 = 3, num2 = 5){
    console.log(num1 + num2);
}

sumar2();

//////////////////////////////////////////////////////////////////////////

//IFEE.
//Funciones que se llaman/invocan ellas mismas.
//Son útiles para proteger que las funciones no se mezclen las variables y funciones con las de otros archivos.

(function(){
    console.log("Esto es una función IFEE");
})();


//////////////////////////////////////////////////////////////////////////






























