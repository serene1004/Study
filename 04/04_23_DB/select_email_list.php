<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이메일정보</title>
    
    <link rel="stylesheet" href="./form_css/reset.css">
    <link rel="stylesheet" href="./form_css/style.css">

    <style>
        div {padding-top: 30px;}
        div a {display: block;width: 100px;height: 40px;margin:0 auto;background: #f7f7f7;border: 1px solid #000;color: #333;text-decoration: none;text-align: center;}
        div a span {display: inline-block;line-height: 40px;}
    </style>

</head>
<body>

    <?php

        include_once('header.php');

        // 정보검색
        $sql = 'select * from email_table';
        $result = mysqli_Query($connect, $sql);

        // 데이터 레코드가 1개이상이면
        if(mysqli_num_rows($result) > 0){

            echo "<table class='select-table'>";

            echo "<caption>이메일 정보</caption>";

            // 반복문 배열처리
            while($row = mysqli_fetch_array($result)){
                echo "<tr>";
                echo "<td>".$row['idx']."</td>";
                echo "<td>".$row['email']."</td>";
                echo "</tr>";
            }

            echo "</table>";
            echo "<div><a href='javascript:' onclick='javascript:history.go(-1);'><span>HOME</span></a><div>";
        }


        include_once('footer.php');

    ?>

</body>
</html>