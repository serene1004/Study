<?php

    $servername = 'localhost';
    $username   = 'serene';
    $password   = 'vcb464658!';
    $dbname     = 'serene';

    $connect = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($connect, 'utf8');

    if(!$connect){
        die('Connection failed');
    }

?>