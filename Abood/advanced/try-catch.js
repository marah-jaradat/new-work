// const getTip = (amount) => {
//   if (typeof amount === "number") return amount * 0.25;
//   else return `Please enter a valid number`;
// };

// const result = getTip(320);

// console.log(result);

try {
  const getTip = (amount) => {
    if (typeof amount !== "number") throw Error(`Please enter a valid number`);
    return amount * 0.25;
  };
  const result = getTip("25");

  console.log(result);
} catch (e) {
  console.log(e);
}
