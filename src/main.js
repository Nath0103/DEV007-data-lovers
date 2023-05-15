//import { example } from "./data.js";
import data from "./data/lol/lol.js";
let card = [];
const imgSize = 100;
const fullData = Object.values(data.data); //tengo todos los datos limitamos la full data
const arrayLimitado = fullData.slice(0, 20); //Limita toda la data

arrayLimitado.forEach((element) => {
  // element.slice(0, 19); //para limitarlo

  card.push(`
  <div>
  <h2>${element.name}</h2>
  <img src="${element.splash}" alt="img campeones"  width="${imgSize}">
  </div>
  `);
  const contenedorCampeones = document.getElementById("campeones-card");
  contenedorCampeones.innerHTML = card.join("");
});
//MUETRAS TODOS LOS CAMPEONES👇

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
