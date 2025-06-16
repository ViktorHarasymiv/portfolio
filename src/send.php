<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "victorharasymiv97@gmail.com";
    $subject = "Нове повідомлення з сайту";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
    echo "Повідомлення надіслано!";
}
?>