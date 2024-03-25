const search = document.querySelector("#search");
const enter = document.querySelector("#enter");
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const icon = document.querySelector("#icon");
const city = document.querySelector("#city");
const provinance = document.querySelector("#name");
const region = document.querySelector("#region");
const body = document.querySelector("body");

async function getWeatherData(c) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=618c4948f5464fee86c165832242103&q=${c}`
    );

    if (!response.ok) {
      throw new Error("Invalid response from server");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch weather data. Please try again.");
  }
}

function updateWeatherUI(data) {
  if (!data) {
    // Handle invalid data
    return;
  }
  fahrenheit.innerHTML = `${data.current.temp_f}&deg;F`;
  celsius.innerHTML = `${data.current.temp_c}&deg;C`;
  city.innerHTML = data.location.country;
  region.innerHTML = data.location.region;
  provinance.innerHTML = data.location.name;

  icon.src = `http:${data.current.condition.icon}`;
  if (data.current.is_day) {
    body.style.backgroundImage =
      "linear-gradient(rgb(255, 245, 230), rgb(253, 188, 46))";
  } else {
    body.style.backgroundImage =
      "linear-gradient(rgb(30, 35, 36), rgb(0, 70, 110))";
  }
}

enter.addEventListener("click", async () => {
  try {
    const weatherData = await getWeatherData(search.value);
    updateWeatherUI(weatherData);
  } catch (error) {
    // Handle errors and provide feedback to the user
    console.error(error.message);
    // eslint-disable-next-line no-alert
    alert(error.message);
  }
});
