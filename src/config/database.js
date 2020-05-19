const { readFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);

class Database {
  constructor(fileName) {
    this.FILE_NAME = fileName;
  }

  async getFile() {
    const file = await readFileAsync(this.FILE_NAME, "utf8");
    return JSON.parse(file.toString());
  }

  async list() {
    const data = await this.getFile();
    return data;
  }

  async getCard() {
    const list = await this.list();
    let card = list[Math.floor(Math.random() * list.length)];
    return card;
  }
}

module.exports = Database;
