const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);

      console.timeEnd('execute');
    });
  }
}

const withTime = new WithTime();

withTime.on('data', (data) => console.log(`Length: ${data.length}`));

withTime.on('data', (data) => console.log(`Characters: ${data.toString().length}`)); // any event that register with 'on' method, will be invoked in sequence

withTime.prependListener('data', (data) => console.log(`Prepend: ${data.length}`));

// withTime.removeListener... // to remove listner

withTime.on('error', console.error); // without this line, node will exit with an Unhandled 'error' event

// Alternative
// process.once('uncaughtException', (err) => {
//   console.log(err);

//   // do some cleanup

//   process.exit(1);
// });

withTime.execute(fs.readFile, __filename);
