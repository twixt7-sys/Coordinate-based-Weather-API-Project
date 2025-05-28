<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$latitude = $data['latitude'];
$longitude = $data['longitude'];
$temp = $data['temperature'];
$wind = $data['windspeed'];

if (!$latitude || !$longitude || !$temp || !$wind) {
	echo json_encode(["status" => "error", "message" => "Missing values"]);
	exit;
}

$stmt = $conn->prepare("INSERT INTO weather_data (latitude, longitude, temperature, windspeed) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ddss", $latitude, $longitude, $temp, $wind);

if ($stmt->execute()) {
	echo json_encode(["status" => "saved"]);
} else {
	echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
