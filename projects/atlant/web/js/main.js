var mapMain;

function initMap() {

    var mapStyles = [{"featureType":"water","stylers":[{"color":"#0e171d"}]},{"featureType":"landscape","stylers":[{"color":"#1e303d"}]},{"featureType":"road","stylers":[{"color":"#1e303d"}]},{"featureType":"poi.park","stylers":[{"color":"#1e303d"}]},{"featureType":"transit","stylers":[{"color":"#182731"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#f0c514"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1e303d"},{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#e77e24"},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#94a5a6"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"color":"#e84c3c"}]},{"featureType":"poi","stylers":[{"color":"#e84c3c"},{"visibility":"off"}]}];

    if (document.getElementById('map-main')) {
        mapMain = new google.maps.Map(document.getElementById('map-main'), {
            center: {lat: 59.96017804202823, lng: 30.318942894409247},
            zoom: 13,
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = mapMain.getCenter();
            google.maps.event.trigger(mapMain, 'resize');
            mapMain.setCenter(center1);
        });

        mapMain.setOptions({styles: mapStyles});
    }

    var geomarkMain = {
        url: '/img/icons/geomark-main.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSubway = {
        url: '/img/icons/geomark-subway.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkShip = {
        url: '/img/icons/geomark-ship.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkFortress = {
        url: '/img/icons/geomark-fortress.png',
        size: new google.maps.Size(40, 40)
    };


    var placeHome = new google.maps.Marker({
        position: {lat: 59.962624, lng: 30.328382},
        map: mapMain,
        icon: geomarkMain,
        title: 'ул. Мира, дом 36, литера А.'
    });

    var placeSubway = new google.maps.Marker({
        position: {lat: 59.956257, lng: 30.318911},
        map: mapMain,
        icon: geomarkSubway,
        title: 'метро Горьковская'
    });

    var placeAurora = new google.maps.Marker({
        position: {lat: 59.955441, lng: 30.337375},
        map: mapMain,
        icon: geomarkShip,
        title: 'Крейсер Автора'
    });

    var placeFortress = new google.maps.Marker({
        position: {lat: 59.950802, lng: 30.319523},
        map: mapMain,
        icon: geomarkFortress,
        title: 'Петропавловская крепость.'
    });
}

(function($) {

    
        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1280
         *  set static viewport on screens between 641px and 1279
         */
    
    var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
    var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1279px)');
    var mediaCheckDesktop = window.matchMedia('(min-width: 1280px)');
    
    $(window).on('load resize', function () {
        var viewport = document.getElementById('viewport');
    
        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
    /*fullpage initialization*/
    var fullpageInit = false;
    var fullpageSlider = $('.fullpage-slider');
    
    function fullpageSettings() {
    
        $('#fullpage-slider').fullpage({
            anchors: ['fp-promo', 'fp-place', 'fp-architecture', 'fp-interior', 'fp-terrace', 'fp-comfort'],
            verticalCentered: false,
            css3: true,
            fadingEffect: true,
            navigation: true,
            navigationPosition: 'left',
    
            afterLoad: function() {
                fullpageInit = true;
    
                var loadedSection = $(this);
    
                $('body').addClass('fullpage-loaded');
    
                setTimeout(function() {
                    doDay();
                }, 2500);
            }
    
            //onLeave: function(index, nextIndex, direction){
            //    var leavingSection = $(this);
            //
            //    if (direction =='down') {
            //        leavingSection.addClass('rotateCubeTopOut');
            //        leavingSection.next().addClass('rotateCubeTopIn');
            //
            //        setTimeout(function() {
            //        }, 500);
            //
            //        setTimeout(function() {
            //            leavingSection.removeClass('rotateCubeTopOut');
            //            leavingSection.next().removeClass('rotateCubeTopIn');
            //        }, 800);
            //    }
            //
            //    else if (direction == 'up') {
            //        leavingSection.addClass('rotateCubeBottomOut');
            //        leavingSection.prev().addClass('rotateCubeBottomIn');
            //
            //        setTimeout(function() {
            //            leavingSection.removeClass('rotateCubeBottomOut');
            //            leavingSection.prev().removeClass('rotateCubeBottomIn');
            //        }, 800);
            //    }
            //}
        });
    }
    
    
    /*fullpage disable on mobile and enable on desktop*/
    if ( $('.page-container').hasClass('page-main') ) {
    
        $(window).on('load resize', function () {
    
            if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
    
                if (fullpageInit) {
                    fullpageInit = false;
                    $.fn.fullpage.destroy('all');
                }
    
                if ( fullpageSlider.hasClass('fullpage_enabled') ) {
                    fullpageSlider.removeClass('fullpage_enabled');
    
                    setTimeout(function() {
                        doDay();
                    }, 1500);
    
                }
    
            } else if (mediaCheckDesktop.matches) {
    
                if (!fullpageInit) {
                    fullpageSettings();
                    $.fn.fullpage.reBuild();
                }
    
                if ( !fullpageSlider.hasClass('fullpage_enabled') ) {
                    fullpageSlider.addClass('fullpage_enabled');
                }
            }
        });
    }
    var promoSwitcher = $('.promo-switcher');
    var btnDay = $('.promo-switcher__btn_day');
    var btnNight = $('.promo-switcher__btn_night');
    
    var promoDay = $('.promo__content_day');
    var promoNight = $('.promo__content_night');
    
    function doDay() {
        promoSwitcher.addClass('promo-switcher_day').removeClass('promo-switcher_night');
        promoNight.addClass('promo__content_hidden');
        promoDay.removeClass('promo__content_hidden');
    }
    
    function doNight() {
        promoSwitcher.addClass('promo-switcher_night').removeClass('promo-switcher_day');
        promoDay.addClass('promo__content_hidden');
        promoNight.removeClass('promo__content_hidden');
    }
    
    btnDay.on('click', function() {
        doDay();
    });
    
    btnNight.on('click', function() {
        doNight();
    });
    /* hamburger hide show */
    var hamburger = $('.hamburger');
    var menuMobile = $('.menu-mobile');
    
    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('menu-mobile_opened');
        menuMobile.slideDown(200);
    }
    
    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('menu-mobile_opened');
        menuMobile.slideUp(200);
    }
    
    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key
            hamburgerClose()
        }
    });
    
    $('.nav__link').each(function(index) {
        if(this.href.trim() == window.location)
            $(this).addClass('nav__link_active');
    });
    
    $('.dots__item').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
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

})(jQuery);