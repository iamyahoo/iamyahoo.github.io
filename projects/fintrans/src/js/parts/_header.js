(function($) {
    // Hide Header on on scroll down
    var $didScroll;
    var $lastScrollTop = 0;
    var $delta = 5;
    var $header = $('.header');
    var $headerHeight = $header.outerHeight();
    var $pageWrapper = $('.page-wrapper');


    $(window).scroll(function(event){
        $didScroll = true;

        if ( window.pageYOffset < 80 ) {
            $header.addClass('header_on-top');
            $header.removeClass('header_on-scroll');
        } else {
            $header.addClass('header_on-scroll');
            $header.removeClass('header_on-top')
        }
    });

    setInterval(function() {
        if ($didScroll) {
            hasScrolled();
            $didScroll = false;
        }
    }, 200);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs($lastScrollTop - st) <= $delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > $lastScrollTop && st > $headerHeight){
            // Scroll Down
            $header.removeClass('header_down').addClass('header_up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $header.removeClass('header_up').addClass('header_down');
            }
        }

        $lastScrollTop = st;
    }


    if ( !$header.length ) {
        $pageWrapper.addClass('no-header');
    }
})(jQuery);