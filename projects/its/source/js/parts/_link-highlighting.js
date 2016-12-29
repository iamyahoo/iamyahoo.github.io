(function($) {

    function linkHighlight(linkClass) {


        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location) {
                $(this).addClass('link_active');
            }
        });
    }

    $(window).on('load', function() {

        setTimeout(function() {

            linkHighlight('.nav__link');
            linkHighlight('.menu-mobile__link');
        }, 400);
    });

})(jQuery);
