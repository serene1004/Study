<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>table생성</title>
</head>
<body>
    
    <?php

        include_once('header.php');
        
        // 테이블을 생성하는 SQL
        // 테이블이 없으면 만들고 있으면 만들지않는다 (if not exists)
        $sql = "create table if not exists email_table (
                idx int(11) auto_increment not null,
                email varchar(100) not null,
                primary key (idx)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
        
        
        $result = mysqli_Query($connect, $sql);
        
        if(!$result){
            die('테이블 생성 실패');
        }
        echo '테이블 생성';
        
        include_once('footer.php');

    ?>

</body>
</html>

<!-- serene.dothome.co.kr/litho/create_email_table.php -->