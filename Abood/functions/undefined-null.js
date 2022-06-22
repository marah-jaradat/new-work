// Undefined for variable

let name;

name = "Jen";

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// Undefined for function arguments

let sqr = function (num) {
  console.log(num);
};

let result = sqr(3);

console.log(result);

let age = 28;
age = null;
console.log(age);

/* Note
    When we see Undefined msg:
    1 - variable is created but didn't assigned to a value
    2 - function is called and didn't pass a value to it as arguments
    3 - function is assigned to value and didn't return a value
    
    When we see Null msg:
    variable is created ana assigned to value then explicitly assigned to null means it is empty now!  
*/
