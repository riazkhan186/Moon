(function ($) {
    "use strict";

    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });

    // Brands Logo Slider
    $(".brand-logo-area").owlCarousel({
        dots: false,
        loop: true,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        margin: 50,
        responsive : {
            0 : {
                items: 2,
            },
            480 : {
                items: 5,
            },
            768 : {
                items: 6,
            }
        }
    });

    // Partner Slider 
    $(".partner-logo-area").owlCarousel({
        dots: false,
        loop: true,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        margin: 80,
        responsive : {
            0 : {
                items: 2,
            },
            480 : {
                items: 5,
            },
            768 : {
                items: 6,
            }
        }
    });

    // Tilt Js Plugin
    $('.js-tilt').tilt({
        scale: 100,
        glare: true,
        maxGlare: .1,
        transition: true,
    })

    // For Create New Card PopUp
    $('#create-new-card').click(function(){
        $('.popup').addClass('open-popup');
    });
    $('#close').click(function(){
        $('.popup').removeClass('open-popup');
    });
    $('#continue-button').click(function(){
        $('#add-card-input-form').css('display', 'none');
        $('.add-card-checkout').css('display', 'block');
    });
    $('.back-button').click(function(){
        $('#add-card-input-form').css('display', 'block');
        $('.add-card-checkout').css('display', 'none');
    });

})(jQuery);