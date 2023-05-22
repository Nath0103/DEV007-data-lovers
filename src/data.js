// estas funciones son de ejemplo
// import data from "./data/lol/lol.js";

export function cardsAsesinos(fullData) {
  const cardsAsesinos = fullData.filter((asesinos) =>
    asesinos.tags.includes("Assassin")
  );
  return cardsAsesinos;
}

export function cardsLuchadores(fullData) {
  const cardsLuchadores = fullData.filter((luchadores) =>
    luchadores.tags.includes("Fighter")
  );
  return cardsLuchadores;
}

export function cardsTanques(fullData) {
  const cardsTanques = fullData.filter((tanques) =>
    tanques.tags.includes("Tank")
  );
  return cardsTanques;
}

export function cardsMagos(fullData) {
  const cardsMagos = fullData.filter((magos) => magos.tags.includes("Mage"));
  return cardsMagos;
}

export function cardsSoporte(fullData) {
  const cardsSoporte = fullData.filter((soporte) =>
    soporte.tags.includes("Support")
  );
  return cardsSoporte;
}

export function cardsTiradores(fullData) {
  const cardsTiradores = fullData.filter((tiradores) =>
    tiradores.tags.includes("Marksman")
  );
  return cardsTiradores;
}

export function dataReversa(fullData) {
  const cardReversa = fullData.reverse();
  return cardReversa;
}
