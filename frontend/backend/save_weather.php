<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Allow CORS (only use * for dev)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405); // Method Not Allowed
	echo json_encode(["status" => "error", "message" => "Only POST method is allowed"]);
	exit;
}

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$latitude = $data['latitude'];
$longitude = $data['longitude'];
$temp = $data['temperature'];
$wind = $data['windspeed'];

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
