function displayWeatherCondition(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;

  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;

  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);

  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "76349913cec595a868a9f5f72e1b5db8";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-a-city").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "76349913cec595a868a9f5f72e1b5db8";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units="metric"}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function fahrenheit(event) {
  let fahrenheitTemperature = document.querySelector("#temperature");
  let temperature = fahrenheitTemperature.innerHTML;
  temperature = Number(temperature);
  fahrenheitTemperature.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fUnit = document.querySelector("#fahrenheit-link");
fUnit.addEventListener("click", fahrenheit);

let cUnit = document.querySelector("#celsius-link");
cUnit.addEventListener("click", displayWeatherCondition);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Milan");

let now = new Date();
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let dates = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

date.innerHTML = `${day}, ${month} ${dates}, ${year}`;
time.innerHTML = `${hours}:${minutes}`;
