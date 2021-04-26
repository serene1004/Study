<?php

    include_once('header.php');

    $sql = "create table if not exists member (
            idx int(11) auto_increment not null,
            name varchar(30) not null,
            tel varchar(13) not null,
            primary key (idx)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

    $result = mysqli_Query($connect, $sql);
    if(!$result){
        die('Connection failed');
    }

    include_once('footer.php');

?>
<!-- serene.dothome.co.kr/0425_db/create_member.php -->