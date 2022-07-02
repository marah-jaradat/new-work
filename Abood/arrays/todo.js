const todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

console.log(`You have ${todos.length} todos!`);

// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

console.log(todos);
todos.splice(2, 1);
console.log(todos);
todos.push(`todo ${todos.length + 2}`);
console.log(todos);
todos.shift();
console.log(todos);
