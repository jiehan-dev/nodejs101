// non-stop until process being killed
// setInterval(() => console.log('Hello every 3 seoncds...'), 3000);

let counter = 0;

const intervalId = setInterval(() => {
  console.log('Hello World');

  if (++counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);
