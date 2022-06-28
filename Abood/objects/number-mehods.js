let num = 103.941;

// toFixed() method
console.log(num.toFixed(2));
console.log(num.toFixed(1));
console.log(num.toFixed(10));

// Math.round() method
console.log(Math.round(num));
// Math.floor() method
console.log(Math.floor(num));
// Math.ceil() method
console.log(Math.ceil(num));

// Math.random() method
// Generate number between 0 inclusive and 1 exclusive
console.log(Math.random());

// example to generate specific random number

let min = 10;
let max = 20;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

// Challenge

let makeGuess = function (num) {
  let min = 1;
  let max = 5;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber === num;
};

console.log(makeGuess(4));
