var mapBranch;
var mapService;
var mapContacts;

function initMap() {

    $(window).on('load', function() {
        if (document.getElementById('map-geography_branches')) {
            initMap();
            mapBranch = new google.maps.Map(document.getElementById('map-geography_branches'), {
                center: {lat: 58.781337907139104, lng: 45.93300425000007},
                zoom: 5,
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false
            });
    
            google.maps.event.addDomListener(window, 'resize', function () {
                var center1 = mapBranch.getCenter();
                google.maps.event.trigger(mapBranch, 'resize');
                mapBranch.setCenter(center1);
            });
    
            var mapStyles = [];
            mapBranch.setOptions({styles: mapStyles});
        }
    });
    
    var geomark = {
        url: '/img/svg/svg-geomark_black.svg',
        size: new google.maps.Size(25, 37)
    };
    
    var markCity1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: mapBranch,
        icon: geomark,
        title: 'Санкт-Петербург'
    });
    $(window).on('load', function() {
        if (document.getElementById('map-geography_services')) {
            initMap();
            mapService = new google.maps.Map(document.getElementById('map-geography_services'), {
                center: {lat: 55.01735812882684, lng: 55.01735812882684},
                zoom: 5,
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false
            });
    
            google.maps.event.addDomListener(window, 'resize', function () {
                var center2 = mapService.getCenter();
                google.maps.event.trigger(mapService, 'resize');
                mapService.setCenter(center2);
            });
    
            var mapStyles = [];
            mapService.setOptions({styles: mapStyles});
        }
    });
    
    var geomark = {
        url: '/img/svg/svg-geomark_black.svg',
        size: new google.maps.Size(25, 37)
    };
    
    var markCity1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: mapService,
        icon: geomark,
        title: 'Санкт-Петербург'
    });
    $(window).on('load',function(){
        if (document.getElementById('map-contacts')!=null){
            initMap();
        }
    });
    
    if (document.getElementById('map-contacts')) {
        mapContacts = new google.maps.Map(document.getElementById('map-contacts'), {
            center: {lat: 59.9184953455408, lng: 30.345464577148505},
            zoom: 15,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false
        });
    
        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = mapContacts.getCenter();
            google.maps.event.trigger(mapContacts, 'resize');
            mapContacts.setCenter(center1);
        });
    
        var mapStyles = [];
        mapContacts.setOptions({styles: mapStyles});
    }
    
    var geomark = {
        url: '/img/icons/icon-geomark_office.png',
        size: new google.maps.Size(37, 56)
    };
    
    var markCity1 = new google.maps.Marker({
        position: {lat: 59.917506, lng: 30.347174},
        map: mapContacts,
        icon: geomark,
        title: 'ул. Тюшина д. 11 лит. А'
    });
    $(window).on('load', function() {
        if (document.getElementById('map-terminal')) {
            initMap();
            mapService = new google.maps.Map(document.getElementById('map-terminal'), {
                center: {lat: 55.01735812882684, lng: 55.01735812882684},
                zoom: 5,
                disableDefaultUI: true,
                zoomControl: true,
                scrollwheel: false
            });
    
            google.maps.event.addDomListener(window, 'resize', function () {
                var center2 = mapService.getCenter();
                google.maps.event.trigger(mapService, 'resize');
                mapService.setCenter(center2);
            });
    
            var mapStyles = [];
            mapService.setOptions({styles: mapStyles});
        }
    });
    
    var geomark = {
        url: '/img/svg/svg-geomark_black.svg',
        size: new google.maps.Size(25, 37)
    };
    
    var markCity1 = new google.maps.Marker({
        position: {lat: 59.945695, lng: 30.288473},
        map: mapService,
        icon: geomark,
        title: 'Санкт-Петербург'
    });
}
(function($) {
    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
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
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion__item_open');

        //collapse other accordions
        //if (!e.data.multiple) {
        //    $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
        //};
    };

    var accordion = new Accordion($('.accordion'), false);

})(jQuery);
(function($) {

    $('.investing-graph__count span').counterUp({
        delay: 10,
        time: 1500
    });

    $('.power__number').counterUp({
        delay: 10,
        time: 2000
    });

})(jQuery);
(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.dropdown-menu__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('dropdown-menu__item_open');

        //collapse other dropdown-menu
        //if (!e.data.multiple) {
        //    $el.find('.dropdown-menu__content').not($next).slideUp().parent().removeClass('dropdown-menu__item_open');
        //};
    };

    var dropdownMenu = new Accordion($('.dropdown-menu'), false);

})(jQuery);
(function($) {
    function fillField(field) {
        $(document).on('input', field, function() {

            if ( $(this).val() ) {

                if( $(this).hasClass('form__input') ) {
                    $(this).addClass('form__input_filled');
                } else {
                    $(this).addClass('form__textarea_filled');
                }
            } else if ( !$(this).val()) {

                if( $(this).hasClass('form__input') ) {
                    $(this).removeClass('form__input_filled');
                } else {
                    $(this).removeClass('form__textarea_filled');
                }
            }
        });
    }

    fillField('input');
    fillField('textarea');
})(jQuery);
(function($) {
    function formReset() {
        document.querySelector('.form').reset();
    }
})(jQuery);
(function($) {

    $('.form__select_simple').styler();

    $('.form__select_dropdown').styler();

    $('.form__select_search').styler({
        selectSearch: true,
        selectSearchLimit: 0
    });

})(jQuery);

$('.form__select').on('click', function(e) {
    e.preventDefault();
});
/* hamburger hide show */
(function($) {
    var hamburger = $('.hamburger');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('menu-mobile_opened');
        $('.menu-mobile').slideDown(150);
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('menu-mobile_opened');
        $('.menu-mobile').slideUp(150);
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
})(jQuery);
(function($) {
    // Hide Header on on scroll down
    var $didScroll;
    var $lastScrollTop = 0;
    var $delta = 5;
    var $header = $('.header');
    var $headerHeight = $header.outerHeight();
    var $pageWrapper = $('.page-wrapper');


    $(window).scroll(function(event){
        $didScroll = true;

        if ( window.pageYOffset < 80 ) {
            $header.addClass('header_on-top');
            $header.removeClass('header_on-scroll');
        } else {
            $header.addClass('header_on-scroll');
            $header.removeClass('header_on-top')
        }
    });

    setInterval(function() {
        if ($didScroll) {
            hasScrolled();
            $didScroll = false;
        }
    }, 200);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs($lastScrollTop - st) <= $delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > $lastScrollTop && st > $headerHeight){
            // Scroll Down
            $header.removeClass('header_down').addClass('header_up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $header.removeClass('header_up').addClass('header_down');
            }
        }

        $lastScrollTop = st;
    }


    if ( !$header.length ) {
        $pageWrapper.addClass('no-header');
    }
})(jQuery);
(function($) {

    if ( $('.page-container').hasClass('page-main') ) {
        mainBranchAnimate();
    }

    function mainBranchAnimate() {
        var mainBranch = $('.main-branch');
        var mainBranchPos = mainBranch.position();
        var mainBranchPosTop = mainBranchPos.top;

        $(window).on('load scroll', function() {

            if ( $(window).scrollTop() > mainBranchPosTop - 250 ) {
                mainBranch.addClass('main-branch_animated');
            }
        });
    }

})(jQuery);
(function($) {

    var $htmlBody = $('body');
    var $mobileMenuMediaCheckMin = window.matchMedia('(min-width: 641px)');

    $(window).on('load resize', function () {
        if ( ($mobileMenuMediaCheckMin.matches) && ($htmlBody.hasClass('menu-mobile_opened')) ) {
            $htmlBody.removeClass('menu-mobile_opened');
        }
    });

})(jQuery);
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.nav__link');
    linkHighlight('.submenu__link');

})(jQuery);
(function($) {
    var $StickymediaCheckMin = window.matchMedia('(min-width: 1280px)');
    var $StickymediaCheckMax = window.matchMedia('(max-width: 1279px)');
    var $stickyBlock = $('.sticky');

    $(window).on('load resize', function () {

        $stickyBlock.hcSticky({
            top: 70,
            bottomEnd: 30,
            className: 'is-sticky',
            wrapperClassName: 'sticky-wrapper',
            responsive: true
        });

        if ($StickymediaCheckMin.matches) {

            $stickyBlock.hcSticky('reinit');

        } else if ($StickymediaCheckMax.matches) {

            $stickyBlock.hcSticky('destroy');
            $stickyBlock.css('position', 'relative');
        }
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

    smoothScroll( '.terminal__top .link_map' );
    smoothScroll( '#geography-services-link' );

})(jQuery);