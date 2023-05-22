//import { example } from "./data.js";
// Importar datos desde "./data/lol/lol.js"
import data from "./data/lol/lol.js";
import {cardsAsesinos, cardsLuchadores, cardsTanques, cardsMagos, cardsSoporte, cardsTiradores} from "./data.js";

// Crear un arreglo vacío llamado "card"
let card = [];
// Obtener los valores de la propiedad "data" del objeto "data"
const fullData = Object.values(data.data);

// Limitar los datos a un subconjunto de elementos
const arrayLimitado = fullData.slice(0, 9);

// Iterar sobre cada elemento del arreglo "arrayLimitado"
arrayLimitado.forEach((element) => {
  // Agregar contenido HTML al arreglo "card" usando template literals
  card.push(`
    <div class="containerCard">
      <section class="card">
        <h2>${element.name}</h2>
        <span>${element.title}</span>
        <img src="${element.splash}" alt="img campeones" class="pic">
        <button></button>
      </section>
    </div>
  `);

  // Obtener el elemento del DOM con el ID "campeones-card"
  const contenedorCampeones = document.getElementById("campeones-card");

  // Actualizar el contenido del elemento con el HTML generado por "card" utilizando el método "join"
  contenedorCampeones.innerHTML = card.join("");
});

// Obtener el contenedor del modal en el DOM
const modal_container = document.getElementById("modal_container");

// Función para mostrar el modal
function modal() {
  // Obtener todas las tarjetas de campeones en el DOM
  const btnCard = document.querySelectorAll("#card-Campeones");

  // Iterar sobre cada tarjeta de campeón
  btnCard.forEach((element, i) => {
    element.addEventListener("click", () => {
      // INFOMODAL
      const modal = document.getElementsByClassName("modal");
      modal.appendChild = btnCard[i];

      // Mostrar el modal
      modal_container.classList.add("show");
    });
    const close = document.getElementById("close");
    close.addEventListener("click", () => {
      modal_container.classList.remove("show");
    });
  });
}

// Llamar a la función para mostrar el modal
modal();

// MUETRAS TODOS LOS CAMPEONES👇

// Obtener el botón con el ID "todosLosCampeones"
const btnCampeones = document.getElementById("todosLosCampeones");

// Agregar un evento de escucha al hacer clic en el botón
btnCampeones.addEventListener("click", () => {
  // Vaciar el arreglo "card"
  card = [];

  // Iterar sobre cada elemento en "fullData"
  fullData.forEach((element) => {
    // Agregar contenido HTML al arreglo "card" usando template literals
    card.push(`
      <div class="containerCard">
        <section class="card">
          <h2>${element.name}</h2>
          <span>${element.title}</span>
          <img src="${element.splash}" alt="img campeones" class="pic"><button></button>
        </section>
      </div>
    `);

    // Obtener el elemento del DOM con el ID "campeones-card"
    const contenedorCampeones = document.getElementById("campeones-card");

    // Actualizar el contenido del elemento con el HTML generado por "card" utilizando el método "join"
    contenedorCampeones.innerHTML = card.join("");
  });
});

const justAsesinos = document.getElementById("asesinos");
justAsesinos.addEventListener("click", (cardsAsesinos));
console.log(cardsAsesinos);

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

