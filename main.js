import data from "./data/lol/lol.js"; //Importa la Data desde la carpeta lol
import {
  //importa las funciones desde data.js
  cardsAsesinos,
  cardsLuchadores,
  cardsTanques,
  cardsMagos,
  cardsSoporte,
  cardsTiradores,
  ordenarSelect,
} from "./data.js";

const fullData = Object.values(data.data); // A data.data se le nombra fullData para trabajar en la main
const copiaData = fullData.slice(fullData); //se crea una copia de la fullData para trabajar con el sort() y reverse()

let card = []; //se crea una variable que va a contener la informacion de los campeones
/*----------      MUESTRA ARRAY LIMITADO      ---------- */
const arrayLimitado = fullData.slice(0, 9); //array limitado de la full data

campeonesCard(arrayLimitado); //se llama la funcion campeonesCard y como parametro se le pasa nuestro arrayLimitado
/*----------      MUESTRA TODOS LOS CAMPEONES      ---------- */

const btnCampeones = document.getElementById("todosLosCampeones");

btnCampeones.addEventListener("click", () => {
  campeonesCard(fullData);
});

/*----------      FUNCTION CARD      ---------- */

function campeonesCard(dataFilter) {
  card = []; //cada ves que se llame a la funcion campeonesCard() se vacia el array y se llena con nueva informacion
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
  //se crea una variable campeonesSelect y esta va a tenber la funcion ordenarSelect(data, order); se le pasan los parametros de la copia de fulldata y el valor de cambios select
  const campeonesSelect = ordenarSelect(copiaData, cambioDeSelect.value); //(sort())
  /*const campeonesSelect = ordenarSelect(copiaData);*/ //(reverse())
  campeonesCard(campeonesSelect); //se llama a la funcion campeonesCard() y le pasamos campeonesSelect para que nos muestre las card de los campeones de forma ascendente y descendente
});

/*----------      FILTER      ---------- */
const justAsesinos = document.getElementById("asesinos"); //se crea una constante que va a llamar por el id a un botton
justAsesinos.addEventListener("click", () => {
  //cuando la persona le de click al botto se va a llamar a la funcion cardsAsesinos() que esta en data.js
  const filterCampeones = cardsAsesinos(fullData);

  campeonesCard(filterCampeones);
  //se llama a la funcion campeonesCard() y le pasamos filterCampeones para que nos muestre las card de los campeones (DEL FILTRO)
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
