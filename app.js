// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); // Eliminar espacios en blanco al inicio y final

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre."); // Mostrar alerta si el campo está vacío
        return; // Salir de la función si no hay nombre válido
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo); // Añadir el nombre al array
    inputAmigo.value = ""; // Limpiar el campo de entrada

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// 3. Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el arreglo y agregar cada nombre como un elemento <li>
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al contenido del <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// 4. Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, añade algunos nombres primero.");
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Limpiar el array y la lista de amigos
    amigos = []; // Vaciar el array
    actualizarListaAmigos(); // Actualizar la lista en la interfaz
}