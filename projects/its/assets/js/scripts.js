var mediaTo1179 = window.matchMedia('(max-width: 1179px)');
var mediaFrom1180 = window.matchMedia('(min-width: 1180px)');

var mediaTo789 = window.matchMedia('(max-width: 789px)');
var mediaFrom790 = window.matchMedia('(min-width: 790px)');
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

    function linkHighlight(linkClass) {


        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location) {
                $(this).addClass('link_active');
            }
        });
    }

    $(window).on('load', function() {

        setTimeout(function() {

            linkHighlight('.nav__link');
            linkHighlight('.menu-mobile__link');
        }, 400);
    });

})(jQuery);
(function($) {
    var gridMain = $('.grid-news');
    var gridBlog = $('.grid-blog');
    var gridMainInit = false;
    var gridBlogInit = false;

    var gridMainSettings = {
        columnWidth: 480,
        itemSelector: '.news__item',
        gutter: '.news-gutter'
    };

    var gridBlogSettings = {
        columnWidth: 320,
        itemSelector: '.blog__item',
        gutter: '.blog-gutter'
    };


    $(window).on('load resize', function () {

        /* main page grid on/off*/
        if (mediaFrom1180.matches) {

            if ( !gridMainInit ) {

                gridMainInit = true;
                gridMain.masonry( gridMainSettings );
            }


        } else if (mediaTo1179.matches) {

            if (gridMainInit) {
                gridMainInit = false;
                gridMain.masonry('destroy');
            }
        }

        /* blog grid on/off*/
        if (mediaFrom790.matches) {

            if ( !gridBlogInit ) {

                gridBlogInit = true;
                gridBlog.masonry( gridBlogSettings );
            }


        } else if (mediaTo789.matches) {

            if (gridBlogInit) {
                gridBlogInit = false;
                gridBlog.masonry('destroy');
            }
        }
    });
})(jQuery);
/* hamburger hide show */
(function($) {

    var $htmlBody = $('body');
    var hamburger = $('.hamburger');
    var $mobileMenuMediaCheckMin = window.matchMedia('(min-width: 1091px)');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('menu-mobile_opened');
        $('.menu-mobile').slideDown(250);
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('.menu-mobile').slideUp(250);

        setTimeout(function() {
            $('body').removeClass('menu-mobile_opened');
        }, 250);
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    /* close hamburger on ESC */
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key
            hamburgerClose()
        }
    });

    /* close hamburger on desktop */
    $(window).on('load resize', function () {
        if ( ($mobileMenuMediaCheckMin.matches) && ($htmlBody.hasClass('menu-mobile_opened')) ) {
            hamburgerClose();
        }
    });
})(jQuery);
var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map-contacts'), {

        center: {
            lat: 59.9223051, lng: 30.3451454
        },
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        scrollwheel: false
    });

    var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];
    map.setOptions({styles: mapStyles});

    google.maps.event.addDomListener(window, 'resize', function () {
        var center1 = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center1);
    });


    var markOffice1 = new google.maps.Marker({
        position: {lat: 59.9223051, lng: 30.3451454},
        map: map,
        icon: {
            anchor: new google.maps.Point(0, 0),
            url: 'data:image/svg+xml;utf-8, \
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="50px" viewBox="0 0 40 50"><path fill="rgb(255, 205, 0)" d="M20 0c11 0 20 9 20 20S20 50 20 50 0 31.1 0 20C0 9 9 0 20 0z"/></svg>'
        },
        title: 'ITS. Санкт-Петербург, Достоевского 44'
    });
}

window.onload = function() {

    if (document.getElementById('map-contacts')) {
        initMap();
    }
};
(function($) {
    $(window).on('load', function() {

        setTimeout(function() {
            $('.page-container').addClass('is-loaded');
        }, 200);
    });
})(jQuery);
(function($) {

    function parallax() {
        var pageParallax = document.querySelector('.page-parallax');

        $(window).on('load scroll', function() {
            var speed = 3.0;
            var offset = 130;
            pageParallax.style.backgroundPosition = (-window.pageXOffset/speed)+"px " + ((-window.pageYOffset/speed) + offset)+"px";
        });
    }

    if( $('.page').hasClass('page-parallax')) {
        parallax();
    }

})(jQuery);
(function($) {
    var $parallax = $('.parallax');
    var $parallaxInit = false;
    var $serviceImg = $('.service__img');

    if($parallax.length) {
        $(window).on('load resize', function () {

            /* main page grid on/off*/
            if (mediaFrom1180.matches) {

                if ( !$parallaxInit ) {
                    $parallaxInit = true;

                    $serviceImg.plaxify();
                    $.plax.enable();
                }


            } else if (mediaTo1179.matches) {

                if ($parallaxInit) {
                    $parallaxInit = false;
                    $.plax.disable();
                    console.log(10);
                }
            }
        });
    }

})(jQuery);
(function($) {

    var portfolioItem = $('.portfolio-tab_list .portfolio__item');
    var animStartPosition = window.innerHeight - window.innerHeight / 6;


    $(window).on('load scroll', function() {

        portfolioItem.each(function() {
            var portfolioItemOffsetTop = $(this).offset().top;

            if ( $(window).scrollTop() > portfolioItemOffsetTop - animStartPosition) {
                $(this).addClass('portfolio__item_animated');
            }
        });
    });

})(jQuery);
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-anchor' );

})(jQuery);
(function($) {

    var $socialIcon = $('.social__icon');

    $socialIcon.on('mouseenter', function() {
        $(this).siblings().addClass('social__icon_inactive')
    });

    $socialIcon.on('mouseleave', function() {
        $(this).siblings().removeClass('social__icon_inactive')
    });

})(jQuery);
(function($) {

    var $portfolioSlider = $('.portfolio-slider');

    $portfolioSlider
        .on('beforeChange', function(event, slick, currentSlide, nextSlide) {

            var $nextSlide = $portfolioSlider.find('.slick-slide').eq(nextSlide + 1);
            if ($nextSlide.hasClass('portfolio__item_dark')) {
                $('.header').addClass('header_light');
                $portfolioSlider.addClass('portfolio-slider_dark');
            } else {
                $('.header').removeClass('header_light');
                $portfolioSlider.removeClass('portfolio-slider_dark');
            }
        })

        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="arrow arrow_prev"></button>',
            nextArrow: '<button type="button" class="arrow arrow_next"></button>'
            //autoplay: true
            //autoplaySpeed: 6000
        });

    $('.post-slider__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: '.post-slider__buttons',
        prevArrow: '<button type="button" class="arrow arrow_short arrow_prev"></button>',
        nextArrow: '<button type="button" class="arrow arrow_long arrow_next"></button>'
        //autoplay: true
        //autoplaySpeed: 6000
    });

})(jQuery);
var pageContainer = $('.page-container');

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

        if( $(this).hasClass('tabs__btn_slider') ) {

            pageContainer.addClass('portfolio-slider_active');
            pageContainer.removeClass('portfolio-list_active')
            $('.portfolio-slider').slick('setPosition');

        } else if( $(this).hasClass('tabs__btn_list') ) {

            pageContainer.addClass('portfolio-list_active');
            pageContainer.removeClass('portfolio-slider_active');
        }
    });
});