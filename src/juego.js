import data from "./data/lol/lol.js";
<<<<<<< HEAD
const fullData = Object.values(data.data); //tengo todos los datos limitamos la full data
const imgSize = 180; //cambiar el tamaño
=======
// Obtenemos todos los datos del objeto data
const fullData = Object.values(data.data);
>>>>>>> 0c4a53400347c27059e456de3eec9a53c5560200

const imgSize = 100; // Tamaño de las imágenes de los campeones (puedes cambiarlo según las necesidades)

const cardPage3 = []; // Array donde almacenaremos las tarjetas de los campeones

// Limitamos la cantidad de campeones que queremos mostrar (en este caso, 4)
const campeonesEnJuego = fullData.slice(0, 4);

// Recorremos los campeones y creamos las tarjetas para cada uno
campeonesEnJuego.forEach((element) => {
  cardPage3.push(`
<<<<<<< HEAD
  <div class="cards">
  <img src="${element.img}" alt="img campeones"  width="${imgSize}">
  <h4>${element.name}</h4>
  </div>
=======
    <div>
      <h3>${element.name}</h3>
      <img src="${element.img}" alt="img campeones" width="${imgSize}">
    </div>
>>>>>>> 0c4a53400347c27059e456de3eec9a53c5560200
  `);

  // Obtenemos el elemento del DOM donde queremos mostrar las tarjetas de los campeones
  const algunosCampeones = document.getElementById("algunosCampeones");

  // Insertamos las tarjetas en el elemento del DOM y las unimos en una cadena de texto
  algunosCampeones.innerHTML = cardPage3.join("");
});
