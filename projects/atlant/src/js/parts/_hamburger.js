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