const fs = require('fs');
const util = require('util');

// make any synchronous function into promise
const readFile = util.promisify(fs.readFile);

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');