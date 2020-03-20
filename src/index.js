const Commander = require('commander')
const Database = require('./config/database')

const db = new Database('./config/cards.json')

async function main() {
  Commander
    .version('v1')
    .option('-qv, --quem-vai', 'Quem vai?')
    .parse(process.argv)

  try {
    if(Commander.quemVai) {
      const card = await db.getCard();
      console.log('Quem vai?\n');
      console.log(card);
    }
  } catch (error) {
    console.error(error);
  }
  
}

main()
