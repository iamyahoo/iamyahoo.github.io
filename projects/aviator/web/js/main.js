var map1;
var map2;
var map3;

function initMap() {

    var mapStyles = [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 59.945695, lng: 30.288473},
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        map1.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 59.963584, lng: 30.321767},
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = map2.getCenter();
            google.maps.event.trigger(map2, 'resize');
            map2.setCenter(center2);
        });

        map2.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map3')) {
        map3 = new google.maps.Map(document.getElementById('map3'), {
            center: {lat: 59.98503189008821, lng: 30.274666121765115},
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center3 = map3.getCenter();
            google.maps.event.trigger(map3, 'resize');
            map3.setCenter(center3);
        });

        map3.setOptions({styles: mapStyles});
    }


    var geomarkDark = {
        url: '/img/icons/icon-geomark.png',
        size: new google.maps.Size(25, 37)
    };

    var geomarkGold = {
        url: '/img/icons/icon-geomark_gold.png',
        size: new google.maps.Size(25, 37)
    };

    var geomarkPark = {
        url: '/img/icons/icon-geomark_leaf.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSubway = {
        url: '/img/icons/icon-geomark_subway.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSubway2 = {
        url: '/img/icons/icon-geomark_subway.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkSchool = {
        url: '/img/icons/icon-geomark_school.png',
        size: new google.maps.Size(40, 40)
    };

    var geomarkBaby = {
        url: '/img/icons/icon-geomark_baby.png',
        size: new google.maps.Size(40, 40)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: map1,
        icon: geomarkDark,
        title: 'Средний проспект В. О., д. 4, литер А, оф. 41'
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 59.963584, lng: 30.321767},
        map: map2,
        icon: geomarkDark,
        title: 'ул. Рентгена д. 7, БЦ «Стельп», 1 этаж'
    });

    var markAviator = new google.maps.Marker({
        position: {lat: 59.984626, lng: 30.276653},
        map: map3,
        icon: geomarkGold,
        title: 'Авиатор - клубный дом на Савушкина 43'
    });

    var markPark1 = new google.maps.Marker({
        position: {lat:  59.979082, lng: 30.260002},
        map: map3,
        icon: geomarkPark,
        title: 'Центральный парк культуры и отдыха им.С.М. Кирова'
    });

    var markPark2 = new google.maps.Marker({
        position: {lat:  59.978732, lng: 30.289136},
        map: map3,
        icon: geomarkPark,
        title: 'ПКиО Каменный Остров'
    });

    var subway = new google.maps.Marker({
        position: {lat:  59.989581, lng: 30.255283},
        map: map3,
        icon: geomarkSubway,
        title: 'Метро Старая Деревня'
    });

    var subway2 = new google.maps.Marker({
        position: {lat:  59.985430, lng: 30.301138},
        map: map3,
        icon: geomarkSubway,
        title: 'Метро Черная речка'
    });

    var school1 = new google.maps.Marker({
        position: {lat:  59.984358,  lng: 30.268799},
        map: map3,
        icon: geomarkSchool,
        title: 'Школа № 46 с углубленным изучением английского языка'
    });

    var school2 = new google.maps.Marker({
        position: {lat:  59.986579,  lng: 30.262281},
        map: map3,
        icon: geomarkSchool,
        title: 'Школа № 44'
    });

    var school3 = new google.maps.Marker({
        position: {lat:  59.988789,  lng: 30.290339},
        map: map3,
        icon: geomarkSchool,
        title: 'Гимназия № 631'
    });

    var baby1 = new google.maps.Marker({
        position: {lat:  59.984703, lng: 30.274230},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад №48'
    });

    var baby2 = new google.maps.Marker({
        position: {lat:  59.985816, lng: 30.280945},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад №20'
    });

    var baby3 = new google.maps.Marker({
        position: {lat:  59.988106, lng: 30.285313},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад №35'
    });

    var baby4 = new google.maps.Marker({
        position: {lat:  59.978911, lng: 30.295447},
        map: map3,
        icon: geomarkBaby,
        title: 'Детский сад "Кудесница'
    });

    //var marianna = new google.maps.Marker({
    //    position: {lat:  59.922197, lng: 30.346920},
    //    map: map3,
    //    title: 'логово ведьмы'
    //});
}

(function($) {

    
        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
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
    
    $(window).on('load resize', function () {
    
        if (mediaCheckMobile.matches) {
            console.log('mobile');
        } else if (mediaCheckTablet.matches) {
            console.log('tablet');
        } else if (mediaCheckDesktop.matches) {
            console.log('desktop');
        }
    });
    var htmlBody = $('body');
    var pageContainer = $('.page-container');
    
    function modalOpened() {
        pageContainer.addClass('modal-opened');
    }
    
    function modalClosed() {
        pageContainer.removeClass('modal-opened');
    }
    
    function checkModal() {
        if ($('.ui-dialog').is(':visible')) {
            modalOpened();
        } else {
            modalClosed();
        }
    }
    
    pageContainer.on('click', function() {
        checkModal()
    });
    
    
    //close modal on click outside
    htmlBody.on('click','.ui-widget-overlay', function() {
        $('.ui-dialog').filter(function () {
            return $(this).css('display') === 'block';
        }).find('.ui-dialog-content').dialog('close');
    });
    
    //all modals initialization
    var modal = $( '.modal' );
    modal.dialog({
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        position: {
            my: 'top center'
        }
    });
    
    var modalCallback = $('.modal-callback');
    var modalApartment = $('.modal-apartment');
    var modalTimeline = $('.modal-timeline');
    
    modalCallback.dialog({
        minWidth: 320,
        maxWidth: 550
    });
    
    modalApartment.dialog({
        minWidth: 320,
        maxWidth: 920,
        width: '100%'
    });
    
    modalTimeline.dialog({
        minWidth: 320,
        maxWidth: 900
    });
    
    //modal-apartment opening
    $('#plan-floor-4').on('click', function() {
        modalApartment.dialog('open');
    });
    
    $('#card1').on('click', function() {
        modalApartment.dialog('open');
    });
    
    //modal-timeline opening
    $('#timeline-2016-09').on('click', function() {
        modalTimeline.dialog('open');
    });
    
    //modal-callback opening
    $('#modal-callback').on('click', function() {
        modalCallback.dialog('open');
    });
    
    //modal-callback-mobile opening
    $('#modal-callback-mobile').on('click', function() {
        modalCallback.dialog('open');
    });
    var fullpageInit = false;
    
    function fullpageSettings() {
    
        $('#fullpage-slider').fullpage({
            anchors: ['promo', 'about', 'comfort', 'place', 'interior'],
            verticalCentered: false,
            css3: true,
            navigation: true,
            navigationPosition: 'right',
            afterLoad: function() {
                fullpageInit = true;
            }
        });
    }
    
    if ( $('.page-container').hasClass('page-main') ) {
    
        $(window).on('load resize', function () {
    
            if (mediaCheckDesktop.matches) {
    
                if (!fullpageInit) {
                    fullpageSettings();
                    $.fn.fullpage.reBuild();
                }
            } else if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
    
                if (fullpageInit) {
                    fullpageInit = false;
                    $.fn.fullpage.destroy('all');
                }
    
            }
        });
    }
    var $fiters = $('.filters');
    var $fitersBtnOpen = $('.filters__btn-open');
    var $fitersBtnSubmit = $('.filters__btn-submit');
    var $fitersBtnReset = $('.filters__btn-reset');
    
    function filtersOpen() {
        $fitersBtnOpen.addClass('filters__btn_active');
        $fiters.slideDown(250);
    }
    
    function filtersClose() {
        $fitersBtnOpen.removeClass('filters__btn_active');
        $fiters.slideUp(250);
    }
    
    $fitersBtnOpen.on('click', function () {
        if ( $(this).hasClass('filters__btn_active') ) {
            filtersClose();
        } else {
            filtersOpen();
        }
    });
    
    $fitersBtnSubmit.on('click', function () {
        filtersClose();
    });
    
    $fitersBtnReset.on('click', function () {
        filtersClose();
    });
    /* hamburger hide show */
    $('.hamburger').on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            $(this).removeClass('hamburger_active');
            $('body').removeClass('menu-mobile_opened');
            $('.menu-mobile').slideUp(150);
        } else {
            $(this).addClass('hamburger_active');
            $('body').addClass('menu-mobile_opened');
            $('.menu-mobile').slideDown(150);
        }
    });
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
    
    $('.nav__link').each(function(index) {
        if(this.href.trim() == window.location)
            $(this).addClass('nav__link_active');
    });
    
    var sliderFilter = $('.range-slider_filter');
    var sliderMin = $('.range-slider__text_min');
    var sliderMax = $('.range-slider__text_max');
    
    $(sliderFilter).slider({
        range: true,
        min: 3000000,
        max: 5500000,
        values: [ 3000000, 5500000 ],
        slide: function( event, ui ) {
            $( sliderMin ).text( ui.values[ 0 ]  );
            $( sliderMax ).text( ui.values[ 1 ] );
        }
    });
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
    
    var $StickymediaCheckMin = window.matchMedia('(min-width: 1280px)');
    var $StickymediaCheckMax = window.matchMedia('(max-width: 1279px)');
    var $stickyMenu = $('.sticky');
    
    $(window).on('load resize', function () {
    
        $stickyMenu.hcSticky({
            top: 70,
            bottomEnd: 70,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper',
            responsive: true
        });
    
        if ($StickymediaCheckMin.matches) {
    
            $stickyMenu.hcSticky('reinit');
    
        } else if ($StickymediaCheckMax.matches) {
    
            $stickyMenu.hcSticky('destroy');
            $stickyMenu.css('position', 'relative');
        }
    });
    $( '.tabs-result' ).tabs({
        show: {
            effect: 'fade',
            duration: 200
        },
        hide: {
            effect: 'fade',
            duration: 200
        }
    });

})(jQuery);