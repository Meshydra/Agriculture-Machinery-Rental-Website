<?php
include_once('dbconnection.php');

if (isset($_POST['submit'])) {

    //fetch from html
    $UserName = $_POST["UserName"];
    $Password = $_POST['Password'];

    $query1 = "SELECT * FROM `membership` WHERE UserName= '$UserName'";
    $duplicate = mysqli_query($con, $query1);


    //Selection from database
    $query = "SELECT `Password`  FROM `membership` where UserName='$UserName';";
    $result = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($result);
    if (mysqli_num_rows($result) > 0) {
        //Confirmation check
        if ($Password == $row['Password']) {
            $_SESSION['login'] = true;
            $_SESSION['name'] = $row['UserName'];
            $_SESSION['Pass'] = $UserName;
            
            header("location:index.php");


        } else {
            echo "<script>alert('Wrong password');</script>";
        }
    } else {
        echo "<script>alert('User not registered');</script>";
    }
}





?>
