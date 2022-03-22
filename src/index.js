//showCurrentTime
function sayTime() {
  let currentTime = document.querySelector("#timenow");
  let theTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  let day = days[theTime.getDay()];
  let hour = theTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = theTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (currentTime.innerHTML = `${day} ${hour}:${minutes}`);
}
sayTime();
//showSearchedCity
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  let apiKey = "14ccd6e35770049bed53c23d9109fb85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentTemp);
}
let search = document.querySelector("#search-form");
search.addEventListener("submit", searchCity);
//changetemptoF
function changetoF(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(temperature.innerHTML * 1.8 + 32);
}

let celcius = document.querySelector("#f-temp");
celcius.addEventListener("click", changetoF);
//changeTemptocelsius
function changetoC(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round((temperature.innerHTML - 32) / 1.8);
}
let fahrenheit = document.querySelector("#cel-temp");
fahrenheit.addEventListener("click", changetoC);

//current temp
function showCurrentTemp(response) {
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#describtion").innerHTML =
    response.data.weather[0].main;
}
