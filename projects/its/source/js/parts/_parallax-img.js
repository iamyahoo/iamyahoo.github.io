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