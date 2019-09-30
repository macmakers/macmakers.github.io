<?php
require_once("check_username.php");
$db_handle = new DBController();


if(!empty($_POST["username"])) {
  $query = "SELECT * FROM user_accounts WHERE username='" . $_POST["username"] . "'";
  $user_count = $db_handle->numRows($query);
  if($user_count>0) {
      echo "<span class='status-not-available' style='color: red'> Username Not Available.</span>";
  }else{
      echo "<span class='status-available' style='color: green' > Username Available.</span>";
  }
}
?>