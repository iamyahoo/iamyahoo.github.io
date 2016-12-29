var mapMain;

function initMap() {

    if (document.getElementById('map-main')) {
        mapMain = new google.maps.Map(document.getElementById('map-main'), {
            center: {lat: 59.94657619670656, lng: 30.31834207958991},
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = mapMain.getCenter();
            google.maps.event.trigger(mapMain, 'resize');
            mapMain.setCenter(center1);
        });

        var mapStyles = [];
        mapMain.setOptions({styles: mapStyles});
    }


    var placemark = {
        url: '/img/icons/placemark.png',
        size: new google.maps.Size(25, 37)
    };

    var markCity1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: mapMain,
        icon: placemark,
        title: 'Санкт-Петербург'
    });

}

(function($) {

    $(window).on('load resize', function () {
    
        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1240
         *  set static viewport on screens between 641px and 1239
         */
    
        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1239px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1240px)');
        var viewport = document.getElementById('viewport');
    
        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
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
    $('.form__select').simpleselect();
    $('.nav__link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $('.tabs').each( function() {
        $('.tabs__buttons').on('click', '.tabs__btn:not(.active)', function () {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
    
            $(this)
                .closest('.tabs')
                .find('.tabs__item')
                .removeClass('active')
                .eq($(this).index())
                .addClass('active');
        });
    });

})(jQuery);