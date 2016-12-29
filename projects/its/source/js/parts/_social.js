(function($) {

    var $socialIcon = $('.social__icon');

    $socialIcon.on('mouseenter', function() {
        $(this).siblings().addClass('social__icon_inactive')
    });

    $socialIcon.on('mouseleave', function() {
        $(this).siblings().removeClass('social__icon_inactive')
    });

})(jQuery);
