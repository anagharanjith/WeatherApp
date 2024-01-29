const getWeatherInfo = async () => {
    const cityInput = document.getElementById('cityInput').value;
    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);
        const weatherData = await response.json();
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const feelslike = weatherData.main.feels_like;
        const weathermain = weatherData.weather[0].main;
        const country = weatherData.sys.country;
        const humidity = weatherData.main.humidity;
        const wind = weatherData.wind.speed;
        const pressure = weatherData.main.pressure;
        document.getElementById('result').innerHTML =
            `<div class="w-50" style="width: 18rem;">
                <h1 class="mt-3">${temperature}°C</h1>
                <p class="mt-3">Feels like: ${feelslike} </p>
                <h2 class="mt-3"> ${cityName} </h2>
                <p class="text-center mt-3">${weathermain}</p>
            </div>`;
            document.getElementById('output').innerHTML =
            `<div class="w-50 mb-5" style="width: 18rem;">
                <h4 class="mt-4 text-black">Country</h4>
                <h6 class="mt-2 text-white">${country}°C</h6>
                <h4 class="mt-4 text-black">Humidity</h4>
                <h6 class="mt-2 text-white">${humidity} </h6>
                <h4 class="mt-4 text-black">Wind</h4>
                <h6 class="mt-2 text-white">${wind} </h6>
                <h4 class="mt-4 text-black">Pressure</h4>
                <h6 class="mt-2 text-white">${pressure}</h6>
            </div>`;
    } catch (err) {
        console.log(err);
    }
}