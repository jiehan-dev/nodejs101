// prefer to use stream based method as it is more efficient

/*
  readFile(path[, options])
  createReadStream(path[, options])
  writeFile(file, data[, options])
  createWriteStream(path[, options])
  appendFile(path, data[, options])
  copyFile(src, dest[, flags])
  stat(path[, options])
  access(path[, mode]), chmod(path, mode), chown(path, uid, gid)
  link(existingPath, newPath), unlink(path)
  truncate(path[, len])
  mkdir(path[, mode])
  readdir(path[, options])
  rmdir(path)
  rename(oldPath, newPath)
*/

const fs = require('fs');

// Asynchronous Form:
fs.readFile(__filename, (err, data) => {
  if (err) throw err;

  // do something with data
});

// Synchronous Form:
const data = fs.readFileSync(__filename);
// exceptions are immediately thrown
