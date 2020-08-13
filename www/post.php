<?php

include "db.php";
    if(isset($_REQUEST['insert']))
    {
    $first_name=$_REQUEST['first_name'];
    $lirst_name=$_REQUEST['last_name'];
    $email=$_REQUEST['email'];
	$password=$_REQUEST['pass'];
	$address=$_REQUEST['address'];
    $q=mysqli_query($con,"INSERT INTO `customers` ( `first_name`, `last_name`, `email`, `password`,`address` ) VALUES ('$first_name','$lirst_name','$email','$password','$address')");
    if($q)
    echo "success";
    else
    echo "error";
    }
?>