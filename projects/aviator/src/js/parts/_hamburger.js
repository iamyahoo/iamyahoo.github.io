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