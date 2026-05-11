let librosLeidos = [];

agregarLibro("Biblia");
agregarLibro("Principito");
agregarLibro("Minion")
mostrarLibrosLeidos(librosLeidos);

function agregarLibro(libro){
    librosLeidos.push(libro);
}

function mostrarLibrosLeidos(libros) {
    for (let libro of libros) { 
        console.log("Libro leido: " + libro);
    }
}
