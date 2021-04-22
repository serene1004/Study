<?php

$severname = 'localhost';
$username  = 'root';
$password  = 'autoset';
$dbname    = 'school';

// 데이터베이스 연결(접속)
$conn = mysqli_connect($severname, $username, $password, $dbname);
// 한글인코딩 추가

// 접속실패메시지
if(!$conn){
    die('접속실패');
}

// 접속성공메시지
echo '접속!';

// 테이블 데이터 입력 insert into student(field1, field2, field3, field4) values ('haha', 70, 80, 100)
$sql = "insert into student (name, kor, eng, mat) values
                            ('hihi', '100', '90', '70'),
                            ('hoho', '80', '90', '90'),
                            ('hehe', '90', '80', '70')";

// 쿼리(Query) 실행(Excution)
mysqli_Query($conn, $sql);  // 쿼리에 sql 실행



// 한글인코딩 추가


// 데이터베이스 닫기(종료)
mysqli_close($conn);


?>

<!-- localhost/dbconn/insert_into.php -->