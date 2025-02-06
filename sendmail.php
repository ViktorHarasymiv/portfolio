<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'

$mail = new PHPMailer(true);

try {

$mail ->CharSet = 'UTF - 8';
$mail ->setLanguage('ua', 'phpmailer/language/');
$mail ->IsHTML(true);

$mail->setForm('victorharasymiv97@gmail.com', 'Portfolio');
$mail->addAddress('victorharasymiv97@gmail.com');
$mail->Subject = 'Form content from portfolio';

$body = '<h1>Перше письмо !</h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p>Name: '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))) {
    $body.='<p>Email: '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['message']))) {
    $body.='<p>Message: '.$_POST['message'].'</p>';
}

$mail->Body = $body;


if (!$mail->send()) {
    $message = 'Помилка !';
} else {
    $message = 'Відправлено !';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>