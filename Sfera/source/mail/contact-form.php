<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
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
	$mail->addAddress('sfera2019s@yandex.ru', 'Получатель');
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
			<a href="http://sfera-s.net" class="btnPur">&#8592; &nbsp; Вернуться на сайт</a>
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