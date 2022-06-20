let temp = 65;

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice out.");
} else if (temp <= 0 || temp >= 120) {
  console.log("Don't go out.");
} else {
  console.log("Eh. Do what you want.");
}

// Challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer  up vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer up some vegan options");
} else {
  console.log("Offer up anything on the menu");
}
