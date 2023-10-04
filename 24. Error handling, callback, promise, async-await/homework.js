let data = fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=41.2647&longitude=69.2163&hourly=temperature_2m,relativehumidity_2m,rain&current_weather=true&timezone=auto"
);
fetchWeather();
async function fetchWeather() {
  let res = await data;
  let weatherData;

  res = await res.json();
  weatherData = res;
  console.log(res);

  let { current_weather, hourly } = weatherData;

  let currentUl = document.querySelector("ul#current");

  currentUl.innerHTML += `<li>temperature: ${current_weather.temperature} C</li>`;
  currentUl.innerHTML += `<li>wind speed: ${current_weather.windspeed}</li>`;
  currentUl.innerHTML += `<li>time: ${new Date(current_weather.time)}</li>`;

  let hourlyTable = document.querySelector("#hourly");
  hourlyTable.innerHTML += `<tr>
    ${hourly.temperature_2m.map((v) => `<td>${v}</td>`).join("")}
    </tr>
    <tr>
    ${hourly.time
      .map((v) => {
        let date = new Date(v);
        return `<td>${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:00</td>`;
      })
      .join("")}
    </tr>
    
    `;
}
