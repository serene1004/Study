<style>
    table {border-collapse: collapse;margin:100px auto;}
    caption {font-size:25px;color:#39c;padding: 40px 0;}
    table th {border:1px solid #ccc;text-align:center;vertical-align:middle;height: 40px;text-transform: uppercase;background: #f7f7d7;}
    table td {border:1px solid #ccc;text-align:center;vertical-align:middle;height: 40px;font-weight: normal;}
    table tfoot tr td {background: #d8d8f9;}
    table tbody tr td {text-align: center;}
    table td:last-child {text-align: left;text-indent:15px;}
    table tr:hover td {background: #f0f0f0;}
</style>

<?php

    include_once('header.php');


    // 데이터검색 (select from address) 데이터출력
    $sql = "select * from address";
    $result = mysqli_Query($connect, $sql);

    // 레코드 카운트
    // echo '멤버 인원 : ' .mysqli_num_rows($result);

    // 목록이 1개이상 출력시
    if(mysqli_num_rows($result) > 0){
        echo "<table>";
        echo "<caption>멤버목록</caption>";
        echo "<colgroup>";
        echo "<col style='width:50px'>";
        echo "<col style='width:130px'>";
        echo "<col style='width:150px'>";
        echo "<col style='width:150px'>";
        echo "<col style='width:500px'>";
        echo "</colgroup>";
        echo "<thead>";
        echo "<tr>";
        echo "<th>No.</th><th>Name</th><th>hp</th><th>tel</th><th>addr</th>";
        echo "</tr>";
        echo "</thead>";

        echo "<tfoot>";
        echo "<tr>";
        echo "<td colspan='4'>총 멤버의 수</td><td>". mysqli_num_rows($result) ."</td>";
        echo "</tr>";
        echo "</tfoot>";

        echo "<tbody>";
        // 반복처리 데이터 출력
        while($row = mysqli_fetch_array($result)){
            echo "<tr>";
            echo "<td>".$row['idx']. "</td>";
            echo "<td>".$row['name']. "</td>";
            echo "<td>".$row['hp']. "</td>";
            echo "<td>".$row['tel']. "</td>";
            echo "<td>".$row['addr']. "</td>";
            echo "</tr>";
        }
        echo "</tbody>";

        echo "</table>";
    }   // end if




    include_once('footer.php');

?>

<!-- localhost/member/select_address.php -->