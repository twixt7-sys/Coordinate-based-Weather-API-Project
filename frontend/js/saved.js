fetch('../backend/get_saved_weather.php')
	.then(res => res.json())
	.then(data => {
		const list = document.getElementById('weatherList');
		data.forEach(entry => {
			const li = document.createElement('li');
			li.textContent = `${entry.city}: ${entry.temperature}°C on ${entry.saved_at}`;
			list.appendChild(li);
		});
	});
