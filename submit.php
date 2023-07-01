<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate form data (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($message)) {
        // Redirect back to the contact form with an error message
        header("Location: index.html#contact?error=emptyfields");
        exit();
    }

    // Process the form (you can add code here to send an email, save the message to a database, etc.)

    // Redirect back to the contact form with a success message
    header("Location: index.html#contact?success=true");
    exit();
} else {
    // If accessed directly, redirect back to the contact form
    header("Location: index.html#contact");
    exit();
}
?>
