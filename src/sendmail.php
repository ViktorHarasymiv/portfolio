<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {

   //Server settings
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'victorharasymiv97@gmail.com';                     //SMTP username
$mail->Password   = '';                               //SMTP password
$mail->SMTPSecure = 'TLS';            //Enable implicit TLS encryption
$mail->Port       = 465;                                    

$mail ->CharSet = 'UTF - 8';
$mail ->setLanguage('ua, en', 'phpmailer/language/');
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


$mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}