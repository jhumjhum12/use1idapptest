<?php
echo 'hello';//exit;
include "db.php";
$data=array();
$q=mysqli_query($con,"select * from `ud_gen_pd_users`");
while ($row=mysqli_fetch_object($q)){
 $data[]=$row;
}
echo json_encode($data);



?>
