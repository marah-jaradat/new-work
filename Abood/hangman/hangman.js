class Hangman {
  constructor(word, numberOfGuesses) {
    this.word = word.toLowerCase().split("");
    this.numberOfGuesses = numberOfGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  getPuzzle() {
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
  }
  makeGuess(letter) {
    this.guessedLetters.push(letter);
    if (
      !this.word.includes(letter.toLocaleLowerCase()) &&
      this.numberOfGuesses !== 0
    )
      this.numberOfGuesses -= 1;
  }
  getStatus() {
    let mappedGuessedLetters = this.guessedLetters.map((i) =>
      i.toLocaleLowerCase()
    );
    const finished = this.word.every((letter) => {
      return mappedGuessedLetters.includes(letter);
    });

    if (this.numberOfGuesses === 0) return (this.status = "faild");
    else if (finished) return (this.status = "finished");
    else return (this.status = "playing");

    // this.word.forEach((letter) => {
    //   if (!this.getPuzzle().includes(letter) && this.numberOfGuesses === 0)
    //     this.status = "faild";
    //   else if (!this.getPuzzle().includes(letter) && this.numberOfGuesses > 0)
    //     this.status = "playing";
    //   else this.status = "finished"
  }
}
