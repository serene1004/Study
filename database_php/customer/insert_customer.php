<?php

    include_once('header.php');

    $sql = "insert into customer (name, grade, hp, addr) values
            ('mama', 'A', '010-1234-5678', '서울'),
            ('momo', 'B', '010-1212-3434', '부산'),
            ('mimi', 'A', '010-9988-7788', '인천'),
            ('mumu', 'C', '010-1577-1577', '제주'),
            ('meme', 'S', '010-1001-0110', '서울'),
            ('baba', 'B', '010-9876-5432', '경기')";

    mysqli_Query($connect, $sql);


?>

<!-- localhost/customer/insert_customer.php -->