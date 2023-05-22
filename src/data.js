// estas funciones son de ejemplo
import data from "./data/lol/lol.js";

const fullData = Object.values(data.data); //tengo todos los datos limitamos la full data

/*const tags = fullData.map((campeon) => {
  return campeon.tags;
});
console.log(tags);*/

export function cardsAsesinos (data, condition) {
  const cardsAsesinos = fullData.filter(asesinos => asesinos.tags.includes("Assassin"));
  return cardsAsesinos;
};

export function cardsLuchadores (data, condition) {
  const cardsLuchadores = fullData.filter(luchadores => luchadores.tags.includes("Fighter"));
  return cardsLuchadores;
};

export function cardsTanques (data, condition) {
  const cardsTanques = fullData.filter(tanques => tanques.tags.includes("Tank"));
  console.log(cardsTanques);
};

export function cardsMagos (data, condition) {
  const cardsMagos = fullData.filter(magos => magos.tags.includes("Mage"));
  console.log(cardsMagos);
};

export function cardsSoporte (data, condition) {
  const cardsSoporte = fullData.filter(soporte => soporte.tags.includes("Support"));
  console.log(cardsSoporte);
};

export function cardsTiradores (data, condition) {
  const cardsTiradores = fullData.filter(tiradores => tiradores.tags.includes("Marksman"));
  console.log(cardsTiradores);
};


export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};
