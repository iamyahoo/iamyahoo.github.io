$('.slider-promo_1').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider-promo_2').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    swipe: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.gallery-slider').slick({
    adaptiveHeight: true,
    appendArrows: '.gallery-slider-wrapper',
    appendDots: '.gallery-slider-wrapper',
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    centerMode: true,
    dots: true,
    dotsClass: 'gallery-dots',
    infinite: true,
    prevArrow: '<button type="button" class="gallery__arrow gallery__arrow_prev"></button>',
    nextArrow: '<button type="button" class="gallery__arrow gallery__arrow_next"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400
});

$('.slider__slide').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('.slide_appartments').click(function(e) {
    e.preventDefault();
    $('.slider-promo_1').slick('slickGoTo', 0 );
});

$('.slide_parking').click(function(e) {
    e.preventDefault();
    $('.slider-promo_1').slick('slickGoTo', 1 );
});

$('.slide_safety').click(function(e) {
    e.preventDefault();
    $('.slider-promo_1').slick('slickGoTo', 2 );
});

$('.slide_architecture').click(function(e) {
    e.preventDefault();
    $('.slider-promo_2').slick('slickGoTo', 0 );
});

$('.slide_interior').click(function(e) {
    e.preventDefault();
    $('.slider-promo_2').slick('slickGoTo', 1 );
});

$('.slide_materials').click(function(e) {
    e.preventDefault();
    $('.slider-promo_2').slick('slickGoTo', 2 );
});

$(document).keyup(function(e) {
    if (e.keyCode == 37) { // left arrow
        $('.gallery-slider').slick('slickPrev');
    } else if (e.keyCode == 39) { // right arrow
        $('.gallery-slider').slick('slickNext');
    }
});