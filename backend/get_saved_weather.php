<?php
include 'db.php';
$result = $conn->query("SELECT * FROM weather_data ORDER BY id DESC");
$data = [];

while ($row = $result->fetch_assoc()) {
	$data[] = $row;
}
echo json_encode($data);
?>
