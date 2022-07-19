// create array with x todo items
// print the last two items in specific format

let todo = [
  "study",
  "go to gym",
  "do laundary",
  "clean the room",
  "take a shower",
];

// console.log(
//   `Today you have: ${todo.length}, for now I had done ${
//     todo[todo.length - 1]
//   } and ${todo[todo.length - 2]}`
// );

// delete the third item
// add a new item onto the end
// remove the first item from the list

// todo.splice(2, 1);
// todo.push("make the dishes");
// todo.shift();

// console.log(todo);

// todo.forEach(function (item, index) {
//   console.log(`${index + 1}. the item is ${item}`);
// });

// print things using for loop

// for (let count = 0; count < todo.length; count++) {
//   console.log(`${count + 1}. the item is ${todo[count]}`);
// }

// create array of objects: text,completed
// create afunction to remove a todo by text value

let todos = [
  {
    text: "study",
    completed: false,
  },
  { text: "go to gym", completed: true },
  { text: "do laundary", completed: true },
  { text: "clean the room", completed: false },
  { text: "take a shower", completed: false },
];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, "study");

// console.log(todos);
// filter the list basd on specific criteria
const getThingsTodo = function (todos) {
  return todos.filter(function (todo, index) {
    const isDone = !todo.completed;
    return isDone;
  });
};

// console.log(getThingsTodo(todos));

// sort the list based on the alphapet

const sortting = function (todos) {
  todos.sort(function (a, b) {
    if (a.text.toLowerCase() < b.text.toLowerCase()) {
      return -1;
    } else if (b.text.toLowerCase() < a.text.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortting(todos);
// console.log(todos);

// sort the list based on the complitios
const sortTodo = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortTodo(todos);
console.log(todos);
