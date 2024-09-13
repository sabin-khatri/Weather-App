async function getWeather(city) {
    const apiKey = 'cdd7176a047c94a0c3436198b8cd1e05'; // Replace with your actual API key
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('city').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} km/h`;
            document.getElementById('weatherIcon').src = `temperature.png.webp/${data.weather[0].icon}.temperature.png.webp`;



        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Error fetching weather data');
    }
}

function searchWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city');
    }
}
