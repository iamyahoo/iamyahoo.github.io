(function($) {

    function parallax() {
        var pageParallax = document.querySelector('.page-parallax');

        $(window).on('load scroll', function() {
            var speed = 3.0;
            var offset = 130;
            pageParallax.style.backgroundPosition = (-window.pageXOffset/speed)+"px " + ((-window.pageYOffset/speed) + offset)+"px";
        });
    }

    if( $('.page').hasClass('page-parallax')) {
        parallax();
    }

})(jQuery);