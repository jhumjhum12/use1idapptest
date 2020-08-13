<?php
echo 'hello';//exit;
include "db.php";
$data=array();
$q=mysqli_query($con,"select * from `customers`");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);



?>