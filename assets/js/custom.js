(function ($) {
    "use strict";
    // $(window).on("load", function (event) {
    //     $(".back").delay(500).fadeOut(500);
    // });

    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });

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

    $('.js-tilt').tilt({
        scale: 100,
        glare: true,
        maxGlare: .1,
        transition: true,
    })
    
    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $(".go-top").addClass("active");
            if (scrolled < 300) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });


})(jQuery);