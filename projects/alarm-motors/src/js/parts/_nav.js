(function($) {

    //set el height equal to window height
    function setHeight(el) {
        windowHeight = $(window).innerHeight();
        $(el).css('min-height', windowHeight);
    }


    //check screen resolution and call function if >=1280px
    function mediaCheck(el) {

        var $mediaCheck = window.matchMedia("(min-width: 1280px)");

        if (!el.length) {
            return false;
        }

        if ($mediaCheck.matches) {
            $(window).on('load resize', function() {
                setHeight('.nav__inner');
            });
        }
    }
    mediaCheck('.nav__inner');
})(jQuery);