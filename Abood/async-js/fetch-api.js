fetch("https://restcountries.com/v3.1/all", {})
  .then((response) => {
    if (response.status === 200) return response.json();
  })
  .then((data) => {
    const filteredData = data.filter((i) => i.cca2 === "JO");
    console.log(filteredData[0].flag);
  })
  .catch((error) => {
    console.log(error);
  });

const getPuzzle = (wordCount) => {
  fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Error fetching the puzzle");
    })
    .then((data) => console.log(data.puzzle))
    .catch((error) => {
      console.log(error);
    });
};

getPuzzle(9);
