<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"), true);
$city = $data['city'];
$temp = $data['temperature'];

$stmt = $conn->prepare("INSERT INTO weather_data (city, temperature) VALUES (?, ?)");
$stmt->bind_param("ss", $city, $temp);
$stmt->execute();
echo json_encode(["status" => "saved"]);
?>
