//import { example } from "./data.js";
import data from "./data/lol/lol.js";
const card = [];
const fullData = Object.keys(data.data);
for (let i = 0; i < fullData.length; i++) {
  const nombres = fullData[i];
  const tituloCampeon = fullData.title;
  console.log(tituloCampeon);
  card.push(`
  <h1 >
  ${nombres}
  </h1>
  `);
  const contenedorCampeones = document.getElementById("campeones");
  contenedorCampeones.innerHTML = card.join("");
  console.log(nombres);
}
