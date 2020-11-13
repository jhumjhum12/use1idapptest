<?php

include "db.php";
    if(isset($_REQUEST['login']))
    {   
    $email=$_REQUEST['email'];
	$password=$_REQUEST['pass'];
	
    $q=mysqli_query($con,"select * from `customers` where `email`='".$email."' and `password`='".$password."'");
    if(count($q)>0)
    echo "success";
    else
    echo "error";
    }
?>