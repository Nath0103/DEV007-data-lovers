import data from "./data/lol/lol.js";
const fullData = Object.values(data.data); //tengo todos los datos limitamos la full data
const imgSize = 100; //cambiar el tamaño

const cardPage3 = [];
const campeonesEnJuego = fullData.slice(0, 4);
campeonesEnJuego.forEach((element) => {
  cardPage3.push(`
  <div>
  <h3>${element.name}</h3>
  <img src="${element.img}" alt="img campeones"  width="${imgSize}">
  </div>
  `);
  const algunosCampeones = document.getElementById("algunosCampeones");
  algunosCampeones.innerHTML = cardPage3.join("");
});
