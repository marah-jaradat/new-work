const notes = ["Note 1", "Note 2", "Note 3"];

console.log(notes);

console.log(notes.length);

//documentation: google.com --> mdn array

console.log(notes[0]);

// undefined case:
console.log(notes[22]); //note that array length is 3

// last item in array
console.log(notes[notes.length - 1]);

// adding and removing to the end of array

notes.push(`Note ${notes.length + 1}`);
console.log(notes);
const removedNote = notes.pop();
console.log(`You just removed ${removedNote}`);

// adding and removing to the middle of array

// Adding an item after Note 2
// notes.splice(2, 0, "Note X");
// console.log(notes);

// Removing an item after Note 2
// notes.splice(2, 1);
// console.log(notes);

// adding and removing to the beginning of array

const shiftedNote = notes.shift();
console.log(notes);

notes.unshift(`Note ${1 - notes.length}`);
console.log(notes);
