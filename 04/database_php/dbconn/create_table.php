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

// 테이블생성
$sql = 'create table student (
        idx int(11) auto_increment not null,
        name varchar(30) not null,
        kor int(11) not null,
        eng int(11) not null,
        mat int(11) not null,
        primary key(idx)
)';

// 쿼리(Query) 실행(Excution)
mysqli_Query($conn, $sql);  // 쿼리에 sql 실행



// 한글인코딩 추가


// 데이터베이스 닫기(종료)
mysqli_close($conn);


?>

<!-- localhost/dbconn/create_table.php -->