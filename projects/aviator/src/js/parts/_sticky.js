
var $StickymediaCheckMin = window.matchMedia('(min-width: 1280px)');
var $StickymediaCheckMax = window.matchMedia('(max-width: 1279px)');
var $stickyMenu = $('.sticky');

$(window).on('load resize', function () {

    $stickyMenu.hcSticky({
        top: 70,
        bottomEnd: 70,
        className: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        responsive: true
    });

    if ($StickymediaCheckMin.matches) {

        $stickyMenu.hcSticky('reinit');

    } else if ($StickymediaCheckMax.matches) {

        $stickyMenu.hcSticky('destroy');
        $stickyMenu.css('position', 'relative');
    }
});


