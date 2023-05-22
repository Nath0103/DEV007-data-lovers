import data from "./data/lol/lol.js";
const fullData = Object.values(data.data); //tengo todos los datos limitamos la full data
const imgSize = 180; //cambiar el tamaño

const cardPage3 = [];
const campeonesEnJuego = fullData.slice(0, 4);
campeonesEnJuego.forEach((element) => {
  cardPage3.push(`
  <div class="cards">
  <img src="${element.img}" alt="img campeones"  width="${imgSize}">
  <h4>${element.name}</h4>
  </div>
  `);
  const algunosCampeones = document.getElementById("algunosCampeones");
  algunosCampeones.innerHTML = cardPage3.join("");
});
