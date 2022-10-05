function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "52dd9c01e915a27d3e48d02b38dde02f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=Oslo&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
