let searchLocation = document.getElementById("searchLocation");

function displayWeather(apiDegree) {
  const d = new Date();
  let currentHour = d.getHours();

  apiDegree.forEach((item, index) => {
    console.log(item);
    const currentDegree = item.hour[currentHour].temp_c;
    document.getElementsByClassName("degree")[index].innerHTML =
      currentDegree + " C";
  });
}

async function getDataFromApi() {
  let getData = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=bcc8bbd5f9374cc8975185520221410&q=cairo&days=3&aqi=no&alerts=no"
  );
  let resData = await getData.json();
  console.log(resData.forecast.forecastday);
  const items = resData.forecast.forecastday;
  displayWeather(items);
}
try {
  getDataFromApi();
} catch (err) {
  console.log(err);
}
