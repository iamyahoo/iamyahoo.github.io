var slickInit = false;

function slickRun() {
    $('#slider-place').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        appendArrows: $('.slider__control'),
        draggable: false,
        prevArrow: '<button type="button" class="slider__arrow slider__arrow_left"></button>',
        nextArrow: '<button type="button" class="slider__arrow slider__arrow_right"></button>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

slickRun();

$(window).on('load resize', function () {

    if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
        $('#slider-place').slick('destroy');
    } else if (mediaCheckDesktop.matches) {

    }
});

$(window).on('load resize', function () {

    if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {

        if (slickInit) {
            slickInit = false;
            $('#slider-place').slick('destroy');
        }


    } else if (mediaCheckDesktop.matches) {

        if (!slickInit) {
            slickRun();
        }
    }
});