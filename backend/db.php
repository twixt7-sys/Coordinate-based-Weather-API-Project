<?php
$host = "http://127.0.0.1:5500/";
$user = "root";
$pass = "";
$db = "weather_app";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
?>
