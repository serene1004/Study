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

// 테이블 데이터 검색 select * from student;
$sql = "select * from student";

// 쿼리(Query) 실행(Excution)
$result = mysqli_Query($conn, $sql);  // 쿼리에 sql 실행

// 카운트
echo '레코드 갯수:' .mysqli_num_rows($result);

// 데이터가 1개이상인 경우에만 출력
if(mysqli_num_rows($result) > 0){
    $txt = '';
    $cnt = 0;

    // 반복처리 배열처리(mysqli_fetch_array())
    // 조건이 만족하는한 계산 반복문 수행 while(){}
    while($row = mysqli_fetch_array($result)){
        $cnt++;
        $txt .= '<div>';
        $txt .= $row['name'].', ';
        $txt .= $row['kor'].', ';
        $txt .= $row['eng'].', ';
        $txt .= $row['mat'];
        $txt .= '</div>';
    }
    echo $txt; // 정보출력

}

// 한글인코딩 추가


// 데이터베이스 닫기(종료)
mysqli_close($conn);


?>

<!-- localhost/dbconn/select.php -->