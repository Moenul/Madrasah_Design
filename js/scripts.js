$(document).ready(function(){

//  Scroll to top button -------------------
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.scroll_to_top').fadeIn();
        } else {
            $('.scroll_to_top').fadeOut();
        }
    });

    $(".scroll_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
     });


    $(".nav_button").click(function() {
        $(this).toggleClass('nav_button_active');
        $(".nav_list").toggleClass('nav_list_active');
     });





});

