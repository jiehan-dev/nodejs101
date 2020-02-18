const fs = require('fs');

// The following code only support promise
// const readFileAsArray = function(file) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, function(err, data) {
//       if (err) {
//         return reject(err);
//       }

//       const lines = data
//         .toString()
//         .trim()
//         .split('\n');

//       resolve(lines);
//     });
//   });
// };

// To support both callback and promise
const readFileAsArray = function(file, cb = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if (err) {
        reject(err);
        return cb(err);
      }

      const lines = data
        .toString()
        .trim()
        .split('\n');

      resolve(lines);
      cb(null, lines);
    });
  });
};

// example call
readFileAsArray('./numbers')
  .then((lines) => {
    const numbers = lines.map(Number);

    const oddNumbers = numbers.filter((n) => n % 2 === 1);

    console.log('odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

// example async call

(async () => {
  try {
    const lines = await readFileAsArray('./numbers');

    const numbers = lines.map(Number);

    const oddCount = numbers.filter((n) => n % 2 === 1).length;

    console.log('odd numbers count:', oddCount);
  } catch (err) {
    console.err(err);
  }
})();
