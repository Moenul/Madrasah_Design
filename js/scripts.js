$(document).ready(function(){

//  Nav Animate by Scroll and Scroll to top button -------------------
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".nav_bar").addClass("nav_bar_active");
        } 
        else {
            $(".nav_bar").removeClass("nav_bar_active");
        }

        if ($(this).scrollTop()) {
            $('.scroll_to_top').fadeIn();
        } else {
            $('.scroll_to_top').fadeOut();
        }

    });

    $(".scroll_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 300);
    });
//  Nav Animate by Scroll and Scroll to top button -------------------



    // Cover Slider Script
    $("#slider > .slider_image:gt(0)").hide();

    setInterval(function() {
        $('#slider > .slider_image:first').fadeOut(2000).next().fadeIn(2000).end().appendTo('#slider');
    }, 5000);
    // -----------

    // Nav list and button Script
    $(".nav_button").click(function() {
        $(this).toggleClass('nav_button_active');
        $(".nav_list").toggleClass('nav_list_active');
     });
    // --------------------------


});

