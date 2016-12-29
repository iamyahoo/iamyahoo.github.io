function initMap() {

    map = new google.maps.Map(document.getElementById('map-contact'), {
        center: {lat:
            59.9885143849485, lng: 30.244951444519064},
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scrollwheel: false
    });

    var mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    map.setOptions({styles: mapStyles});

    google.maps.event.addDomListener(window, 'resize', function () {
        var center1 = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center1);
    });

    var geomark = {
        url: '/img/icons/geomark.png',
        size: new google.maps.Size(30, 36)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 59.994009, lng: 30.235038},
        map: map,
        icon: geomark,
        title: 'Санкт-Петербург, Мебельный проезд, 4'
    });
}


/*

 if (document.getElementById('map-contact')) {
 mapContacts = new google.maps.Map(document.getElementById('map-contacts'), {
 center: {lat: 59.9184953455408, lng: 30.345464577148505},
 zoom: 15,
 disableDefaultUI: true,
 zoomControl: true,
 scrollwheel: false
 });






 */
(function($) {
    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(min-width: 320px) and (max-width: 1279px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1280px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHightlight(className) {

        /* highlight active menu item*/
        $(className).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHightlight('.nav__link');

})(jQuery);
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