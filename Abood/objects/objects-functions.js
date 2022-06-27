let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A People History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

console.log(getSummary(myBook).summary);

console.log(getSummary(myBook).pageCountSummary);

// Challenge

let tempConversion = function (fahrenheit) {
  return {
    fahrenheit,
    celsius: (fahrenheit - 32) * (5 / 9),
    kelvin: 273.15 + (fahrenheit - 32) * (5 / 9),
  };
};

let fahrenheit = 50;

console.log(`
Temp in fahrenheit = ${tempConversion(fahrenheit).fahrenheit},
Temp in celsius = ${tempConversion(fahrenheit).celsius},
Temp in kelvin = ${tempConversion(fahrenheit).kelvin}.
`);
