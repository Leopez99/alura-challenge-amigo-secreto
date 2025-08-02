let amigos = [];
let listaDeAmigos = document.getElementById("listaAmigos");
let textoDeAmigoSorteado = document.getElementById("resultado");

function agregarAmigo() {
    let amigoActual = document.getElementById("amigo").value;
    textoDeAmigoSorteado.innerHTML = "";
    
    if (amigoActual.trim() === "") {
        alert("Por favor ingresa un nombre");
    } else {
        actualizarLista(amigoActual);
        mostrarListaAmigos();
        document.getElementById("amigo").value = "";
    }
}

function actualizarLista(nombre) {
    amigos.push(nombre);
}

function mostrarListaAmigos() {
    listaDeAmigos.innerHTML = "";

    // Agregar cada amigo con un <li>
    for (let i = 0; i < amigos.length; i++) {
        listaDeAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    listaDeAmigos.innerHTML = "";

    if (amigos.length === 0) {
        alert("No agregaste ningún amigo a la lista");
    } else {
        textoDeAmigoSorteado.innerHTML = "El amigo secreto sorteado es: " + nombreAleatorio(amigos);
        var borrarLista = document.getElementById("checkbox-borrar").checked;
        if (borrarLista) {
            amigos = [];
        }
        mostrarListaAmigos();
    }
}

function nombreAleatorio(nombres) { 
    return nombres[Math.floor(Math.random() * nombres.length)];
}

//Agrega elementos presionando Enter
document.getElementById("amigo").addEventListener(
    "keydown", function(event) {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    }
);

