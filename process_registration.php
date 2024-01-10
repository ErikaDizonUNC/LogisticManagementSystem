<?php
require_once('db_connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get values from the registration form
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
    $role = $_POST['role'];

    // Generate a unique validation token
    $validationToken = bin2hex(random_bytes(32));

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (full_name, email, password, role, validation_token) VALUES (?, ?, ?, ?, ?)");

    // Check if the prepare was successful
    if (!$stmt) {
        die("Error in statement preparation: " . $conn->error);
    }

    $stmt->bind_param("sssss", $fullName, $email, $password, $role, $validationToken);

    // Execute the prepared statement
    if ($stmt->execute()) {
        // Registration successful

        // Send validation email
        $subject = "Account Validation";
        $message = "Click the following link to validate your account: http://yourwebsite.com/validate.php?token=$validationToken";
        $headers = "From: webmaster@yourwebsite.com";

        mail($email, $subject, $message, $headers);

        echo "Registration successful! Please check your email for validation instructions.";
    } else {
        // Registration failed
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
