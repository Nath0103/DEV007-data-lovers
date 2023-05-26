/*----------      FILTER      ---------- */

export function cardsAsesinos(fullData) {
  const cardsAsesinos = fullData.filter((asesinos) =>
    asesinos.tags.includes("Assassin")
  );
  return cardsAsesinos;
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

export function ordenarSelect(data, order) {
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

// export function ordenarSelect(data, order) {
//   data.sort((a, b) => {
//     if (order === "asc") {
//       if (a.name < b.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//     } else if (order === "desc") {
//       if (a.name > b.name) {
//         return -1;
//       }
//       if (a.name < b.name) {
//         return 1;
//       }
//     }
//     return 0;
//   });
//   return data;
// }
