<?php
include_once('dbconnection.php');

$UserName = $_POST['fname'];
$email = $_POST['email'];
$MobileNo = $_POST['phone'];
$type = $_POST['subject'];
$message = $_POST['message'];


$query = "INSERT INTO `contactus`(`Name`, `Email`, `MobileNo`, `Type`, `Message`) 
        VALUES ('$UserName','$email','$MobileNo','$type','$message')";

 if(mysqli_query($con,$query))
 {
    echo "insereted sucessfully";
    header("location:messag2.html");

 }  
 else 
 {
    echo "Failed";
 }     

?>