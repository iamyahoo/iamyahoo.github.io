/* hamburger hide show */
(function($) {

    var $htmlBody = $('body');
    var hamburger = $('.hamburger');
    var $mobileMenuMediaCheckMin = window.matchMedia('(min-width: 1091px)');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('menu-mobile_opened');
        $('.menu-mobile').slideDown(250);
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('.menu-mobile').slideUp(250);

        setTimeout(function() {
            $('body').removeClass('menu-mobile_opened');
        }, 250);
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    /* close hamburger on ESC */
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key
            hamburgerClose()
        }
    });

    /* close hamburger on desktop */
    $(window).on('load resize', function () {
        if ( ($mobileMenuMediaCheckMin.matches) && ($htmlBody.hasClass('menu-mobile_opened')) ) {
            hamburgerClose();
        }
    });
})(jQuery);