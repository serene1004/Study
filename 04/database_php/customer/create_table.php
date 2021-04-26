<?php

    include_once('header.php');

    $sql = 'create table customer (
            idx int(11) auto_increment not null,
            name  varchar(30)  not null,
            grade varchar(11)  not null,
            hp    varchar(13)  not null,
            addr  varchar(250) not null,
            primary key (idx)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8';

    mysqli_Query($connect, $sql);



    include_once('footer.php');

?>

<!-- localhost/customer/create_table.php -->