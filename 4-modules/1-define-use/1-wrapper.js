// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:
//(function(exports, require, module, __filename, __dirname) {
//  Module code actually lives in here
//
//  return module.exports;
//});

// console.log(arguments);

exports.a = 42;
module.exports.b = 37;

// if we want to export top level as function
// exports = () => {}; // not ok
// module.exports = () => {}; // valid
