(function($) {

    function linkHightlight(className) {

        /* highlight active menu item*/
        $(className).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHightlight('.nav__link');

})(jQuery);
