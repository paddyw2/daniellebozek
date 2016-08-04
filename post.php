<?php
    // gather post parameters into variables
    $receiver = "admin@patrickwithams.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // sanitize email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    // check email format is valid 
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // if data is valid, create html messge using
        // post parameters
        $sendmessage = "<strong>Name:</strong> "
            . $name . "<br><strong>Email:</strong> "
            . $email . "<br><strong>Message:</strong> "
            . $message;
        
        // create necessary content-type headers
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

        // wrap content to satisfy php rule (if over 70 in length) 
        $sendmessage = wordwrap($sendmessage, 70);

        // send html message to receiver email with relevant headers
        mail($receiver, "New Website Submission", $sendmessage, $headers);

        // print success message
        echo "<p>Message sent</p>";
    } else {
        // print failure message
        echo "<p class=\"error\">Invalid email</p>";
    }
?>
