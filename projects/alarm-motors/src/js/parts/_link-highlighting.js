(function($) {

    /* highlight active menu item*/
    $('.submenu-list__link').each(function (index) {
        if (this.href.trim() == window.location)
            $(this).addClass('link_active');
    });

})(jQuery);
