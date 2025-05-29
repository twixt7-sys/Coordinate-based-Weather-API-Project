async function searchWeather() {
	const latitude = parseFloat(document.getElementById('latitude').value);
	const longitude = parseFloat(document.getElementById('longitude').value);

	if (!(latitude < 90 && latitude > -90) || !(longitude < 180 && longitude > -180)) {
		alert('Latitude must be between -90 and 90 and longitude must be between -180 and 180');
		return;
	}

	const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
	const data = await res.json();

	const temp = data.current_weather.temperature;
	const wspeed = data.current_weather.windspeed;

	document.getElementById('temperature').innerHTML = `Temperature in (${latitude}, ${longitude}): ${temp}°C`;
	document.getElementById('windspeed').innerHTML = `Windspeed in (${latitude}, ${longitude}): ${wspeed} km/h`;
}

async function saveWeather() {
	const latitude = parseFloat(document.getElementById('latitude').value);
	const longitude = parseFloat(document.getElementById('longitude').value);

	if (!(latitude < 90 && latitude > -90) || !(longitude < 180 && longitude > -180)) {
		alert('Latitude must be between -90 and 90 and longitude must be between -180 and 180');
		return;
	}

	const res = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
		params: {
			latitude: latitude,
			longitude: longitude,
			current_weather: true
		}
	});

	const temp = res.data.current_weather.temperature;
	const wspeed = res.data.current_weather.windspeed;

	axios.post('backend/save_weather.php', {
		latitude: latitude,
		longitude: longitude,
		temperature: temp,
		windspeed: wspeed
	}, {
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res => {
		console.log(res.data);
		alert('Weather data saved successfully!');
	})
	.catch(err => {
		console.error(err);
		alert('Error saving weather data.');
	});


	alert('Weather data saved successfully!');
}