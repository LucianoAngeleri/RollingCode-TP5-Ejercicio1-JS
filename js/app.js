let btnInicio = document.getElementById("btnInicio")
let contenedorJuego = document.getElementById("contenedorJuego")
btnInicio.addEventListener("click",mostrarForm)
let inputNumero = document.getElementsByName("inputNumero")

let numeroAleatorio = 0;

function mostrarForm(){
    console.log("Desde mostrarForm")
    numeroAleatorio = Math.floor(Math.random() * 10)
    btnInicio.innerHTML = "Volver a comenzar"
    btnInicio.className = "btn btn-danger fs-3"
    contenedorJuego.className = "visible"

}