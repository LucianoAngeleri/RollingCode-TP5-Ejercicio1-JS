let btnInicio = document.getElementById("btnInicio")
let contenedorJuego = document.getElementById("contenedorJuego")
let formulario = document.querySelector("form")
let numeroGenerado = 0;

btnInicio.addEventListener("click", inicioJuego)
formulario.addEventListener("submit", verResultado)


function generarNumero() {
    return Math.floor(Math.random() * 10) + 1
}

function inicioJuego() {
    numeroGenerado = generarNumero()
    console.log(numeroGenerado)
    contenedorAlertResultado.className = "d-none"
    contenedorJuego.className = "d-block"
    formulario.className = "text-center d-flex flex-column gap-3 px-md-5"
    btnInicio.className = "d-none"
}
function verResultado(e) {
    e.preventDefault();
    let inputNumero = document.getElementById("inputNumero")
    let contenedorAlertResultado = document.getElementById("contenedorAlertResultado")
    let alertResultado = document.getElementById("alertResultado")
    condicion = false;
    if (inputNumero.value == numeroGenerado) {
        contenedorAlertResultado.className = "d-block px-md-5"
        alertResultado.className = "alert alert-success fs-5"
        alertResultado.innerHTML = "Elegiste el número correcto!"
        condicion = true; 
    } else if (inputNumero.value > numeroGenerado) {
        contenedorAlertResultado.className = "d-block px-md-5"
        alertResultado.className = "alert alert-secondary fs-5"
        alertResultado.innerHTML = "El número ingresado es mayor, <strong>elige un número mas bajo</strong>"
        condicion = false;
    } else {
        contenedorAlertResultado.className = "d-block px-md-5"
        alertResultado.className = "alert alert-secondary fs-5"
        alertResultado.innerHTML = "El número ingresado es menor, <strong>elige un número mas alto</strong>"
        condicion = false;
    }
    if (condicion === true) {
        formulario.className = "d-none"
        btnInicio.className = "d-block"
        btnInicio.className = "btn btn-outline-success tn-lg rounded-pill p-4 w-75 align-self-center fs-3"
        btnInicio.innerHTML = "Volver a jugar"
    }
    formulario.reset();
}

