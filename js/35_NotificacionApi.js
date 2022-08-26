/*
NOTIFICATION
La interfaz Notification de la Notificacions API se usa para configurar
y mostrar notificaciones de escritorio. La apariencia y las funcionalidades
específicas de esta notificación varía a trvés de las distintas plataformas,
pero generalmente estas plataformas proveen un camino para proveer 
información al usuario de manera asíncrona.
*/

const boton = document.querySelector("#boton");

boton.addEventListener('click', () =>{
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
})


//Mostrar notificaciones si el usuario permitió recivirlas

if(Notification.permission == "granted"){
    new Notification("Este es el título de la notificación", {
        icon: "img/rnLogo.png",
        body: "Este es el cuerpo de la notificación"
    })
}










