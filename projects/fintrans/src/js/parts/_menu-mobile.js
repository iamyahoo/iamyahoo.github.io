(function($) {

    var $htmlBody = $('body');
    var $mobileMenuMediaCheckMin = window.matchMedia('(min-width: 641px)');

    $(window).on('load resize', function () {
        if ( ($mobileMenuMediaCheckMin.matches) && ($htmlBody.hasClass('menu-mobile_opened')) ) {
            $htmlBody.removeClass('menu-mobile_opened');
        }
    });

})(jQuery);