<?php
$servername = "localhost";  // Update the server name to 'localhost'
$username = "root";  // Use 'root' as the username
$password = "domo_project04";  // Use 'domo_project04' as the password
$dbname = "registration";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
