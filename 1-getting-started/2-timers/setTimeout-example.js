// setTimeout(() => {
//   console.log('Hello after 4 seconds');
// }, 4000);

// set timeout with function
const func = () => {
  console.log('Hello after 4 seconds');
};

setTimeout(func, 4000);

// set timeout with function and arguments
const rocks = who => {
  console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'Pluralsight');

// or it can use setImmediate
const instantTimerId = setTimeout(() => console.log('Instant Hello'), 0);
// Note: executing a callback after 0 ms doesn't mean execute it right away, 
// but rather execute it right away after done with everything else in this script

clearTimeout(instantTimerId);
// clearInterval
// clearImmediate