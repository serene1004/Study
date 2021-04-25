<?php

    $servername = 'localhost';
    $username   = 'serene';
    $password   = 'vcb464658!';
    $dbname     = 'serene';

    $connect = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($connect, 'utf8');

    if(!$connect){
        die('접속실패');
    }

?>

<!-- serene.dothome.co.kr/litho/header.php -->