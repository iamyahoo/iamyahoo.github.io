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