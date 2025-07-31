let amigos = [];
let listaDeAmigos = document.getElementById("listaAmigos");
let textoDeAmigoSorteado = document.getElementById("resultado")

function agregarAmigo() {
    let amigoActual = document.getElementById("amigo").value;
    textoDeAmigoSorteado.innerHTML = ""; // Borro el antiguo amigo sorteado si es que habia uno
    
    if (amigoActual.trim() === "") {
        alert("Por favor ingresa un nombre");
    } else {
        actualizarLista(amigoActual);
        mostrarListaAmigos();
        document.getElementById("amigo").value = ""; // Limpiar input cada vez q se le agrega un nombre nuevo
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

function sortearAmigo()
{
    listaDeAmigos.innerHTML = "";
    if(amigos.length == 0)
    {
        alert("No agrego ningun amigo a la lista de amigos");
    } else 
    {
        textoDeAmigoSorteado.innerHTML = "El amigo secreto sorteado es: " + nombreAleatorio(amigos);
        amigos = [];
    }
}

function nombreAleatorio(nombres)
{ 
    return nombres[Math.floor(Math.random() * nombres.length)];
}

