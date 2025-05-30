document.addEventListener("DOMContentLoaded", async function () {
	const weatherList = document.getElementById("weatherList");

	try {
		const response = await axios.get("/api/saved-weather");
		const savedWeather = response.data;

		if (!savedWeather.length) {
			weatherList.innerHTML = "<p class='text-center'>No saved weather records yet.</p>";
			return;
		}

		savedWeather.forEach((record, index) => {
			const card = document.createElement("div");
			card.className = "card mb-3 bg-primary text-white";
			card.innerHTML = `
				<div class="p-3 rounded" style="background-color: rgb(26, 37, 73);">
					<h5 class="text-info card-title">Record #${index + 1}</h5>
					<hr>
					<p class="card-text" style="color: rgb(241, 140, 184);">🌡️ Temperature: <strong>${record.temperature}°C</strong></p>
					<p class="card-text" style="color: rgb(92, 188, 101);">🍃 Wind Speed: <strong>${record.windspeed} km/h</strong></p>
					<p class="card-text" style="color: rgb(174, 174, 174);">📍 Lat: ${record.latitude}, Long: ${record.longitude}</p>
					<hr>
					<div class="d-flex justify-content-between align-items-center">
					<small class="text" style="color: rgb(113, 182, 255);">Saved on: ${record.timestamp}</small>
					<button class="btn btn-outline-danger mt-2" onclick="deleteWeather(${record.id})">Delete</button>
					</div>
				</div>
			`;
			weatherList.appendChild(card);
		});
	} catch (err) {
		console.error("Failed to fetch saved weather:", err);
		weatherList.innerHTML = "<p class='text-center text-danger'>Error loading data.</p>";
	}
});

async function deleteWeather(id) {
	try {
		const response = await axios.delete(`/api/saved-weather/${id}`);
		if (response.status === 200) {
			alert("Weather record deleted successfully!");
			location.reload();
		} else {
			alert("Failed to delete the weather record.");
		}
	} catch (err) {
		console.error("Error deleting weather record:", err);
		alert("An error occurred while trying to delete the record.");
	}
}