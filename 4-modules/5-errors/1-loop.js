const path = require('path');
const fs = require('fs');

// if encountered an unexpected error(missing files), node will just crash
const files = ['.bash_profile', '.npmrc'];

files.forEach(file => {
  const filePath = path.resolve(process.env.HOME, file);
  const data = fs.readFileSync(filePath);
  console.log('File data is', data);
});
