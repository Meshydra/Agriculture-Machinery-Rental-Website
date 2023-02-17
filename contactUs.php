<?php
include_once('dbconnection.php');
$name=$_SESSION['Pass'];
$query = "SELECT * FROM `membership` WHERE UserName='$name';";

$result = mysqli_query($con, $query);

$row = mysqli_fetch_assoc($result);
if (mysqli_num_rows($result) > 0) 
{
    $email = $row['Email'];
    $mobileNo = $row['MobileNo'];

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="contactUs.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script defer src="script.js"></script>
    <title>Contact Us</title>
</head>
<body>

    <div class="contactUs">
        <div class="nav-bar">
            <div class="left-side">
                <div class="logo">
                    <img src="Images/agzone-logo.png" alt="AgZone-Logo" title="AgZone">
                </div>
            </div>
    
            <div class="right-side">
    
                <ul id="nav-links">
                    <li ><a href="index.php"><i class="fa fa-fw fa-home"></i>Home</a></li>
                    <li><a href="fertilizers.php"><i class="fa fa-leaf" aria-hidden="true"></i>Crops</a>
                    <li><a href="rent_machine.php"><i class="fa fa-bus" aria-hidden="true"></i>Rent machinery</a></li>
                    <li><a href="cultivation.php"><i class="fa fa-asl-interpreting"></i>Cultivation &amp; Protection</a></li>
                    <li><a href="contactUs.php"><i class="fa fa-fw fa-envelope"></i>Contact Us</a></li>
                </ul>
    
                
          
            </div>
         
           
            <a href="logout.php"><button id="login"><i class="fa fa-fw fa-user"></i>Logout</button></a>
    
            
            <button class="right-bar">
                <span class="bar"></span>
            </button>
           
        </div>
        
    
        <div class="mobile_nav">
            
            <ul id="mobile_nav_links">
                <li ><a href="index.php"><i class="fa fa-fw fa-home"></i>Home</a></li>
                    <li><a href="fertilizers.php"><i class="fa fa-leaf" aria-hidden="true"></i>Crops</a>
                    <li><a href="rent_machine.php"><i class="fa fa-bus" aria-hidden="true"></i>Rent machinery</a></li>
                    <li><a href="cultivation.php"><i class="fa fa-asl-interpreting"></i>Cultivation &amp; Protection</a></li>
                    <li><a href="contactUs.php"><i class="fa fa-fw fa-envelope"></i>Contact Us</a></li>
            </ul>
            <a href="logout.php"><button id="mobile_login"><i class="fa fa-fw fa-user"></i>LoginOut</button></a>
            <div class="mobile_footer">
               <p>Copyright&copy; 2022 AgZone. All Rights Reserved</p>
            </div>
        </div>



     
        <div class="contact_container">
            <div class="heading">
                <p>Contact Us</p>
            </div>
            <div class="sub-para">
                <p>Interesting in knowing more,requesting a large product order,or would just
                    like to say hi? Fill the form below to get in touch with AgZone team.
                </p>
            </div>
            <div class="form-container">
                <form action="pcontactus.php" method="post">
                    <div class="input-row">
                        
                        <div class="input-group">
                            <label for="fname" id="fnames">Username</label>
                            <input type="text" name="fname" id="fname" class="fname" placeholder="Your Full Name"value="<?php echo $name;?>" >
                        </div>
                    
                        <div class="input-group">
                            <label for="emial" id="emails">Email Address</label>
                            <input type="text" name="email" id="email" class="email" placeholder="example@youremail.com" value="<?php echo $email;?>">
                        </div>
                    
                    </div>

                    <div class="input-row">
                        <div class="input-group">
                            <label for="phone" id="phones">Phone No</label>
                            <input type="tele" name="phone" id="phone" class="phone" placeholder="Your Phone No"value="<?php echo $mobileNo;?>">
                        </div>

                        <div class="input-group">
                            <label for="subject" id="subjects">Subject</label>
                    <select name="subject" id="subject" name="subject">
                        <option value="General Question" >General Question</option>
                        <option value="Review" >Review</option>
                        <option value="About Products">About Products</option>
                        <option value="Loan">Request loan</option>
                    </select>
                        </div>
                    </div>

                    <label for="Message" id="message">Message</label>
                    <textarea name="message" id="Message"></textarea>
                    <button  type="submit" id="submit" class="submit">Send Message</button>
    
                    </div>
                    
                </form>
            </div>
       

        <div class="image-container">

        </div>

    </div>

    



    <section class="footer">
        <div class="left-side-footer">
            <p>&copy;2022 All Rights Reserved.AgZone.</p>
        </div>
        <div class="right-side-footer">
            <p>Web Design and Development by<a href="index.php">AgZone Team</a></p>
        </div>
    </section>

    
</body>
</html>