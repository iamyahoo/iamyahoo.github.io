(function($) {

    var $sliderMainBig = $('.slider-main .slider-big'),
        $sliderMainSmall = $('.slider-main .slider-small'),
        $sliderCatalogBig = $('.slider-catalog .slider-big'),
        $sliderCatalogSmall = $('.slider-catalog .slider-small'),
        $sliderHistorySmall = $('.slider-history .slider-small'),
        $mainLink = $('.main__link');

    $(document).keyup(function(e) {
        if (e.keyCode == 37) { // left arrow
            $('.slider-small').slick('slickPrev');
        } else if (e.keyCode == 39) { // right arrow
            $('.slider-small').slick('slickNext');
        }
    });

/* main page sliders */
    $sliderMainBig
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-small',
            zIndex: 200,
            focusOnSelect: true
        });

    $sliderMainSmall
        .on('init', function (slick) {

            /*get link name and href*/
            var slideText = $('.slick-current').find('.slider__link').text();
            var slideHref = $('.slick-current').find('.slider__link').attr("href");

            /*set link name and href*/
            $mainLink.text(slideText).attr("href", slideHref);
        })

        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            var $nextSlide = $sliderMainSmall.find('.slick-slide').eq(nextSlide - 1);

            /*get link name and href*/
            var $slideText = $nextSlide.find('.slider__link').text();
            var $slideHref = $nextSlide.find('.slider__link').attr("href");

            /* link animation */
            $mainLink.addClass('anim-opacity');

            /*set link name and href*/
            setTimeout(function () {
                $mainLink.text($slideText).attr("href", $slideHref);
            }, 400);

            setTimeout(function () {
                $mainLink.removeClass('anim-opacity');
            }, 800);
        })

        .slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            prevArrow: '<button type="button" class="slider__arrow slider__arrow_left"></button>',
            nextArrow: '<button type="button" class="slider__arrow slider__arrow_right"></button>',
            asNavFor: '.slider-big',
            dots: false,
            centerMode: false,
            zIndex: 200,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 2220,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1840,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ],
            init: {}
        });


/*catalog sliders*/
    $sliderCatalogBig
        .on('init', function(event, slick){
            /* get color */
            var bgColor = $('.slick-current').data('color');

            /* set color */
            var $sliderTop = $('.slider-top');
            $sliderTop.css('background-color', bgColor);
        })

        .on('afterChange', function(slick, currentSlide){

            /* get color */
            var bgColor = $sliderCatalogBig
                .find( $('.slick-current') )
                .data('color');

            /* set color */
            var $sliderTop = $('.slider-top');
            $sliderTop.css('background-color', bgColor);
        })

        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-small',
            zIndex: 200,
            focusOnSelect: true,
            respondTo: 'window'
        });

    $sliderCatalogSmall.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            prevArrow: '<button type="button" class="slider__arrow slider__arrow_left"></button>',
            nextArrow: '<button type="button" class="slider__arrow slider__arrow_right"></button>',
            asNavFor: '.slider-big',
            dots: false,
            centerMode: false,
            zIndex: 200,
            focusOnSelect: true
    });

/*history slider*/
    $sliderHistorySmall.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: true,
        prevArrow: '<button type="button" class="slider__arrow slider__arrow_light slider__arrow_left"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrow_light slider__arrow_right"></button>',
        dots: false,
        centerMode: true,
        zIndex: 200,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

})(jQuery);
