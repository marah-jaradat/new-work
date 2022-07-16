class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firsName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firsName} is ${this.age}`;
    this.likes.forEach((like) => {
      bio += ` ${this.firsName} likes ${like}.`;
    });
    return bio;
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firsName = names[0];
    this.lastName = names[1];
  }
}
