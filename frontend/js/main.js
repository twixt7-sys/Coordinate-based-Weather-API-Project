async function searchWeather() {
	const latitude = document.getElementById('latitude').value;
	const longitude = document.getElementById('longitude').value;
	const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true`);
	const data = await res.json();
	const temp = data.current_weather.temperature;
	const wspeed = data.current_weather.windspeed;

	document.getElementById('temperature').innerHTML = `Temperature in (${latitude}, ${longitude}): ${temp}°C`;
	document.getElementById('windspeed').innerHTML = `Windspeed in (${latitude}, ${longitude}): ${temp}°C`;

	// Save to DB
	await fetch('../backend/save_weather.php', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ city, temperature: temp })
	});
}
