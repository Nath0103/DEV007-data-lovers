import { cardsAsesinos, cardsLuchadores, cardsTanques, cardsMagos, cardsSoporte, cardsTiradores, ordenarSelect, anotherExample } from '../src/data.js';


describe('cardsAsesinos', () => {
  it('is a function', () => {
    expect(typeof cardsAsesinos).toBe('function');
  });

  it('returns `cardsAsesinos`', () => {
    expect(cardsAsesinos()).toBe('cardsAsesinos');
  });
});


describe('ordenarSelect', () => {
  it('is a function', () => {
    expect(typeof ordenarSelect).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(ordenarSelect()).toBe('OMG');
  });
});
