{
  // Block Scope
  var x = 1;
  let y = 2;
  {
    // Nested Block Scope
    var z = 3;
    let m = 4;
  }
  console.log(m); // undefined out of scope
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  var result = a + b;
}

sum(4 + 3);
