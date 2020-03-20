const { deepEqual } = require('assert');
const Database = require('../config/database');
const db = new Database('../config/cards.json');

describe('Suit to get a card', () => {
  it('Must get a card', async () => {
    const expected = await db.getCard();
    const list = await db.list();

    const [result] = list.filter(item => item === expected);

    deepEqual(result, expected);
  });
});