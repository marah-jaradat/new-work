// Multiple arguments
let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);

console.log(result);

// Deafult arguments

let getScoreText = function (name = "Anonymous", score = 0) {
  return `Name: ${name}, Score: ${score}`;
};

console.log(getScoreText(undefined, 87));

// Challenge

let getTip = function (total, tipPercent = 0.25) {
  return `A ${tipPercent * 100}% tip on $${total} would be $${
    total * tipPercent
  } `;
};

console.log(getTip(100));
console.log(getTip(69.99));
console.log(getTip(57));
