const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-condition');
const windSpeed = document.querySelector('#weather-wind');

const weatherurl = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg,us&units=imperial&appid=249ff5f12842112d7ea5bfdbac4565f6';

async function apiFetch() {
    try {
      const response = await fetch(weatherurl);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }