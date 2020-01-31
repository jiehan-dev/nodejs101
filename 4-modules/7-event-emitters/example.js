const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// myEmitter.emit('TEST_EVENT'); // no subscriber here

setImmediate(() => {
  myEmitter.emit('TEST_EVENT'); // this code will be run in the next event loop
});

myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});

myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});

myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});

// myEmitter.emit('TEST_EVENT'); // It will console.log 3 times
