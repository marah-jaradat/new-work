let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge

let person = {
  name: "Abd Alrahman",
  age: 28,
  location: "Amman",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age++;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
