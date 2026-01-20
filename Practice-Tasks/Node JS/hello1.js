// const hello = require('./hello');
// console.log(hello.add(5,10));
// console.log(hello.sub(10,5)); //using variable

const { add, sub, mul, div } = require("./hello");
console.log("Addition of two given inputs: " + add(5, 10));
console.log("Subtraction of two given inputs: " + sub(10, 5));
console.log("Multiplication of two given inputs: " + mul(10, 5));
console.log("Division of two given inputs: " + div(10, 5));
