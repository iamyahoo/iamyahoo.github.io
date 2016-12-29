(function($) {

    var portfolioItem = $('.portfolio-tab_list .portfolio__item');
    var animStartPosition = window.innerHeight - window.innerHeight / 6;


    $(window).on('load scroll', function() {

        portfolioItem.each(function() {
            var portfolioItemOffsetTop = $(this).offset().top;

            if ( $(window).scrollTop() > portfolioItemOffsetTop - animStartPosition) {
                $(this).addClass('portfolio__item_animated');
            }
        });
    });

})(jQuery);