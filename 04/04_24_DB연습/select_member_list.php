<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>member list</title>
    
    <link rel="stylesheet" href="./form_css/reset.css">
    <link rel="stylesheet" href="./form_css/style.css">

    <style>
        * {
            margin: 0;
            padding: 0;
            vertical-align: middle;
            border: 0;
        }
        
        table {width: 400px;margin: 0 auto;border-collapse: collapse;}
        table caption {font-size: 20px;padding: 30px 0;}
        table td {font-size: 15px;height: 40px;border: 1px solid #000;}
        table td:nth-child(1) {width: 10%;text-align: center;}
        table td:nth-child(2) {width: 30%;text-indent: 10px;}
        table td:nth-child(3) {width: 60%;text-indent: 10px;}

        div {padding-top: 30px;}
        div a {display: block;width: 100px;height: 40px;margin:0 auto;background: #f7f7f7;border: 1px solid #000;color: #333;text-decoration: none;text-align: center;}
        div a span {display: inline-block;line-height: 40px;}
        
    </style>

</head>
<body>

    <?php

        include_once('header.php');
        $sql = 'select * from member';
        $result = mysqli_Query($connect, $sql);

        if(mysqli_num_rows($result) > 0){

            echo "<table>";
            echo "<caption>MEMBER LIST</caption>";

            while($row = mysqli_fetch_array($result)){
                echo "<tr>";
                echo "<td>".$row['idx']."</td>";
                echo "<td>".$row['name']."</td>";
                echo "<td>".$row['tel']."</td>";
                echo "</tr>";
            }
            
            echo "</table>";
            echo "<div><a href='javascript:' onclick='javascript:history.go(-1);'><span>HOME</span></a><div>";
        }

        include_once('footer.php');

    ?>

</body>
</html>