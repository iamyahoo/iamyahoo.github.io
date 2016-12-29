$(document).ready(function() {

    $('.auto-slider').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_prev">',
        nextArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_next">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });

    $('.auto-slider_big').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_prev">',
        nextArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_next">'
    });

    $('.auto-slider_promo').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_prev">',
        nextArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_next">'
    });

    $('.auto-slider__item:not(.slick-cloned)').fancybox({
        arrows: 'true',
        padding: '0',
        openEffect	: 'fade',
        closeEffect	: 'fade',
        playSpeed: '5000',
        helpers: {
            thumbs	: {
                width	: 230,
                height	: 130
            }
        },
        tpl: {
            closeBtn : '<a title="Close" class="fancybox-item auto-slider__close" href="javascript:;"></a>',
            next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span class="auto-slider__arrow auto-slider__arrow_next"></span></a>',
            prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="auto-slider__arrow auto-slider__arrow_prev"></span></a>'
        }
    });
});
