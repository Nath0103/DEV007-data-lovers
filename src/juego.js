import data from "./data/lol/lol.js";
// Obtenemos todos los datos del objeto data
const fullData = Object.values(data.data);

const imgSize = 250; // Tamaño de las imágenes de los campeones (puedes cambiarlo según las necesidades)

const cardPage3 = []; // Array donde almacenaremos las tarjetas de los campeones

// Limitamos la cantidad de campeones que queremos mostrar (en este caso, 4)
const campeonesEnJuego = fullData.slice(0, 4);

// Recorremos los campeones y creamos las tarjetas para cada uno
campeonesEnJuego.forEach((element) => {
  cardPage3.push(`
  <div class="cards">
  <img src="${element.img}" alt="img campeones"  width="${imgSize}">
  <h4>${element.name}</h4>
  </div>
  `);

  // Obtenemos el elemento del DOM donde queremos mostrar las tarjetas de los campeones
  const algunosCampeones = document.getElementById("algunosCampeones");

  // Insertamos las tarjetas en el elemento del DOM y las unimos en una cadena de texto
  algunosCampeones.innerHTML = cardPage3.join("");
});
