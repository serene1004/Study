<?php
// 1. 서버(호스트)이름 localhost
// 2. 사용자이름       root
// 3. 비밀번호         autoset
// 4. 데이터베이스이름 school

$servername = 'localhost';
$username   = 'root';
$password   = 'autoset';
$dbname     = 'school';

// 연결(connect)
$connect = mysqli_connect('localhost', 'root', 'autoset', 'school');
if(!$connect){
    die('데이터베이스 접속실패');
}
// 성공메시지
echo '데이터베이스 접속성공';

// database 종료
mysqli_close($connect);

?>

<!-- localhost/dbconn/dbconn.php -->