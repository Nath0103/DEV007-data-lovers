/*----------      FILTER      ---------- */
//se crea una funcion para filtrar (que se va a exportar en este caso a la main.js) los campeones que son asesinos
export function cardsAsesinos(fullData) {
  //fullData = parametro que va a ser cambiado en la main.js
  //creamos una constante que va a contener el parametro y despues se usa el metodo filter
  const cardsAsesinos = fullData.filter(
    (asesinos) => asesinos.tags.includes("Assassin") // 👆 (asesinos) va a recorrer (fulldata = parametro) y va a introducirse en tags y va a incluir solo a los campeones que consiga con el nombre Assassin
  );
  return cardsAsesinos; //retorna a todos Assassin
}

export function cardsLuchadores(fullData) {
  const cardsLuchadores = fullData.filter((luchadores) =>
    luchadores.tags.includes("Fighter")
  );
  return cardsLuchadores;
}

export function cardsTanques(fullData) {
  const cardsTanques = fullData.filter((tanques) =>
    tanques.tags.includes("Tank")
  );
  return cardsTanques;
}

export function cardsMagos(fullData) {
  const cardsMagos = fullData.filter((magos) => magos.tags.includes("Mage"));
  return cardsMagos;
}

export function cardsSoporte(fullData) {
  const cardsSoporte = fullData.filter((soporte) =>
    soporte.tags.includes("Support")
  );
  return cardsSoporte;
}

export function cardsTiradores(fullData) {
  const cardsTiradores = fullData.filter((tiradores) =>
    tiradores.tags.includes("Marksman")
  );
  return cardsTiradores;
}
/*----------      ORDENAR DATA  ASCENDENTE Y DESCENDENTE     ---------- */
/*export function ordenarSelect(fullData) {
  const cardSelect = fullData.reverse();
  return cardSelect;
}*/
//creamos una funcion que nos va a ordenar de manera ascendente y descendente en la data
export function ordenarSelect(data, order) {
  // se crean dos parametros 1-El primero parametro (data) nos indica a que le vamos a aplicar el metodo sort()
  //al segundo valor en la main le pasamos (cambioDeSelect.value) nos indica si es ascendente o descendente
  data.sort((a, b) => {
    if (order === "asc") {
      if (a.name < b.name) {
        return -1; // "A" va antes que "B"
      }
      if (a.name > b.name) {
        return 1; // "B" va antes que "A"
      }
    } else if (order === "desc") {
      if (a.name > b.name) {
        return -1; //"B" va antes que "A"
      }
      if (a.name < b.name) {
        return 1; //"A" va antes que "B"
      }
    }
    return 0;
  });
  return data;
}
