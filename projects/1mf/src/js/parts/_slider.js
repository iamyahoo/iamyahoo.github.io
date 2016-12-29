$('.review-slider__container').slick({
    arrows: true,
    appendArrows: '.review__buttons',
    dots: true,
    dotsClass: 'review-slider__dots',
    infinite: true,
    prevArrow: '<button type="button" class="review-slider__btn review-slider__btn_prev"></button>',
    nextArrow: '<button type="button" class="review-slider__btn review-slider__btn_next"></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
});