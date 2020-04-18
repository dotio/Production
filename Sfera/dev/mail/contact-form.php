<?php 

// require 'phpmailer/PHPMailerAutoload.php';
// $mail = new PHPMailer;
// $mail->SMTPDebug = 2; 
// // Form Data
// $fullname = $_REQUEST['name'] ;
// $email = $_REQUEST['email'] ;
// $mobile = $_REQUEST['phone'];
// $mailbody = 'New Lead Enquiry' . PHP_EOL . PHP_EOL .
//             'Name: ' . $fullname . '' . PHP_EOL .
//             'Mobile:' . $mobile . '' . PHP_EOL .
//             'Interested In: ' . $category . '' . PHP_EOL .
//             'Message: ' . $message . '' . PHP_EOL;
// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
// $mail->SMTPAuth = true; // Enable SMTP authentication
// $mail->Username = 'sferasferaeby@gmail.com'; // SMTP username
// $mail->Password = 'avt7160114'; // SMTP password
// $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 587; // TCP port to connect to
// $mail->setFrom('sferasferaeby@gmail.com', 'WebMaster'); // Admin ID
// $mail->addAddress('alvasmas@inbox.ru', 'Business Owner'); // Business Owner ID
// $mail->addReplyTo($email, $fullname); // Form Submitter's ID
// $mail->isHTML(false); // Set email format to HTML
// $mail->Subject = 'New Lead Enquiry';
// $mail->Body    = $mailbody;
// if(!$mail->send()) {
//     echo 'Message could not be sent.';
//     echo 'Mailer Error: ' . $mail->ErrorInfo;
// } else {
//     echo 'Message has been sent';
// }






require_once('phpmailer/PHPMailerAutoload.php');
//require_once("../css/style.css");
$mail = new PHPMailer;

// $email = trim($_POST['email']);
// $name = htmlspecialchars($_POST['user_name']);
// $email = htmlspecialchars($_POST['user_emai']);
// $phone = htmlspecialchars($_POST["user_phone"]);


try {
	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);
	$email = trim($_POST['email']);
	$mail->CharSet = 'utf-8';
	//$mail->SMTPDebug = 2; 
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'sferasferaeby@gmail.com'; 
	$mail->Password = 'avt7160114'; 
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;
	$mail->setFrom('sferasferaeby@gmail.com', 'Sfera-s-no-reply');
	$mail->addAddress('alvasmas@inbox.ru', 'Получатель');
	$mail->isHTML(true); 
	$mail->Subject = 'Заявка с сайта Sfera-s';
	$mail->Body = "\n\nИмя отравителя: ".$name." <br> \n\nТелефон: " .$phone." <br> \n\nE-mail: " .$email;
	$mail->AltBody = '';

	$mail->send();

	echo '
	<!DOCTYPE html>
	<html lang="ru">
  <head>
    <title>СФЕРА-С | Стратегия Успеха</title>
    <meta charset="utf-8">
    <meta content="" name="author">
    <meta content="" name="description">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta name="HandheldFriendly" content="true">
    <meta name="format-detection" content="telephone=no">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <link rel="apple-touch-icon" sizes="180x180" href="../favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png">
    <link rel="manifest" href="../favicon/site.webmanifest">
    <link rel="mask-icon" href="../favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet"  href="../css/style.css">
  </head>
	<body>
	<div class="container">
		<div class="hooray">
			<svg class="icon icon-check-mark ">
        <use xlink:href="/svg/sprite.svg#check-mark"></use>
      </svg>
			<p>Спасибо,</p>
			<p>что выбрали нас!</p>
			<a href="index.html" class="btnPur">Вернуться на сайт</a>
		</div>
	</div>
	</body>
	</html>
	'
	;
	

} catch (Exception $e) {
	echo 'Не возможно отправить письмо. Ошибка: ', $mail->ErrorInfo;
}

?>