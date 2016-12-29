/* //= parts/_map.js */
var map1;
var map2;

function initMap() {

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 59.991064160768, lng: 30.25176215832516},
            zoom: 16,
            disableDefaultUI: true,
            zoomControl: true
        });
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 59.98565525763078, lng: 30.353507499999907},
            zoom: 16,
            disableDefaultUI: true,
            zoomControl: true
        });
    }

    google.maps.event.addDomListener(window, 'resize', function() {
        var center1 = map1.getCenter();
        var center2 = map2.getCenter();
        google.maps.event.trigger(map1, 'resize');
        google.maps.event.trigger(map2, 'resize');
        map1.setCenter(center1);
        map2.setCenter(center2);
    });

    var geomark = {
        url: '/img/icon/geomark_icon.png',
        //url: '/mebelcity/web/img/icon/geomark_icon.png',
        size: new google.maps.Size(41, 66)
    };

    var mark1 = new google.maps.Marker({
        position: {lat: 59.991038, lng: 30.252406},
        map: map1,
        icon: geomark
    });

    var mark2 = new google.maps.Marker({
        position: {lat: 59.985828, lng: 30.353287},
        map: map2,
        icon: geomark
    });
}

(function($) {

    $('.map-switcher').each( function() {
        $(this).find('ul.map__buttons').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).closest('.map-switcher').find('div.map__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

})(jQuery);
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
// Iterate over each dropdown element
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdownText = $('.dropdown-text'),
        $dropdownMenu = $('.dropdown-menu'),
        $dropdownList = $('.dropdown-list'),
        $dropdownListItems = $('.dropdown-item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdownText.on('click', function(e) {
        e.stopPropagation();
        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown-list').slideUp(150);
            $dropdown.find('.dropdown-menu').slideUp(150);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown-list').slideDown(150);
            $dropdown.find('.dropdown-menu').slideDown(150);
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $dropdownListItems.click(function(e) {
        e.stopPropagation();
        $dropdownText.text($(this).text());
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
        $dropdownMenu.slideUp(150);
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
        $dropdownMenu.slideUp(150);
    });
});
(function($) {
    var MobileMenu = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    MobileMenu.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion_open');

        if (!e.data.multiple) {
            $el.find('.accordion__list').not($next).slideUp().parent().removeClass('accordion_open');
        };
    }

    var accordion = new MobileMenu($('.accordion'), false);

    $('.mobile-menu').on("touchmove scroll", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

})(jQuery);
(function($) {
    $(function() {

        $('.tabs').each( function() {
            $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $(this).closest('.tabs').find('div.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
            });
        });

    });
})(jQuery);
(function($) {
    $(function() {

        $('.switcher').each( function() {
            $(this).find('ul.switcher__buttons').on('click', 'li:not(.active)', function() {
                $(this).addClass('active').siblings().removeClass('active');
                $(this).closest('.switcher').find('div.switcher__item').removeClass('active').eq($(this).index()).addClass('active');
            });
        });

    });
})(jQuery);
//$(document).ready(function() {
//    /*highlight active menu item*/
//
//    var navLink = $('.nav-list').find('.link');
//
//    navLink.each(function(index) {
//        if(this.href.trim() == window.location)
//            $(this).addClass("link_active");
//    });
//});
(function($) {
    /* hamburger hide show */
    $('.hamburger').on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            $(this).removeClass('hamburger_active')
            $('.page-container').removeClass('mobile-menu_active');
            $('.mobile-menu').slideUp(200);
        } else {
            $(this).addClass('hamburger_active')
            $('.page-container').addClass('mobile-menu_active');
            $('.mobile-menu').slideDown(200);
        }
    });
})(jQuery);