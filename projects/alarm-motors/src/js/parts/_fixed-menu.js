(function($) {

    // fix el if window width >= 1280px
    function mediaCheck(el) {

        var $mediaCheck = window.matchMedia('(min-width: 1280px)');

        if (!el.length) {
            return false;
        }

        if ($mediaCheck.matches) {

            var $stickyTop = el.offset().top;
            var $stickyHeight = el.outerHeight();
            $(window).on('scroll', function () {
                var $windowTop = $(window).scrollTop();
                var $limit = $(document).height() - $stickyHeight;

                // debugging
                //console.log('$limit: ' + $limit);
                //console.log('$stickyTop: ' + $stickyTop);
                //console.log('$windowTop: ' + $windowTop);
                //console.log(' ');

                if ($stickyTop < $windowTop) {
                    el.addClass('pos_fixed').removeClass('pos_relative');
                } else if ($stickyTop < 10) {
                    el.addClass('pos_relative').removeClass('pos_fixed');
                }

                if ( ($limit < $windowTop) && ($limit < $stickyTop) ) {
                    var diff = $limit - $windowTop;
                    el.css({
                        top: diff
                    });
                }
            });

        } else {
            if (el.length) {
                $(window).on('scroll', function () {
                    el.addClass('pos_relative').removeClass('pos_fixed');
                });
            }
        }
    }

    $(window).on('load scroll resize', function () {
        mediaCheck( $('.nav__inner') );
        mediaCheck( $('.brands__inner') );
    });
    mediaCheck( $('.nav__inner') );
    mediaCheck( $('.brands__inner') );

})(jQuery);