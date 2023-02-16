navigator.geolocation.getCurrentPosition(function (position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var apikey = "a47aa10f9dad1f97435ec1985a7ce561";
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var temp = data.main.temp;
      var hum = data.main.humidity;
      var city = data.name;
      var des = data.weather[0].description;

      var icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      document.getElementById("cityname").textContent = city;
      document.getElementById("type").textContent = des;
      document.getElementById("current-temp").textContent = temp;
      document.getElementById("humidity").textContent = hum;
      document.getElementById("current-icon").setAttribute("src", icon);
    });
});
