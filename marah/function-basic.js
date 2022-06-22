// functions: are apiece of code that we can use many time by calling the fun and pass new arg to it
// three parts of fun: input (argument), code, output (return value)

//challenge, convert fehrnhite degree to celisus

let degree = function (feh) {
  let celisus = ((feh - 32) * 5) / 9;
  return celisus;
};

let firstDegree = degree(35);
let secondDegree = degree(68);
console.log(firstDegree, secondDegree);

//Multiple argumentss in one function challenge

let getPercent = function getPercent(total, per = 0.2) {
  return total * per;
};

let inputOne = getPercent(100);
let inputTwo = getPercent(200, 0.4);

console.log(inputOne, inputTwo);

// creating grade calculator
// A 90-100 B 80-89 C 70-79 D 60-69 F 0-59

let grade = function (studentScorre, max) {
  let finalScore = (studentScorre / max) * 100;
  if (finalScore <= 100 && finalScore >= 90) {
    return `You got => A ${finalScore}`;
  } else if (finalScore <= 89 && finalScore >= 80) {
    return `You got => B ${finalScore}`;
  } else if (finalScore <= 79 && finalScore >= 70) {
    return `You got => C ${finalScore}`;
  } else if (finalScore <= 69 && finalScore >= 60) {
    return `You got => D ${finalScore}`;
  } else {
    return `You got => F ${finalScore}`;
  }
};

let firstScore = grade(35, 40);
console.log(firstScore);
