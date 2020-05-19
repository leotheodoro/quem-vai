const Commander = require("commander");
const Database = require("./config/database");
const path = require("path");

const pathCards = path.join(__dirname, "config/cards.json");
const db = new Database(pathCards);

async function main() {
  Commander.version("v1")
    .option("-qv, --quem-vai", "Quem vai?")
    .parse(process.argv);

  try {
    if (Commander.quemVai) {
      const card = await db.getCard();
      console.log("Quem vai?\n");
      console.log(card);
    }
  } catch (error) {
    console.error(error);
  }
}

main();
