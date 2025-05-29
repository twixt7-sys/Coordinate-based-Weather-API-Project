fetch('backend/get_saved_weather.php')
	.then(res => res.json())
	.then(data => {
		const list = document.getElementById('weatherList');
		data.forEach(entry => {
			const li = document.createElement('li');
			li.textContent = `Lat: ${entry.latitude}, Long: ${entry.longitude}, Temp: ${entry.temperature}°C, Wind: ${entry.windspeed} km/h on ${entry.saved_at}`;
			list.appendChild(li);
		});
	});
