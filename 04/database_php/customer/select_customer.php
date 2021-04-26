<style>
    table {border-collapse: collapse;margin: 0 auto;}
    table caption {padding: 25px 0;color: #fdc;font-size: 30px;}

    table thead th {border: 1px solid #000;height: 40px;text-align: center;text-transform: uppercase;background: #cff;}
    table tfoot tr td {border: 1px solid #000;height: 40px;background: #cfd;text-align: center;}
    table tbody tr td {border: 1px solid #000;width: 150px;height: 40px;text-align: center;}
    table tbody tr td:nth-child(1) {width: 40px;}
    table tbody tr td:nth-child(3) {width: 40px;}
    table tbody tr td:nth-child(5) {width: 400px;text-align: left;text-indent: 20px;}
</style>

<?php

    include_once('header.php');

    $sql    = "select * from customer";
    $result = mysqli_Query($connect, $sql);

    if(mysqli_num_rows($result) > 0){
        echo "<table>";
        echo "<caption>고객정보</caption>";
        echo "<thead>";
        echo "<th>no.</th><th>이름</th><th>등급</th><th>hp</th><th>주소</th>";
        echo "</thead>";

        echo "<tfoot>";
        echo "<tr>";
        echo "<td colspan='4'>총 고객 수</td><td>". mysqli_num_rows($result) . "명" ."</td>";
        echo "</tr>";
        echo "</tfoot>";

        echo "<tbody>";
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
            echo "<td>".$row['idx']  ."</td>";
            echo "<td>".$row['name'] ."</td>";
            echo "<td>".$row['grade']."</td>";
            echo "<td>".$row['hp']   ."</td>";
            echo "<td>".$row['addr'] ."</td>";
            echo "</tr>";
        }
        echo "</tbody>";
        
        echo "</table>";
    }


    include_once('footer.php');

?>

<!-- localhost/customer/select_customer.php -->