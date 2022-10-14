// API Key
// bcc8bbd5f9374cc8975185520221410

let searchLocation = document.getElementById("searchLocation");
let items = [];

async function getDataFromApi() {
  let getData = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=bcc8bbd5f9374cc8975185520221410&q=cairo&days=3&aqi=no&alerts=no"
  );
  let dataToJson = await getData.json();
  console.log(dataToJson);
}
getDataFromApi();
