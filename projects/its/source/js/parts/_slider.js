(function($) {

    var $portfolioSlider = $('.portfolio-slider');

    $portfolioSlider
        .on('beforeChange', function(event, slick, currentSlide, nextSlide) {

            var $nextSlide = $portfolioSlider.find('.slick-slide').eq(nextSlide + 1);
            if ($nextSlide.hasClass('portfolio__item_dark')) {
                $('.header').addClass('header_light');
                $portfolioSlider.addClass('portfolio-slider_dark');
            } else {
                $('.header').removeClass('header_light');
                $portfolioSlider.removeClass('portfolio-slider_dark');
            }
        })

        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="arrow arrow_prev"></button>',
            nextArrow: '<button type="button" class="arrow arrow_next"></button>'
            //autoplay: true
            //autoplaySpeed: 6000
        });

    $('.post-slider__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: '.post-slider__buttons',
        prevArrow: '<button type="button" class="arrow arrow_short arrow_prev"></button>',
        nextArrow: '<button type="button" class="arrow arrow_long arrow_next"></button>'
        //autoplay: true
        //autoplaySpeed: 6000
    });

})(jQuery);