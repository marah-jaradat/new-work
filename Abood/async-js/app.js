getCountries((error, country) => {
  if (error) console.log(`Error: ${error}`);
  else console.log(country);
});
