<?php
if (!isset($_POST['check'])) {
	return 'Error';
}
header("Content-Type: text/html; charset=utf-8");

$tel = htmlspecialchars($_POST["tel"]);



$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "Ho6otok@gmail.com"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "Здравствуйте, Вам заявка с Вашего сайта с номером телефона : ";
$message_to_myemail = "Заявка с Вашего сайта:
<br><br>
Телефон клиента: $tel<br><br>
Источник (ссылка): $refferer";

mail($myemail, $tema, $message_to_myemail, "From: Karkas Marketing <mailresendering@mail.com> \r\n Reply-To: Karkas Marketing \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );



// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);

?>