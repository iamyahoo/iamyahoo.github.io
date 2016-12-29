(function($) {
    /* media check for submenu */
    function submenuMediaCheck() {
        var $mediaCheck = window.matchMedia("(max-width: 1279px)");
        var $submenu = $('.submenu');

        if ($mediaCheck.matches) {
            $submenu.hide();
        } else {
            $submenu.show();
        }
    }

    window.onresize = function () {
        submenuMediaCheck();
    };
    submenuMediaCheck();
})(jQuery);
