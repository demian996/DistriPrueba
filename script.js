// 🔑 Tu app_id y app_key de WeatherUnlocked

const url = `http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=43c7cec3&app_key=8fc246c713acd430ee9c5a566471284d`;

// Petición a WeatherUnlocked
fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Weather API error");
    return response.json();
  })
  .then(data => {
    const weatherDiv = document.getElementById("weather");
    const temp = data.temp_c;
    const condition = data.wx_desc;
    const feelslike = data.feelslike_c;

    weatherDiv.innerHTML = `
      <strong>Weather in Quito, EC:</strong><br>
      ${condition} - ${temp} °C (Feels like: ${feelslike} °C)
    `;
  })
  .catch(error => {
    document.getElementById("weather").innerText = "Unable to load weather.";
    console.error("Weather API error:", error);
  });