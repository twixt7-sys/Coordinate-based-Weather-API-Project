<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$latitude = $data['latitude'];
$longitude = $data['longitude'];
$temp = $data['temperature'];
$wind = $data['windspeed'];

// Debug: Check if values exist
if (!$latitude || !$longitude || !$temp || !$wind) {
	echo json_encode(["status" => "error", "message" => "Missing values"]);
	exit;
}

// Prepare statement
$stmt = $conn->prepare("INSERT INTO weather_data (latitude, longitude, temperature, windspeed) VALUES (?, ?, ?, ?)");
$stmt->bind_param("dddd", $latitude, $longitude, $temp, $wind);

if ($stmt->execute()) {
	echo json_encode(["status" => "saved"]);
} else {
	echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
