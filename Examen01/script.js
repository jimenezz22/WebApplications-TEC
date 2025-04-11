let index = 0;
let timer = null;
const luces = ['roja', 'amarilla', 'verde'];
const modoTexto = document.getElementById('modo');

function encenderLuz(color) {
  document.querySelectorAll('.luz').forEach(l => l.classList.remove('active'));
  document.querySelector(`.${color}`).classList.add('active');
}

function cambiarLuz(color) {
  clearInterval(timer);
  encenderLuz(color);
  modoTexto.textContent = 'Estático';
}

function modoAutomatico() {
  modoTexto.textContent = 'Automático';
  index = 0;
  encenderLuz(luces[index]);
  clearInterval(timer);
  timer = setInterval(() => {
    index = (index + 1) % luces.length;
    encenderLuz(luces[index]);
  }, 5000);
}

modoAutomatico(); 
