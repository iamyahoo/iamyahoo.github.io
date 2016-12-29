(function($) {
    $(window).on('load', function() {

        setTimeout(function() {
            $('.page-container').addClass('is-loaded');
        }, 200);
    });
})(jQuery);