//Métodos de propiedad.


//Función dentro de un objeto.
const reproductor = {
    reproducir: function(id, autor){
        console.log(`Reproduciendo canción con el ID: ${id} \nde autor ${autor}` )
    },
    pausar: function(){
        console.log("Pausando...")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

//función fuera del objeto.

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción con ID: ${id}`)
}

//console.log(reproductor); //funciones con sintáxis de método.

reproductor.reproducir(3840, "El cuarteto de nos");
reproductor.pausar();
reproductor.borrarCancion(3840);
reproductor.crearPlaylist("Músiquita");
reproductor.reproducirPlaylist("Musiquita");























