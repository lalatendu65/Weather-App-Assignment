let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const apiKey = "a47aa10f9dad1f97435ec1985a7ce561"; 
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].description;
      const temp = (data.main.temp - 273.15).toFixed(1); // Convert Kelvin to Celsius and round to 1 decimal place
      const humidity = data.main.humidity;

      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `
        <h2>${city}</h2>
        <p>Weather: ${weather}</p>
        <p>Temperature: ${temp} &#8451;</p>
        <p>Humidity: ${humidity}%</p>
      `;
    })
    .catch((error) => {
      console.error(error);
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `<p>Unable to retrieve weather data for ${city}.</p>`;
    });
});
