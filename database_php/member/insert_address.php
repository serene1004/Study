<?php

    // 헤더 가져오기
    include_once('header.php');


    // 데이터삽입
    $sql = "insert into address (name, hp, tel, addr) values 
            ('haha', '010-1234-5678', '02-1234-5678', '서울'),
            ('hihi', '010-2323-3434', '02-2255-5454', '서울'),
            ('hoho', '010-8282-2828', '032-451-4545', '인천'),
            ('hehe', '010-9876-5432', '051-555-7777', '부산'),
            ('huhu', '010-7788-9900', '031-332-2233', '경기')
    ";
    mysqli_Query($connect, $sql);




    // 푸터 가져오기
    include_once('footer.php');

?>

<!-- localhost/member/insert_address.php -->