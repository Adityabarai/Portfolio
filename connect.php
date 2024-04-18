<?php
    $fullName = $_POST['fullName'];
    $email = $_POST['email']; 
    $mobileNumber = $_POST['mobileNumber'];
    $emailsubject = $_POST['emailsubject'];
    $yourmessage = $_POST['yourmessage'];

    // Database connection
    $conn = new mysqli('localhost', 'root', ' ', 'portfolio');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        // Prepare and execute the SQL statement
        $stmt = $conn->prepare("INSERT INTO contactMe (fullName, emailAddress, mobileNumber, emailsubject, yourmessage) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss", $fullName, $emailAddress, $mobileNumber, $emailsubject, $yourmessage);
        $stmt->execute();
        

        // Close statement and connection
        $stmt->close();
        $conn->close();
    }
