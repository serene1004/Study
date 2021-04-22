<?php

$servername = 'localhost';
$username   = 'root';
$password   = 'autoset';
$dbname     = 'member';

$connect = mysqli_connect($servername, $username, $password, $dbname);
mysqli_set_charset($connect, 'utf8');   // 인코딩 utf8

if(!$connect){
    die('접속실패');
}

?>

<!-- localhost/member/header.php -->