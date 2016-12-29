(function($) {
    var $StickymediaCheckMin = window.matchMedia('(min-width: 1280px)');
    var $StickymediaCheckMax = window.matchMedia('(max-width: 1279px)');
    var $stickyBlock = $('.sticky');

    $(window).on('load resize', function () {

        $stickyBlock.hcSticky({
            top: 70,
            bottomEnd: 30,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper',
            responsive: true
        });

        if ($StickymediaCheckMin.matches) {

            $stickyBlock.hcSticky('reinit');

        } else if ($StickymediaCheckMax.matches) {

            $stickyBlock.hcSticky('destroy');
            $stickyBlock.css('position', 'relative');
        }
    });
})(jQuery);