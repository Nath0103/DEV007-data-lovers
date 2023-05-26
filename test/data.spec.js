import { cardsAsesinos, cardsLuchadores, cardsTanques, cardsMagos, cardsSoporte, cardsTiradores, ordenarSelect } from '../src/data.js';
import data from '../src/data/lol/lol.js';

const fullData = Object.values(data.data);

//TEST PARA FILTRADO ASESINOS
describe('cardsAsesinos', () => {
  it('is a function', () => {
    expect(typeof cardsAsesinos).toBe('function');
  });

  it('returns an object', () => {
    expect(Array.isArray(cardsAsesinos(fullData))).toBe(true);
  });

  it('return cardsAsesinos', () => {
    cardsAsesinos(fullData).forEach((asesino) => { //Aquí se recorre en cardsAsesinos la fullData para luego especificar que contenga solo a los campeones asesinos
      expect (asesino.tags).toContain("Assassin"); //Esto espera que dentro tag contenga "Assassin"
    })
  })

});

//TEST PARA lUCHADORES
describe('cardsLuchadores', () => {
  it('is a function', () => {
    expect(typeof cardsLuchadores).toBe('function');
  });

  it('returns an array', () => {
    expect(Array.isArray(cardsLuchadores(fullData))).toBe(true);
  });

  it('return cardsLuchadores', () => {
    cardsLuchadores(fullData).forEach((luchadores) => { //Aquí se recorre en cardsAsesinos la fullData para luego especificar que contenga solo a los campeones asesinos
      expect (luchadores.tags).toContain("Fighter"); //Esto espera que dentro tag contenga "Fighter"
    });
  });
});

//TEST PARA TANQUES
describe('cardsTanques', () => {
  it('is a function', () => {
    expect(typeof cardsTanques).toBe('function');
  });

  it('return an array', () => {
    expect(Array.isArray(cardsTanques(fullData))).toBe(true);
  });

  it('return cardsTanques', () => {
    cardsTanques(fullData).forEach((tanques) => {
      expect (tanques.tags).toContain("Tank");
    });
  });
});

//TEST PARA MAGOS
describe('cardsMagos', () => {
  it('is a function', () => {
    expect(typeof cardsMagos).toBe('function');
  });
  it('return an array', () => {
    expect(Array.isArray(cardsMagos(fullData))).toBe(true);
  });
  it('return cardsMagos', () => {
    cardsMagos(fullData).forEach((magos) => {
      expect(magos.tags).toContain("Mage");
    });
  })
});

//TEST PARA SOPORTE
describe('cardsSoporte is a function',() => {
  it('is a function', () => {
    expect(typeof cardsSoporte).toBe('function');
  });
  it('return an array', () => {
    expect(Array.isArray(cardsSoporte(fullData))).toBe(true);
  });
  it('return cardsSoporte', () => {
    cardsSoporte(fullData).forEach((soporte) => {
      expect(soporte.tags).toContain("Support");
    });
  });
});

describe('cardsTiradores is a function', () => {
  it('is a fuction', () => {
    expect(typeof cardsTiradores).toBe('function');
  });
  it('is an array', () => {
    expect(Array.isArray(cardsTiradores(fullData))).toBe(true);
  });
  it('return cardsTiradores', () => {
    cardsTiradores(fullData).forEach((tiradores) => {
      expect(tiradores.tags).toContain("Marksman");
    });
  });
});

//TEST A ORDENAR DATA 
describe('ordenarSelect', () => {
  it('is a function', () => {
    expect(typeof ordenarSelect).toBe('function');
  });

  it('returns a sorted array', () => {
    expect(Array.isArray(ordenarSelect(fullData))).toBe(true);
  });

  /*it ('returns data in ascending order (from A to Z)', () => {
    expect(ordenarSelect([{ name: 'C' }, { name: 'B' }, { name: 'A' }, { name: 'C' }],'asc')).toStrictEqual([
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
      { name: 'C' },
    ]);
  });
  it ('returns data in descending order (from Z to A)', () => {
    expect(ordenarSelect([{ name: 'C' }, { name: 'B' }, { name: 'A' }, { name: 'C' }],'desc')).toStrictEqual([
      { name: 'C' },
      { name: 'C' },
      { name: 'B' },
      { name: 'A' },
    ]);
  });*/

  it ('returns data in ascending order (from A to Z)', () => {
    expect(ordenarSelect([{ name: 'Aatrox' }, { name: 'Ahri' }, { name: 'Akali' }, { name: 'Aatrox' }], 'asc')).toStrictEqual([
      { name: 'Aatrox' },
      { name: 'Aatrox' },
      { name: 'Ahri' },
      { name: 'Akali' }
    ]);
  });
  it ('returns data in descending order (from Z to A)', () => {
    expect(ordenarSelect([{ name: 'Zyra' }, { name: 'Zilean' }, { name: 'Ziggs' }, { name: 'Zed' }, { name: 'Zyra' }], 'desc')).toStrictEqual([
      { name: 'Zyra' }, 
      { name: 'Zyra' }, 
      { name: 'Zilean' },
      { name: 'Ziggs' },
      { name: 'Zed' },
    ]);
  });
});
//[]