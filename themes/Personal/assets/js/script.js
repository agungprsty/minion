(function ($) {
    'use strict';

    $.fn.scrollingTo = function (opts) {
        var defaults = {
            animationTime: 1000,
            easing: '',
            callbackBeforeTransition: function () {},
            callbackAfterTransition: function () {}
        };

        var config = $.extend({}, defaults, opts);

        $(this).click(function (e) {
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find($(this).data('section'));
            if ($section.length < 1) {
                return false;
            };

            if ($('html, body').is(':animated')) {
                $('html, body').stop(true, true);
            };

            var scrollPos = $section.offset().top;

            if ($(window).scrollTop() == scrollPos) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop': (scrollPos + 'px')
            }, config.animationTime, config.easing, function () {
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };

    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: false,
            },
            message: {
                required: true,
            },
        },
        messages: {
            user_name: {
                required: "Cantumkan nama anda di sini!",
                minlength: "Nama Anda harus terdiri dari minimal 2 karakter"
            },
            email: {
                required: "Harap cantumkan alamat email Anda",
            },
            message: {
                required: "Tinggalkan beberapa pesan di sini!",
                minlength: "Pesan Anda harus terdiri dari minimal 10 karakter"
            },
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "sendmail.php",
                success: function () {
                    $('#contact-form #success').fadeIn();
                },
                error: function () {
                    $('#contact-form #error').fadeIn();
                }
            });
        }
    });


}(jQuery));



jQuery(document).ready(function () {
    "use strict";
    new WOW().init();


    (function () {
        jQuery('.smooth-scroll').scrollingTo();
    }());

});




$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-brand a").css("color", "#fff");
            $(".top-bar").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color", "inherit");
            $(".top-bar").addClass("animated-header");
        }
    });

    $('.clients-logo-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            }
        ]
    });


});



// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect: 'elastic',
    openSpeed: 450,

    closeEffect: 'elastic',
    closeSpeed: 350,

    closeClick: true,
    helpers: {
        title: {
            type: 'inside'
        },
        overlay: {
            css: {
                'background': 'rgba(0,0,0,0.8)'
            }
        }
    }
});


// dark mode

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// function setDarkMode(isDark) {
//     if(isDark) {
//         document.body.setAttribute('id', 'darkmode')
//     } else {
//         document.body.setAttribute('id', '')
//     }
// }