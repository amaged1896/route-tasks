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
