// init ui
const ui = new UI();

// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// initailize the weather class
const weather = new Weather(weatherLocation.city);
// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather());

// change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  // change location
  weather.changeLocation(city);

  // set location in local storage
  storage.setLocationData(city);

  // get weather and display
  getWeather();

  // close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
