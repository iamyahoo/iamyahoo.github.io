$(document).ready(function() {
    $('#promo-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 699,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    $('#content-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        appendArrows: $('.slider__control'),
        prevArrow: '<button type="button" class="slider__arrow slider__arrow_left"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrow_right"></button>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});