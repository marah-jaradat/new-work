let isAccountLocked = false;
let userRole = "Admin";

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "Admin") {
  console.log("Welcome Admin!");
} else {
  console.log("Welcome!");
}

// Challenge

let temp = 4;

if (temp <= 32) {
  console.log("It is freezing outside!");
} else if (temp >= 100) {
  console.log("It is way to hot outside");
} else {
  console.log("Go for it. It is pretty nice.");
}

// if (temp <= 32) {
//   console.log("It is freezing outside!");
// } else if (temp > 32 && temp < 100) {
//   console.log("Go for it. It is pretty nice.");
// } else {
//   console.log("It is way to hot outside");
// }
