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
    
    $PName = $_POST['item'];
    echo $PName;
    $Quantity = $_POST['right-page--qty'];
    $cropid = $_POST['cid'];

    $query = "INSERT INTO `croppurchase`(`cropid`, `Quantity`, `name`, `address`, `Telephone`) 
              VALUES ('$cropid','$Quantity','$name','$PName','$mobileNo');";
    
    $result = mysqli_query($con, $query);

    if($result)
    {
        header("location:fertilizers.php");
        
    }
}
?>
