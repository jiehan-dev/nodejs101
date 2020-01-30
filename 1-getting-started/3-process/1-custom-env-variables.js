console.log('Current user is', process.env.USERNAME); 

console.log('\nScript executed with:');

console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);

// VAL1=10 VAL2=20 node 1-custom-env-variables.js // Linux
// $env:VAL1=10; $env:VAL2=20; node 1-custom-env-variables.js // Windows