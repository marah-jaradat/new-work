getAmman((error, city) => {
  if (error) console.log(error);
  else console.log(city);
});

_getCountries.then(
  (data) => {
    console.log(data);
  },
  (error) => console.log(error)
);
