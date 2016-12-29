//yandex maps
var myMap;

ymaps.ready(init);

function init () {
    //map initialization
    myMap = new ymaps.Map('map', {
        center: [59.958981838784524,30.321370846679603],
        zoom: 10,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    // zoom control
    myMap.controls.add(new ymaps.control.ZoomControl({
        options: {
            position: {
                right: 15,
                top: 100
            }
        }
    }));

    // disable zoom on scroll
    myMap.behaviors.disable('scrollZoom');


    // map placemarks
    var path = '../build/img/icons/';
    myPlacemark1 = new ymaps.Placemark([60.059781757208725,30.306588499999958], {
        hintContent: 'Выборгское шоссе, д. 23 к.1'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: path + 'placemark1.png',
        iconImageSize: [34, 44],
        iconImageOffset: [-16, -42]
    });

    myPlacemark2 = new ymaps.Placemark([59.99671775755763,30.29844949999991], {
        hintContent: 'Коломяжский пр., д. 18А'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: path + 'placemark2.png',
        iconImageSize: [34, 44],
        iconImageOffset: [-16, -42]
    });

    myPlacemark3 = new ymaps.Placemark([59.84691575838345,30.21297549999995], {
        hintContent: 'Проспект М.Жукова, д. 51'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: path + 'placemark3.png',
        iconImageSize: [34, 44],
        iconImageOffset: [-16, -42]
    });

    myMap.geoObjects.add(myPlacemark1)
                    .add(myPlacemark2)
                    .add(myPlacemark3);

}
(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__link');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
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
    var accordionCheckbox = $('.accordion__checkbox_hidden');
    var accordionCheckboxIncluded = $('.accordion__checkbox_included');
    var accordionCheckboxUnavailable = $('.accordion__checkbox_unavailable');

    $(accordionCheckbox).each(function () {
        $(this).change(function () {
            if ( $(this).is(":checked") ) {
                $(this).closest('td').addClass('accordion-table_highlighted');
                $(this).closest('td').siblings().addClass('accordion-table_highlighted');
            } else {
                $(this).closest('td').removeClass('accordion-table_highlighted');
                $(this).closest('td').siblings().removeClass('accordion-table_highlighted');
            }
        });
    });

    $(accordionCheckboxUnavailable).each(function () {
        if ( $(this).length ) {
            $(this).closest('td').addClass('accordion-table_unavailable');
            $(this).closest('td').siblings().addClass('accordion-table_unavailable');
        } else {
            $(this).closest('td').removeClass('accordion-table_unavailable');
            $(this).closest('td').siblings().removeClass('accordion-table_unavailable');
        }
    });


})(jQuery);
(function($) {
    /*alert hide show*/
    var button = $('.alert-geolocation');
    var target = $('.alert_geolocation');

    button.on('click', function() {
        if ( target.hasClass('alert_active') ) {
            target.removeClass('alert_active')
            target.fadeOut(250);
        } else {
            target.addClass('alert_active')
            target.fadeIn(250);
        }
    });

})(jQuery);
$(document).ready(function() {

    $('.auto-slider').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_prev">',
        nextArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_next">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });

    $('.auto-slider_big').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_prev">',
        nextArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_next">'
    });

    $('.auto-slider_promo').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_prev">',
        nextArrow: '<button type="button" class="auto-slider__arrow auto-slider__arrow_next">'
    });

    $('.auto-slider__item:not(.slick-cloned)').fancybox({
        arrows: 'true',
        padding: '0',
        openEffect	: 'fade',
        closeEffect	: 'fade',
        playSpeed: '5000',
        helpers: {
            thumbs	: {
                width	: 230,
                height	: 130
            }
        },
        tpl: {
            closeBtn : '<a title="Close" class="fancybox-item auto-slider__close" href="javascript:;"></a>',
            next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span class="auto-slider__arrow auto-slider__arrow_next"></span></a>',
            prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="auto-slider__arrow auto-slider__arrow_prev"></span></a>'
        }
    });
});
(function($) {

    //init jquery formstyler plugin
    $('select.dropdown-light').styler();

    $('select.dropdown-custom').styler({
        onFormStyled: function() {

            // cache styled select
            var $dropdown_custom = $('.jq-selectbox.dropdown-custom');

            // add custom description to each select
            $dropdown_custom.each( function() {
                $(this).append('<p class="jq-selectbox__desc"></p>');

                var $title_custom = $(this).attr('title');
                var $desc_custom  = $('.jq-selectbox__desc');
                $(this).find($desc_custom).text($title_custom);


                $(this).on('change', function() {
                    var $title_custom = $(this).attr('title');
                    var $desc_custom  = $('.jq-selectbox__desc');
                    $(this).find($desc_custom).text($title_custom);
                });
            });
        }
    });
})(jQuery);
(function($) {
// Iterate over each dropdown element
    $('.dropdown-menu').each(function () {

        // Cache the number of options
        var $dropdown = $(this),
            $dropdownText = $('.dropdown-menu__text'),
            $dropdownTitle = $('.dropdown-menu__title'),
            $dropdownList = $('.dropdown-menu__list'),
            $dropdownListItems = $('.dropdown-menu__item');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $dropdown.on('click', function (e) {
            e.stopPropagation();
            if ($dropdown.hasClass('dropdown_opened')) {
                $dropdown.removeClass('dropdown_opened');
                $dropdown.find('.dropdown-menu__list').slideUp(150);
            } else {
                $dropdown.addClass('dropdown_opened');
                $dropdown.find('.dropdown-menu__list').slideDown(150);
            }
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $dropdownListItems.on('click', function (e) {
            e.stopPropagation();
            $dropdownText.text($(this).find($dropdownTitle).text());
            $dropdown.removeClass('dropdown_opened');
            $dropdownList.slideUp(150);
            //your code
        });

        // Hides the unordered list when clicking outside of it
        $(document.body).click(function () {
            $dropdown.removeClass('dropdown_opened');
            $dropdownList.slideUp(150);
        });
    });
})(jQuery);
(function($) {
// Iterate over each dropdown element
    $('.dropdown-simple').each(function () {

        // Cache the number of options
        var $dropdown = $(this),
            $dropdownText = $('.dropdown-simple__text'),
            $dropdownLink = $('.dropdown-simple__link'),
            $dropdownList = $('.dropdown-simple__list'),
            $dropdownListItems = $('.dropdown-simple__item');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $dropdown.on('click', function (e) {
            e.stopPropagation();
            if ($dropdown.hasClass('dropdown_opened')) {
                $dropdown.removeClass('dropdown_opened');
                $dropdown.find('.dropdown-simple__list').slideUp(150);
            } else {
                $dropdown.addClass('dropdown_opened');
                $dropdown.find('.dropdown-simple__list').slideDown(150);
            }
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $dropdownListItems.on('click', function (e) {
            e.stopPropagation();
            $dropdownText.text($(this).find($dropdownLink).text());
            $dropdown.removeClass('dropdown_opened');
            $dropdownList.slideUp(150);
            //your code
        });

        // Hides the unordered list when clicking outside of it
        $(document.body).click(function () {
            $dropdown.removeClass('dropdown_opened');
            $dropdownList.slideUp(150);
        });
    });
})(jQuery);
(function($) {
    var $item = $('.form__item');
    var $textarea = $('.form__textarea');

    //wrap input to element, add placeholder animation
    $.each($item, function() {

        var $this = $(this);
        var $description = $('.form__item-desc');
        var $descriptionText = $(this).attr('placeholder');


        $this.wrap('<div class="form__item-wrapper"></div>')
             .before('<label class="form__item-desc"></label>')
             .siblings($description).text($descriptionText);

        $this.on('click focus', function() {
            $this.parent().addClass('focused');
        });

        $this.on('blur', function() {
            if ( !$this.val() ) {
                $this.parent().removeClass('focused');
            }
        });
    });

    //wrap textarea to element, add placeholder animation
    $.each($textarea, function() {

        var $this = $(this);
        var $description = $('.form__textarea-desc');
        var $descriptionText = $(this).attr('placeholder');

        $this.wrap('<div class="form__textarea-wrapper"></div>')
             .before('<label class="form__textarea-desc"></label>')
             .siblings($description).text($descriptionText);

        $this.on('click focus', function() {
            $this.parent().addClass('focused');
        });

        $this.on('blur', function() {
            if ( !$this.val() ) {
                $this.parent().removeClass('focused');
            }
        });
    });
})(jQuery);
(function($) {

    // fix el if window width >= 1280px
    function mediaCheck(el) {

        var $mediaCheck = window.matchMedia('(min-width: 1280px)');

        if (!el.length) {
            return false;
        }

        if ($mediaCheck.matches) {

            var $stickyTop = el.offset().top;
            var $stickyHeight = el.outerHeight();
            $(window).on('scroll', function () {
                var $windowTop = $(window).scrollTop();
                var $limit = $(document).height() - $stickyHeight;

                // debugging
                //console.log('$limit: ' + $limit);
                //console.log('$stickyTop: ' + $stickyTop);
                //console.log('$windowTop: ' + $windowTop);
                //console.log(' ');

                if ($stickyTop < $windowTop) {
                    el.addClass('pos_fixed').removeClass('pos_relative');
                } else if ($stickyTop < 10) {
                    el.addClass('pos_relative').removeClass('pos_fixed');
                }

                if ( ($limit < $windowTop) && ($limit < $stickyTop) ) {
                    var diff = $limit - $windowTop;
                    el.css({
                        top: diff
                    });
                }
            });

        } else {
            if (el.length) {
                $(window).on('scroll', function () {
                    el.addClass('pos_relative').removeClass('pos_fixed');
                });
            }
        }
    }

    $(window).on('load scroll resize', function () {
        mediaCheck( $('.nav__inner') );
        mediaCheck( $('.brands__inner') );
    });
    mediaCheck( $('.nav__inner') );
    mediaCheck( $('.brands__inner') );

})(jQuery);
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
function showModal(id) {
    document.getElementById(id).classList.add('modal_opened');
    document.body.style.overflow = "hidden";
}

function hideModal(id) {
    document.getElementById(id).classList.remove('modal_opened');
    document.body.style.overflow = "visible";
}

(function($) {

    var modal = $('.modal')
    $('.modal__backdrop').on('click', function() {
        $(this).closest(modal).removeClass('modal_opened').addClass('modal_closed');
        $('body').css('overflow', 'visible');

        setTimeout(function() {
            modal.removeClass('modal_closed');
        }, 100);
    });

})(jQuery);
(function($) {
    var MobileMenu = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.mobile-acc__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    MobileMenu.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('mobile-acc_open');

        if (!e.data.multiple) {
            $el.find('.mobile-acc__list').not($next).slideUp().parent().removeClass('mobile-acc_open');
        };
    }

    var accordion = new MobileMenu($('.mobile-acc'), false);

    $('.mobile-menu').on("touchmove scroll", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

})(jQuery);
(function($) {

    //set el height equal to window height
    function setHeight(el) {
        windowHeight = $(window).innerHeight();
        $(el).css('min-height', windowHeight);
    }


    //check screen resolution and call function if >=1280px
    function mediaCheck(el) {

        var $mediaCheck = window.matchMedia("(min-width: 1280px)");

        if (!el.length) {
            return false;
        }

        if ($mediaCheck.matches) {
            $(window).on('load resize', function() {
                setHeight('.nav__inner');
            });
        }
    }
    mediaCheck('.nav__inner');
})(jQuery);
/**
 * slider: http://refreshless.com/nouislider/

(function($) {

    var rangeSlider = document.querySelector('.range-slider__item');

    noUiSlider.create(rangeSlider, {
        start: [ 565000, 1892000 ],
        connect: true,
        step: 10000,
        range: {
            'min': 565000,
            'max': 1892000
        }
    });



    var inputs = [
        document.getElementById('range-slider__input_lower'),
        document.getElementById('range-slider__input_upper')
    ];


    rangeSlider.noUiSlider.on('update', function( values, handle ) {
        inputs[handle].value = values[handle];
    });
})(jQuery);

 */
(function($) {

    var $StickymediaCheckMin = window.matchMedia('(min-width: 1280px)');
    var $StickymediaCheckMax = window.matchMedia('(max-width: 1279px)');
    var $stickyMenu = $('.sticky');

    $(window).on('load resize', function () {

        $stickyMenu.hcSticky({
            top: 50,
            bottomEnd: 20,
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


})(jQuery);
(function($) {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
})(jQuery);
(function($) {
    /* media check for submenu */
    function submenuMediaCheck() {
        var $mediaCheck = window.matchMedia("(max-width: 1279px)");
        var $submenu = $('.submenu');

        if ($mediaCheck.matches) {
            $submenu.hide();
        } else {
            $submenu.show();
        }
    }

    window.onresize = function () {
        submenuMediaCheck();
    };
    submenuMediaCheck();
})(jQuery);

(function($) {
    var Accordion = function(el) {
        this.el = el || {};

        // btn
        var links = this.el.find('.table-accordion__btn');
        // event
        links.on('click', {
            el: this.el
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        if ( $this.parent().hasClass('table-accordion_opened') ) {
            $next.slideUp(150);
            $this.parent().removeClass('table-accordion_opened');
        } else {
            $next.slideDown(150);
            $this.parent().addClass('table-accordion_opened');
        }
    }

    var accordion = new Accordion($('.table-accordion'), false);
})(jQuery);