setTimeout(() => process.exit(), 2000);

// process is an event emitter
process.on('exit', () => {
  console.log('Process will exit now. See you later!');

  // do one final synchronous operation
  // before the node process terminates
});

console.log('Hello!');
