(function($) {
    /*alert hide show*/
    var button = $('.alert-geolocation');
    var target = $('.alert_geolocation');

    button.on('click', function() {
        if ( target.hasClass('alert_active') ) {
            target.removeClass('alert_active')
            target.fadeOut(250);
        } else {
            target.addClass('alert_active')
            target.fadeIn(250);
        }
    });

})(jQuery);
