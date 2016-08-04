// fade in page on load
$( document ).ready(function() {
    $("body").addClass("fadeIn");

    // contact button
    $("#show_form").click(function() {
        $(".form-container").fadeIn();
        $(this).hide();
        $(".container").css("padding", "0px");
    });

});



