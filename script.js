let puntos = 0;

function sumarpuntos() {
  puntos += 1;
  const pointsText = `Veces presionado: ${puntos}`;

  document.getElementById('clicked-text').innerText = pointsText;
}