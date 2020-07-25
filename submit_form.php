<?php
if(isset($_POST['email'])) {
    $email_to = "aliciatran4550@gmail.com";
    $email_subject = "Inquiry from Website";
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // not required
    // $location = $_POST['location']; // required
    // $address = $_POST['address']; // required

    function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
    }

    $email_message = "Form details below.\n\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($message)."\n";
    // $email_message .= "Location: ".clean_string($location)."\n";
    // $email_message .= "Address: ".clean_string($address)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);
?>
  <!-- include your own success html here -->

  <div class="feedback">Thank you for contacting us. We will be in touch with you very soon.</div>
  <?php
}
?>