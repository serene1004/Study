<?php

    $servername = 'localhost';
    $username   = 'root';
    $password   = 'autoset';
    $dbname     = 'customer';

    $connect = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($connect, 'utf8');

    if(!$connect){
        die('접속실패');
    }

?>

<!-- localhost/customer/header.php -->