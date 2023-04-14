let btnInicio = document.getElementById("btnInicio")
let contenedorJuego = document.getElementById("contenedorJuego")
let formulario = document.querySelector("form")
let numeroGenerado = 0;

btnInicio.addEventListener("click",inicioJuego)
formulario.addEventListener("submit",verGanador)


function generarNumero(){
    return Math.floor(Math.random() * 10)+1
}

function inicioJuego(){
    numeroGenerado = generarNumero()
    console.log(numeroGenerado)
    console.log(typeof(numeroGenerado))
    contenedorJuego.className = "visible"
    btnInicio.className = "btn btn-danger fs-3"
    btnInicio.innerHTML = "Volver a comenzar"
}
function verGanador(e){
    e.preventDefault();
    let inputNumero = document.getElementById("inputNumero")
    if (inputNumero.value == numeroGenerado) {
        console.log("Adivinaste el número")
    }else if(inputNumero.value >= numeroGenerado){
        console.log("El número que elegiste es mayor")
    }else{
        console.log("El número que elegiste es menor")
    }
    formulario.reset();
}

