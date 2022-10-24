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
    `https://api.weatherapi.com/v1/forecast.json?key=bcc8bbd5f9374cc8975185520221410&q=${currentCity}&days=3&aqi=no&alerts=no`
  );
  responseData = await apiResponse.json();
  // console.log(responseData);
  displayTodayWeather();
  displayNextDayWeather();
}
getWeatherData();
