<?php
include_once('dbconnection.php');
$name = $_SESSION['Pass'];

if (isset($_POST['submit'])) 
{
    $query = "SELECT * FROM `membership` WHERE UserName='$name';";

    $result = mysqli_query($con, $query);
    $row = mysqli_fetch_assoc($result);
    if (mysqli_num_rows($result) > 0) 
    {
       // $email = $row['Email'];
        $mobileNo = $row['MobileNo'];

    }
    
    $PName = $_POST['sell-location'];
    echo $PName;
    $Quantity = $_POST['quantity'];
    $cropid = $_POST['cid'];

    $query = "INSERT INTO `cropsales`(`cropid`, `Quantity`, `Name`, `address`, `mobileNo`) 
             VALUES ('$cropid','$Quantity','$name','$PName','$mobileNo');";
    
    $result = mysqli_query($con, $query);

    if($result)
    {
        header("location:fertilizers.php");
        
    }
}
?>
