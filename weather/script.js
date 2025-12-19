        const API_KEY = '0fdb2f159af4676242837fa8fff618d0';

        async function getWeather() {
            const city = document.getElementById('cityInput').value.trim();
            const weatherInfo = document.getElementById('weatherInfo');
            const error = document.getElementById('error');

            if (!city) {
                error.textContent = 'Хотын нэр оруулна уу!';
                return;
            }

            error.textContent = '';
            weatherInfo.classList.remove('show');

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=mn`
                );
                
                const data = await response.json();

                if (data.cod === 200) {
                    displayWeather({
                        name: data.name,
                        temp: Math.round(data.main.temp),
                        description: data.weather[0].description,
                        humidity: data.main.humidity,
                        wind: data.wind.speed,
                        feelsLike: Math.round(data.main.feels_like),
                        pressure: data.main.pressure
                    });
                } else {
                    error.textContent = 'Хот олдсонгүй. Нэрийг зөв оруулна уу.';
                }
            } catch (err) {
                error.textContent = 'Алдаа гарлаа. Интернэт холболтоо шалгана уу.';
                console.error('Error:', err);
            }
        }

        function displayWeather(data) {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `${data.temp}°C`;
            document.getElementById('description').textContent = data.description;
            document.getElementById('humidity').textContent = `${data.humidity}%`;
            document.getElementById('wind').textContent = `${data.wind} м/с`;
            document.getElementById('feelsLike').textContent = `${data.feelsLike}°C`;
            document.getElementById('pressure').textContent = `${data.pressure} hPa`;

            document.getElementById('weatherInfo').classList.add('show');
        }

        document.getElementById('cityInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getWeather();
            }
        });