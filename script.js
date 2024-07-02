document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    getWeather(location);
});

function getWeather(location) {
    const apiKey = 'b5b21109c13972572164f885a5d54970'; // Replace with your own API key from OpenWeather
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod === 200) {
                document.getElementById('location-name').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
                document.getElementById('precipitation').textContent = `Precipitation: ${data.weather[0].description}`;
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Could not fetch weather data. Please try again.');
        });
}
