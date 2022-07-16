// let feh = 32;

// let celisus = ((feh - 32) * 5) / 9;
// let kelvin = ((feh + 459.67) * 5) / 9;

function temp(fehren) {
  let celisus = (fehren - 32) * (5 / 9);
  let kelvin = (fehren + 459.67) * (5 / 9);

  return {
    celisus,
    kelvin,
    fehren,
  };
}

console.log(temp(32));

// passing object inside functions

let converter = function (feh) {
  return {
    fehrnhite: feh,
    kelvin: (feh + 459.67) * (5 / 9),
    celisus: (feh - 32) * (5 / 9),
  };
};

console.log(converter(32));

//add income function
//get account summary, total, expense, income

let myAccount = {
  name: "Marah Jaradat",
  expense: 100,
  income: 1000,
};

let getSummary = function (account, amount) {
  return {
    summary: `Account for ${account.name} has ${amount}, ${account.income} in income, ${account.expense} in expense.`,
  };
};

console.log(getSummary(myAccount, 900));

// isValid password
// length is more than 8- and it doesn't contain password word

let isValidPassword = function (pass) {
  if (pass.length > 8 && !pass.includes("password")) {
    return true;
  } else {
    return false;
  }
};

// another sol
let validPass = function (pass) {
  return pass.length > 8 && !pass.includes("password");
};

// console.log(isValidPassword("asdfg"));
// console.log(isValidPassword("asdfg%^&*#hjk"));
// console.log(isValidPassword("asdfghjkpassword"));

// console.log(validPass("asdfg"));
// console.log(validPass("asdfg%^&*#hjk"));
// console.log(validPass("asdfghjkpassword"));

// Guess Game practice on number method

let makeGuess = function (num) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() + (max - min + 1)) + min;
  return num === randomNum;
};

console.log(makeGuess(1));
