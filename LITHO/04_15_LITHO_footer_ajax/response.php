<?
    // 데이터베이스 헤더문()
    // 서버이름(local host)
    // 사용자이름(id)
    // 비밀번호(pw)
    // 데이터베이스이름(만들기나름임) 설정

    // 폼 정보를 $변수에 설정 후 $변수에 기억(저장)
    $email = $_POST['email'];
    $code = $_POST['code'];




    // 데이터베이스에 저장(입력)
    // sql insert into $email



    // 서버가 클라이언트에 응답
    echo '<p>Hello World</p>' . $email .'<br>'. $code;

?>