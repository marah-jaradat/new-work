const person = {
  firstNames: [],
  get firstName() {
    return this._firstName;
  },
  set firstName(value) {
    this._firstName = value;
    this.firstNames.push(this._firstName);
  },
};

console.log(person);

person.firstName = "Abd";

console.log(person.firstNames);
