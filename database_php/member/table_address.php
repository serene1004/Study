<?php

    // 헤더 가져오기
    include_once('header.php');


    // 테이블 만들기
    $sql = "create table address (
        idx int auto_increment not null,
        name varchar(20)  not null,
        hp   varchar(13)  not null,
        tel  varchar(13)  not null,
        addr varchar(250) not null,
        primary key (idx)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

    // 쿼리실행
    mysqli_Query($connect, $sql);

    








    // 푸터 가져오기
    include_once('footer.php');

?>

<!-- localhost/member/table_address.php -->