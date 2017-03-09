var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
 return 
}

function agregarEstudiante( estudiantes){

}
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
   var numeroEstudiantes = parseInt(prompt("estudiantes"));
   
   var estudiantes = [];
   for (var i = 0 , i < numeroEstudiantes; i ++){
    var agregarEstudiante = prompt("Ingresa el nombre" + i);
    var puntosTecnicos = prompt("Ingresa los puntosTecnico"+ i);
    var puntosHSE = prompt("Ingresa los puntosHse");
    var  variableArreglo = {};
    estudiantes.nombre = nombre;
    estudiantes.puntosTecnicos = puntosTecnicos;
    estudiantes.puntosHSE = puntosHSE;
    estudiantes.push(estudiante);
   // document.write(estudiante.nombre + estudiante.puntosTecnicos + estudiante.puntosHSE);
   
    console.log(agregarEstudiantes);
    //return estudiantes;
   }

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante + "</p>";
    resultado += "</div >";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    
   script type = " estudiantes"
   var document.getElementById('estudiante');
    
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    return nombre + estudiantes + ! );

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    
    topTecnico.sort(function(a , b){
        return a-b;
    });

    return topTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    
    topHSE.sort(function(a,b){
        return a-b;
    });
    return topHSE;
}