<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        div {padding-top: 30px;}
        div a {display: block;width: 100px;height: 40px;margin:0 auto;background: #f7f7f7;border: 1px solid #000;color: #333;text-decoration: none;text-align: center;}
        div a span {display: inline-block;line-height: 40px;}
    </style>

</head>
<body>
    
    <?php

        include_once('header.php');

        // 입력 데이터 변수에 대입
        $email = $_POST['email'];

        // input : insert input table(name)
        $sql = "insert into email_table (email) values ('$email')";

        $result = mysqli_Query($connect, $sql);

        if($result){
            echo '메일주소 전송완료!' . "<div><a href='javascript:' onclick='javascript:history.go(-1);'><span>HOME</span></a><div>";
        }

        include_once('footer.php');

    ?>

</body>
</html>