<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: ../login.html');
	exit();
}
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'login';
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	die ('Failed to connect to MySQL: ' . mysqli_connect_error());
}
// We don't have the password or email info stored in sessions so instead we can get the results from the database.
$stmt = $con->prepare('SELECT password, email, program, year_of_study FROM user_accounts WHERE id = ?');
// In this case we can use the account ID to get the account info.
$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($password, $email, $program, $year_of_study);
$stmt->fetch();
$stmt->close();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Profile</title>
  	    <meta name="viewport" content="width=device-width, initial-scale=1">
  	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="css\stylesheet.css">
  	    <!-- Favicon -->
  	    <link rel="icon" href="img\favicon.png">
	</head>
	<body class="loggedin">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
  	    	<a class="navbar-brand" href="index.html" style="color: white">
    	    	<img src="img\logo.png" alt="McMaster Makers" height="40px">McMaster Makers
  		    </a>
  		    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbarHeader">
    		    <span class="navbar-toggler-icon"></span>
  	    	</button>
  		    <div class="collapse navbar-collapse" id="collapsibleNavbarHeader" align="right">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="../about.html">About Us</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../team.html">The Team</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../events.html">Events</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../gallery.html">Gallery</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../store.html">Store</a>
					</li>  
					<li class="nav-item">
                		<a class="nav-link" href="profile.php">Profile</a>
          	    	</li>
          		    <li class="nav-item">
            		    <a class="nav-link" href="logout.php">Log Out</a>
              		</li>
            	</ul>
      	    </div>  	
    	</nav>
	    <br>
	    <!-- Profile Info -->
	    <div class="content">
			<h2>Profile Page</h2>
			<div>
				<p>Your account details are below:</p>
				<table>
					<tr>
						<td>Username:</td>
						<td><?=$_SESSION['name']?></td>
					</tr>
					<tr>
						<td>Email:</td>
						<td><?=$email?></td>
                    </tr>
                    <tr>
						<td>Program:</td>
						<td><?=$program?></td>
                    </tr>
                    <tr>
						<td>Year of Study:</td>
						<td><?=$year_of_study?></td>
					</tr>
				</table>
			</div>
	    <br>
	    <!--Contact and img-->
    	<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  	    	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbarFooter" style="align-content: right">
    	    	<span class="navbar-toggler-icon"></span>
  		    </button>
      		<div class="collapse navbar-collapse" id="collapsibleNavbarFooter">
        		<ul class="navbar-nav">
    	    	  	<li class="nav-item" style="margin: auto; color: grey;">
    		    	 	Contact us:
    		  	    </li>
          			<li class="nav-item">
            			<a class="nav-link" href="https://www.facebook.com/McMasterMakers/" target="_blank"><img class="footerImg" src="img\facebook.png" alt="facebook"> McMaster Makers Club</a>
      	    		</li>
      		    	<li class="nav-item">
        		    	<a class="nav-link" href="https://www.instagram.com/mcmastermakers/" target="_blank"><img class="footerImg" src="img\instagram.png" alt="facebook"> mcmastermakers</a>
      			    </li>
          			<li class="nav-item">
            			<a class="nav-link" href="mailto:mcmastermakers@gmail.com" target="_blank"><img class="footerImg" src="img\gmail.png" alt="gmail"> mcmastermakers@gmail.com</a>
      	    		</li>    
    		    </ul>
  		    </div>	
	    </nav>
	</body>
</html>