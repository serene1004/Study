<?php

    // 헤더 가져오기
    include_once('header.php');

    // 화면정보 입력
    $name = $_POST['name']; // 폼 name
    $hp   = $_POST['hp'];   // 폼 name
    $tel  = $_POST['tel'];  // 폼 name
    $addr = $_POST['addr']; // 폼 name


    // 데이터삽입
    $sql = "insert into address (name, hp, tel, addr) values 
            ('$name', '$hp', '$tel', '$addr')";     // 변수를 작은따옴표('')로 감싼다

    mysqli_Query($connect, $sql);
    $result = mysqli_Query($connect, $sql);

    if($result){
        echo '전송완료' . '<br><button onclick="javascript:history.go(-1)">초기화면으로</button>';
    }



    // 푸터 가져오기
    include_once('footer.php');

?>

<!-- localhost/member/insert_form.php -->