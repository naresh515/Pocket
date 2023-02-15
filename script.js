$(document).ready(function () {
    $(".button").click(function () {
        $(this).parent(".accordion-item").find(".panel").slideToggle();
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".panel").slideUp();
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".panel").slideUp();
        $(this).parent(".accordion-item").find('.arrow').slideToggle();
    });

    var sticky = $('.sticky');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    var scrollTop = $(".scroll-top");

    $(window).scroll(function () {

        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

    $('.head_slider').slick({
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });

    $('.sec_eight_img').slick({
        slidesToShow: 3,
        autoplay: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });
    $('.sec_nine_img').slick({
        slidesToShow: 2,
        autoplay: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });
    $('.sec_ten').slick({
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}