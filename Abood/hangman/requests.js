// callback abstraction - callback pattern for http requests
const getPuzzle = (callback) => {
  const puzzleReq = new XMLHttpRequest();
  puzzleReq.open("GET", "https://puzzle.mead.io/puzzle");
  puzzleReq.send();
  puzzleReq.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === 4 && event.target.status === 200)
      callback(undefined, JSON.parse(event.target.responseText).puzzle);
    else if (event.target.readyState === 4)
      callback("An error has been occured", undefined);
  });
};

// Example for syncronance request - we will not use it just for clarify
const getPuzzleSync = () => {
  const puzzleReq = new XMLHttpRequest();
  puzzleReq.open("GET", "https://puzzle.mead.io/slow-puzzle", false);
  puzzleReq.send();
  if (puzzleReq.readyState === 4 && puzzleReq.status === 200)
    return JSON.parse(puzzleReq.responseText).puzzle;
  else if (puzzleReq.readyState === 4) return "An error has been occured";
};
