<?php
// Change this to your connection info.
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'login';
// Try and connect using the info above.
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
	// If there is an error with the connection, stop the script and display the error.
	die ('Failed to connect to MySQL: ' . mysqli_connect_error());
}

// Now we check if the data was submitted, isset() function will check if the data exists.
if (!isset($_POST['username'], $_POST['password'], $_POST['email'], $_POST['program'])) {
	// Could not get the data that should have been sent.
	// die ('Please complete the registration form!');
	echo "<script>
		alert('Please complete the registration form!');
	</script>";
}
// Make sure the submitted registration values are not empty.
if (empty($_POST['username']) || empty($_POST['password']) || empty($_POST['email'] || empty($_POST['program']))) {
	// One or more values are empty.
	// die ('Please complete the registration form');
	echo "<script>
		alert('Please complete the registration form!');
	</script>";
}

// We need to check if the account with that username exists.
if ($stmt = $con->prepare('SELECT id, password FROM user_accounts WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	$stmt->store_result();
	// Store the result so we can check if the account exists in the database.
	if ($stmt->num_rows > 0) {
		// Username already exists
		// echo 'Username exists, please choose another!';
		echo "<script>
			alert('Username exists, please choose another!');
			window.location.href='../register.html';
		</script>";
	} else {
		// Username doesnt exists, insert new account
        if ($stmt = $con->prepare('INSERT INTO user_accounts (username, password, email, program, year_of_study) VALUES (?, ?, ?, ?, ?)')) {
	        // We do not want to expose passwords in our database, so hash the password and use password_verify when a user logs in.
	        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	        $stmt->bind_param('sssss', $_POST['username'], $password, $_POST['email'], $_POST['program'], $_POST['year_of_study']);
	        $stmt->execute();
			// echo 'You have successfully registered, you can now login!';
			// header('Location: login.html');
			echo "<script>
				window.location.href='../login.html';
				alert('You have successfully registered, you may now login');
			</script>";
        } else {
	        // Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	        echo 'Could not prepare statement!';
        }
	}
	$stmt->close();
} else {
	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	echo 'Could not prepare statement!';
}
$con->close();
?>