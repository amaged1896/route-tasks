// First Card Variables
let searchLocation = document.getElementById("searchLocation"),
  today = document.getElementById("today"),
  todayDate = document.getElementById("todayDate"),
  cityLocation = document.getElementById("location"),
  todayDegree = document.getElementById("todayDegree"),
  todayIcon = document.getElementById("todayIcon"),
  description = document.getElementById("description"),
  humidity = document.getElementById("humidity"),
  wind = document.getElementById("wind"),
  compass = document.getElementById("compass");

// Next Days Variables
let nextDay = document.getElementsByClassName("nextDay"),
  nextDayIcon = document.getElementsByClassName("nextDay-icon"),
  maxDegree = document.getElementsByClassName("maxDegree"),
  minDegree = document.getElementsByClassName("minDegree"),
  nextDayDescription = document.getElementsByClassName("nextDayDescription"),
  currentCity = "Cairo",
  apiResponse,
  responseData,
  monthName = [
    "January",
    "February",
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
  ],
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
// get weather data
async function getWeatherData(currentCity = "cairo") {
  apiResponse = await fetch(
    // `https://api.weatherapi.com/v1/forecast.json?key=046ca875b57d43b2b2e160031220911&q=${currentCity}&days=3&aqi=no&alerts=no`
    `https://api.weatherapi.com/v1/forecast.json?key=463ef8ae695e40e885c153154222711&q=${currentCity}&days=3&aqi=no&alerts=no`
  );
  responseData = await apiResponse.json();
  console.log(responseData);
  displayTodayWeather();
  displayNextDayWeather();
}
getWeatherData();

// display current weather 
function displayTodayWeather() {
  let date = new Date();
  // console.log(date);
  today.innerHTML = days[date.getDay()];
  todayDate.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}`;
  // console.log(responseData.location);
  cityLocation.innerHTML = responseData.location.name;
  todayDegree.innerHTML = responseData.current.temp_c;
  todayIcon.setAttribute("src", `https:${responseData.current.condition.icon}`);
  description.innerHTML = responseData.current.condition.text;
  humidity.innerHTML = responseData.current.humidity;
  wind.innerHTML = responseData.current.wind_kph;
  compass.innerHTML = responseData.current.wind_dir;
}

// display next days weather
function displayNextDayWeather() {
  for (let i = 0; i < nextDay.length; i++) {
    nextDay[i].innerHTML =
      days[new Date(responseData.forecast.forecastday[i + 1].date).getDay()];
    nextDayIcon[i].setAttribute(
      "src",
      `https:${responseData.forecast.forecastday[i + 1].day.condition.icon}`
    );
    maxDegree[i].innerHTML =
      responseData.forecast.forecastday[i + 1].day.maxtemp_c;
    minDegree[i].innerHTML =
      responseData.forecast.forecastday[i + 1].day.mintemp_c;
    nextDayDescription[i].innerHTML =
      responseData.forecast.forecastday[i + 1].day.condition.text;
  }
}

// realtime search
searchLocation.addEventListener("keyup", function () {
  currentCity = searchLocation.value;
  getWeatherData(currentCity);
});

// search by button
searchBtn.addEventListener("click", function () {
  currentCity = searchLocation.value;
  getWeatherData(currentCity);
});