<?php

    date_default_timezone_set('America/Chihuahua');
    $destinatario = 'jair.estrada28@gmail.com';
    $nombre = $_POST['name'];
    $asunto = 'TodoPc web';
    $tel = $_POST['tel'];
    $mensaje = $_POST['message'];
    $email = $_POST['email'];

    $diassemana = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
    $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

    $header = 'From: '. $email." \r\n".'Enviado desde la pagina web de todo pc';
    $mensajeCompleto = 'Nombre del cliente: ' . $nombre . "\n" . 'Telefono: ' . $tel . "\n" . 'Correo: ' .$email . "\n" . 'Mensaje: ' .$mensaje. "\n" . 'Enviado el: ' . $diassemana[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') . ' ' . date('h:i:s A');

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "Registro exitoso";

    //echo $diassemana[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;
    //echo "<script>Correo enviado exitosamente</script>";
    //echo "<script>setTimeout("location.href = 'index.html'", 1000)</script>";
?>