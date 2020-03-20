const { deepEqual } = require('assert');
const Database = require('../config/database');

describe('Suit to get a card', () => {
  it('Must get a card', async () => {
    const expected = await Database.getCard();
    const list = await Database.list();

    const [result] = list.filter(item => item === expected);

    deepEqual(result, expected);
  });
});