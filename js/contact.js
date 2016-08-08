// on click, checks the form is not empty
// then sends a post request to post.php
// it then appends the returned text to
// the #returnmessage div and if it is
// a success message, the form is cleared
$(document).ready(function() {
    $("#submit").click(function() {
        // gather form field values
        var form_name = $("#name").val();
        var form_email = $("#email").val();
        var form_message = $("#message").val();
        // clear and hide error div on each click
        $("#returnmessage").empty(); 
        $("#returnmessage").hide();
        if(form_name == "" || form_email == "" || form_message == "") {
           $("#returnmessage").append("<p class=\"error\">Please fill all form fields</p>"); 
           $("#returnmessage").fadeIn();
        } else {
            // if fields are filled, send post request 
            $.post("post.php", {
            name: form_name,
            email: form_email,
            message: form_message,
            }, function(data) {
                // when return data is received, append to div
                $("#returnmessage").append(data); 
                $("#returnmessage").fadeIn();
                if (data == "<p>Message sent</p>") {
                    // if return data message is success, clear
                    // form data for next submission
                    $("#form")[0].reset();
                }
            });
        }
    });
});
