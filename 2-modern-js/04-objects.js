const mystery = 'answer';

const obj = {
  p1: 10,
  p2: 20,
  f1() {
    console.log(this); // obj
  },
  f2: () => {
    console.log(this);
  },
  [mystery]: 42, // dynamic properties
  PI // Instead of PI: PI // Shoulder syntax
};

obj.f1();
obj.f2();

console.log(obj.mystery === undefined); // undefined

console.log(obj.answer === 42); // undefined
