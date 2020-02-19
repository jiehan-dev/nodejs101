const { Readable } = require('stream');

// Not efficient
// We are pushing all our data to the stream before piping to stdout
// const inStream = new Readable();
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);

// push on demand
const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }

      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
