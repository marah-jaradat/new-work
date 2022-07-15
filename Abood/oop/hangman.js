const Hangman = function (word, numberOfGuesses) {
  this.word = word.toLowerCase().split("");
  this.numberOfGuesses = numberOfGuesses;
  this.guessedLetters = ["c", "t", "J", "S"];
};

Hangman.prototype.getPuzzle = function () {
  let mappedGuessedLetters = this.guessedLetters.map((i) =>
    i.toLocaleLowerCase()
  );

  let puzzle = "";

  this.word.forEach((letter) => {
    if (mappedGuessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};

const player1 = new Hangman("Cat", 2);
const player2 = new Hangman("New Jersey", 4);

console.log(player1.getPuzzle());
console.log(player2.getPuzzle());
