const amman = new XMLHttpRequest();
amman.open(
  "GET",
  "https://eu1.locationiq.com/v1/reverse?key=pk.25ec6ba22cace9e7eef26e70a724b8a8&lat=31.9539&lon=35.9106&format=json"
);
amman.send();
amman.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === 4 && event.target.status === 200)
    console.log(JSON.parse(event.target.responseText).display_name);
});

// callback abstraction pattern
const getCountries = (callback) => {
  const countries = new XMLHttpRequest();
  countries.open("GET", "https://restcountries.com/v3.1/all");
  countries.send();
  countries.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === 4 && event.target.status === 200) {
      const data = JSON.parse(event.target.responseText).find((e) => {
        return e.cca2 === "JO";
      });
      callback(undefined, data.name.official);
    } else if (event.target.readyState === 4) {
      callback("An error has been ouccred");
    }
  });
};
