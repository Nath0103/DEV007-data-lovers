//import { example } from "./data.js";
// Importar datos desde "./data/lol/lol.js"
import data from "./data/lol/lol.js";
import {
  cardsAsesinos,
  cardsLuchadores,
  cardsTanques,
  cardsMagos,
  cardsSoporte,
  cardsTiradores,
  ordenarSelect,
} from "./data.js";

const fullData = Object.values(data.data);
let card = [];
/*----------      MUESTRA ARRAY LIMITADO      ---------- */
const arrayLimitado = fullData.slice(0, 9);

campeonesCard(arrayLimitado);
/*----------      MUESTRA TODOS LOS CAMPEONES      ---------- */

const btnCampeones = document.getElementById("todosLosCampeones");

btnCampeones.addEventListener("click", () => {
  campeonesCard(fullData);
});

/*----------      FUNCTION CARD      ---------- */

function campeonesCard(dataFilter) {
  card = [];
  dataFilter.forEach((element) => {
    card.push(`
        <div class="containerCard">
          <section class="card">
            <h2>${element.name}</h2>
            <span>${element.title}</span>
            <img src="${element.splash}" alt="img campeones" class="pic"><button></button>
          </section>
        </div>
      `);

    const contenedorCampeones = document.getElementById("campeones-card");

    contenedorCampeones.innerHTML = card.join("");
  });
}
/*----------      ORDENAR DATA ASCENDENTE Y DESCENDENTE   ---------- */
const cambioDeSelect = document.getElementById("ordenar-select");

cambioDeSelect.addEventListener("change", () => {
  const campeonesSelect = ordenarSelect(fullData);
  campeonesCard(campeonesSelect);
});

/*----------      FILTER      ---------- */
const justAsesinos = document.getElementById("asesinos");
justAsesinos.addEventListener("click", () => {
  const filterCampeones = cardsAsesinos(fullData);
  campeonesCard(filterCampeones);
});

const justLuchadores = document.getElementById("luchadores");
justLuchadores.addEventListener("click", () => {
  const filterCampeones = cardsLuchadores(fullData);
  campeonesCard(filterCampeones);
});

const justTanques = document.getElementById("tanques");
justTanques.addEventListener("click", () => {
  const filterCampeones = cardsTanques(fullData);
  campeonesCard(filterCampeones);
});
const justMagos = document.getElementById("magos");
justMagos.addEventListener("click", () => {
  const filterCampeones = cardsMagos(fullData);
  campeonesCard(filterCampeones);
});
const justSoporte = document.getElementById("soporte");
justSoporte.addEventListener("click", () => {
  const filterCampeones = cardsSoporte(fullData);
  campeonesCard(filterCampeones);
});
const justTiradores = document.getElementById("tiradores");
justTiradores.addEventListener("click", () => {
  const filterCampeones = cardsTiradores(fullData);
  campeonesCard(filterCampeones);
});
