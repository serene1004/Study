<?php
  //폼 정보를 $변수를 설정 그리고 $변수에 기억
  $email = $_POST['email'];
  $code  = $_POST['code'];

  //서버(Server)가  클라이언트(Client)에 응답
  echo '<p>축하합니다. 메일 리스트에 저장되었습 니다.</p>'.$email.'<br>'.$code;

?>