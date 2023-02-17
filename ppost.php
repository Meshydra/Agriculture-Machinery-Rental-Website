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
          $email = $row['Email'];
          $mobileNo = $row['MobileNo'];

     }


    $target = "Upload/" . basename($_FILES['my_image']['name']);

    $image = $_FILES['my_image']['name'];



    $Pname = $_POST['productname'];
    $location = $_POST['Location'];
    $price = $_POST['price'];
   // $image = $_FILES['my_image'];

    $query = "INSERT INTO `posts`(`Name`, `Email`, `Mobile`, `Price`, `location`, `image`, `Owner`) 
    VALUES ('$Pname','$email','$mobileNo','$price','$location','$image','$name');"; 
    //upload image

    if(move_uploaded_file($_FILES['image']['temp_name'],$target))
    {
        $msg = "image uploaded";
    }
    else
    {
        $msg = "there as no file";
    }



    $result = mysqli_query($con, $query);

    if($result)
    {
        header("location:message.html");
    }




    echo $name;
    echo $location;
    echo $price;
   // echo $image;
}

?>