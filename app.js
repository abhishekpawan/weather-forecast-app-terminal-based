const request = require("request");
const geocode = require("./utils/geocode");
const wheather = require("./utils/weather");

const address = process.argv[2];

if (address) {
  geocode(address, (error, data) => {
    if (data === undefined) {
      return console.log("Error:", error);
    } else
      wheather(data.latitude, data.longitude, data.location, (data, error) => {
        if (data === undefined) {
          return console.log("Error:", error);
        } else console.log("Wheather Forecast:", data);
      });
  });
} else
  console.log('Please enter a location.\nFor Example : "node app.js London"');
