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