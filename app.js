let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.getElementById("instrucciones");
let contenedorPuntosUsuarios = document.getElementById("puntos-usuario");
let contenedorPuntosPC = document.getElementById("puntos-computadora");
let mensaje = document.getElementById("mensaje");
let contenedoGanaPunto = document.getElementById("gana-punto");
let elegirTuArma = document.getElementById("elegir-tu-arma");

let contenedorEleccionUsuario = document.getElementById("eleccion-usuario");
let contenedorEleccionPC = document.getElementById("eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach((boton) => {
  boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
  let eleccionPC = Math.floor(Math.random() * 3);
  let eleccionUsuario = e.currentTarget.id;

  //piedra => 0
  //papel => 1
  //tijera => 2

  if (eleccionPC === 0) {
    eleccionPC = "piedra🪨";
  } else if (eleccionPC === 1) {
    eleccionPC = "papel📄";
  } else if (eleccionPC === 2) {
    eleccionPC = "tijera✂️";
  }

  if (
    (eleccionUsuario === "piedra🪨" && eleccionPC === "tijera✂️") ||
    (eleccionUsuario === "tijera✂️" && eleccionPC === "papel📄") ||
    (eleccionUsuario === "papel📄" && eleccionPC === "piedra🪨")
  ) {
    ganaUsuario();
  } else if (
    (eleccionPC === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
    (eleccionPC === "tijera✂️" && eleccionUsuario === "papel📄") ||
    (eleccionPC === "papel📄" && eleccionUsuario === "piedra🪨")
  ) {
    ganaPc();
  } else {
    empate();
  }

  mensaje.classList.remove("disabled");
  contenedorEleccionUsuario.innerText = eleccionUsuario;
  contenedorEleccionPC.innerText = eleccionPC;

  if (puntosUsuario === 5 || puntosPC === 5) {
    if (puntosUsuario === 5) {
      instrucciones.innerText = "🔥¡Ganaste el juego!🔥";
    }

    if (puntosPC === 5) {
      instrucciones.innerText = "😭¡Perdiste el juego!😭";
    }
    elegirTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego);
  }
}

function ganaUsuario() {
  puntosUsuario++;
  contenedorPuntosUsuarios.innerText = puntosUsuario;
  contenedoGanaPunto.innerText = "¡Ganaste un punto!🔥";
}

function ganaPc() {
  puntosPC++;
  contenedorPuntosPC.innerText = puntosPC;
  contenedoGanaPunto.innerText = "¡La computadora ganó un punto!😭";
}

function empate() {
  contenedoGanaPunto.innerText = "¡Empate!😮";
}

function reiniciarJuego() {
  reiniciar.classList.add("disabled");
  elegirTuArma.classList.remove("disabled");
  mensaje.classList.add("disabled");

  puntosUsuario = 0;
  puntosPC = 0;

  contenedorPuntosUsuarios.innerText = puntosUsuario;
  contenedorPuntosPC.innerText = puntosPC;
  instrucciones.innerText = "El primero en llegar a 5 puntos gana.";
}
