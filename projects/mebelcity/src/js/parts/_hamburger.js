(function($) {
    /* hamburger hide show */
    $('.hamburger').on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            $(this).removeClass('hamburger_active')
            $('.page-container').removeClass('mobile-menu_active');
            $('.mobile-menu').slideUp(200);
        } else {
            $(this).addClass('hamburger_active')
            $('.page-container').addClass('mobile-menu_active');
            $('.mobile-menu').slideDown(200);
        }
    });
})(jQuery);
