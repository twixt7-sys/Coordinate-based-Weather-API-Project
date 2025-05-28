async function searchWeather() {
	const city = document.getElementById('city').value;
	const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true`);
	const data = await res.json();
	const temp = data.current_weather.temperature;

	document.getElementById('result').innerHTML = `Temperature in ${city}: ${temp}°C`;

	// Save to DB
	await fetch('../backend/save_weather.php', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ city, temperature: temp })
	});
}
