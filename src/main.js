//import { example } from "./data.js";
import data from "./data/lol/lol.js";
import {cardsAsesinos, cardsLuchadores, cardsTanques, cardsMagos, cardsSoporte, cardsTiradores} from "./data.js";


let card = [];
const imgSize = 100;
const fullData = Object.values(data.data); //tengo todos los datos limitamos la full data
const arrayLimitado = fullData.slice(0, 20); //Limita toda la data

arrayLimitado.forEach((element) => {
  // element.slice(0, 19); //para limitarlo
  card.push(`
  <div>
  <h2>${element.name}</h2>
  <img src="${element.img}" alt="img campeones"  width="${imgSize}">
  </div>
  `);
  const contenedorCampeones = document.getElementById("campeones-card");
  contenedorCampeones.innerHTML = card.join("");
});
// MUETRAS TODOS LOS CAMPEONES👇

const btnCampeones = document.getElementById("todosLosCampeones");
btnCampeones.addEventListener("click", () => {
  card = [];
  fullData.forEach((element) => {
    // const element = data.data[i];
    // element.slice(0, 19); //para limitarlo

    card.push(`
    <div>
    <h2>${element.name}</h2>
    <img src="${element.img}" alt="img campeones"  width="${imgSize}">
    </div>
    `);
    const contenedorCampeones = document.getElementById("campeones-card");
    contenedorCampeones.innerHTML = card.join("");
  });
});

const justAsesinos = document.getElementById("asesinos");
justAsesinos.addEventListener("click", (cardsAsesinos));

const justLuchadores = document.getElementById("luchadores");
justLuchadores.addEventListener("click", (cardsLuchadores));

const justTanques = document.getElementById("tanques");
justTanques.addEventListener("click", (cardsTanques));

const justMagos = document.getElementById("magos");
justMagos.addEventListener("click", (cardsMagos));

const justSoporte = document.getElementById("soporte");
justSoporte.addEventListener("click", (cardsSoporte));

const justTiradores = document.getElementById("tiradores");
justTiradores.addEventListener("click", (cardsTiradores));





    