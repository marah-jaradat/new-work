// callback abstraction
const getCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "This is the data");
  }, 2000);
};

getCallback((error, data) => {
  if (error) console.log(error);
  else console.log(data);
});

//promise
const getMyPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") resolve(num * 2);
      else reject(`Error: '${num}' is not a number`);
    }, 2000);
  });

getMyPromise(2)
  .then((data) => {
    getMyPromise(data).then((data) => console.log(data));
  })
  .catch((error) => console.log(error));
