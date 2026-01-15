const cronometro = document.getElementById("cronometro");
const botonInicioPause = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloTiempo;
let estado = "pausado";

function actualizarCronometro() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosFormato = asignarFormato(segundos);
  const minutosFormato = asignarFormato(minutos);
  const horasFormato = asignarFormato(horas);
  cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
}

function asignarFormato(unidadTiempo) {
  return unidadTiempo < 10 ? "0" + unidadTiempo : unidadTiempo;
}

botonInicioPause.addEventListener("click", () => {
  if (estado === "pausado") {
    intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPause.innerHTML = "<i class='bi bi-pause-fill'></i>";
    botonInicioPause.classList.remove("iniciar");
    botonInicioPause.classList.add("pausar");
    estado = "iniciado";
  } else {
    window.clearInterval(intervaloTiempo);
    botonInicioPause.innerHTML = "<i class='bi bi-play-fill'></i>";
    botonInicioPause.classList.remove("pausar");
    botonInicioPause.classList.add("iniciar");
    estado = "pausado";
  }
});

botonReiniciar.addEventListener("click", () => {
  window.clearInterval(intervaloTiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerText = "00:00:00";
});
