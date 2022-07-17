const game1 = new Hangman("Cat", 2);

document.querySelector("#puzzle").innerHTML = game1.getPuzzle();
document.querySelector(
  "#remainig-guesses"
).innerHTML = `Remainig guesses: ${game1.numberOfGuesses}`;
document.querySelector(
  "#get-status"
).innerHTML = `Status: ${game1.getStatus()}`;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode); // print keyboard letters and numbers to window
  game1.makeGuess(guess);
  document.querySelector("#puzzle").innerHTML = game1.getPuzzle();
  document.querySelector(
    "#remainig-guesses"
  ).innerHTML = `Remainig guesses: ${game1.numberOfGuesses}`;
  document.querySelector(
    "#get-status"
  ).innerHTML = `Status: ${game1.getStatus()}`;
});

getPuzzle((error, puzzle) => {
  if (error) console.log(`Error: ${error}`);
  else console.log(puzzle);
});
