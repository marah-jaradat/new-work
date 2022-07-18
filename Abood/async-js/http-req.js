// callback abstraction pattern
const getAmman = (callback) => {
  const data = new XMLHttpRequest();
  data.open(
    "GET",
    "https://eu1.locationiq.com/v1/reverse?key=pk.25ec6ba22cace9e7eef26e70a724b8a8&lat=31.9539&lon=35.9106&format=json"
  );
  data.send();
  data.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === 4 && event.target.status === 200)
      callback(undefined, JSON.parse(event.target.responseText).display_name);
    else if (event.target.readyState === 4)
      callback("An error has been ouccred");
  });
};

// callback abstraction pattern request
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

// promise request

const _getCountries = new Promise((res, rej) => {
  const countries = new XMLHttpRequest();
  countries.open("GET", "https://restcountries.com/v3.1/all");
  countries.send();
  countries.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === 4 && event.target.status === 200) {
      const data = JSON.parse(event.target.responseText).find((e) => {
        return e.cca2 === "JO";
      });
      res(data.name.official);
    } else if (event.target.readyState === 4) {
      rej("An error has been ouccred");
    }
  });
});
