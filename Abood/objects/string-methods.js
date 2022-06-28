let myName = "Abd";

//Length property
console.log(myName.length);
// string.length property is commonly used to validate the user name or user password

//Convert to uppercase
console.log(myName.toUpperCase());

//Convert to lowercase
console.log(myName.toLocaleLowerCase());

//Include method
const password = "234rdsfw3rfs";
console.log(password.includes("rdss"));

//Trim

const userName = "   Andrew   Mead           ";
console.log(userName);
console.log(userName.trim());

// Challenge

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpapasswordsdfpoij"));
