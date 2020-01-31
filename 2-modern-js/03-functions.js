const X = function() {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y
  // It's the same "this" found in Y's scope
};

// 'this' here is 'exports'
this.id = 'exports';

const testerObj = {
  func1: function() {
    console.log('func1', this); // func1 { func1: [Function: func1], func2: [Function: func2] }
  },

  func2: () => {
    console.log('func2', this); // func2 { id: 'exports' }
  }
};

testerObj.func1();
testerObj.func2();

const square = a => {
  return a * a;
};
// or
// const square = (a) => a * a;
// const square = a => a * a;

[1, 2, 3, 4].map(a => a * a);
