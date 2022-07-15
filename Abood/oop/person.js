const Person = function (firstName, lastName, age, likes = []) {
  this.firsName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firsName} is ${this.age}`;
  this.likes.forEach((like) => {
    bio += ` ${this.firsName} likes ${like}.`;
  });
  return bio;
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firsName = names[0];
  this.lastName = names[1];
};

const me = new Person("Abd Alrahman", "Banyissa", 28, [
  "learn",
  "football",
  "gym",
]);
const user = new Person("Marah", "Jaradat", 25);

user.setName("Taqwa Yasin");

console.log(me.getBio());
console.log(user.getBio());
