// console.log(arguments); // arguments is an array in JavaScript that cotains all the values that were passed into a function
// console.log(require("module").wrapper); // wrapper is a function that is intended to call one or more other functions

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply } = require("./test-module-2");
console.log(multiply(2, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
