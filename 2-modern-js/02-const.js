// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

// Object.freeze() // first level immutable
// Immutable.js

// Why const over let
const answer = 42;

/*
A big program here...
*/

answer // is still 42;



// vs



let answer2 = 42;

/*
A big program here...
*/

answer2 // might have changed;