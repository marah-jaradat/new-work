// calculate the percent
let score = 15;
let max = 20;
let percnt = (15 / 20) * 100;
console.log(percnt);

//build temp. converter
let feh = 32;

let celisus = ((feh - 32) * 5) / 9;
let kelvin = ((feh + 459.67) * 5) / 9;

console.log(celisus, kelvin);

//boolean

let temp = 30;
let freezing = temp !== 32;
let freez = temp < 32;
let notFreezing = temp === 32;

console.log(freezing, freez, notFreezing);

let age = 25;
let isChild = age <= 7;
let isOld = age >= 65;
console.log(isOld, isChild);

// if statement
let ages = 65;
if (ages >= 65) {
  console.log("this too big");
}
let young = 2;
if (young <= 7) {
  console.log("sweet baby");
}

// advance if

let isVegan = false;
let isTwwoVegan = false;

if (isVegan && isTwwoVegan) {
  console.log("bring vegan menue");
} else if (isVegan || isTwwoVegan) {
  console.log("bring two menue");
} else {
  console.log("bring the main menue");
}
