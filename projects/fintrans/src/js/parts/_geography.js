/* hamburger hide show */
(function($) {
    var geographySidebarItem = $('.geography-sidebar__item');
    var geographySidebarTitle = $('.geography-sidebar__title');
    var geographySidebarInfo = $('.geography-sidebar__info');


    geographySidebarTitle.each(function(index, element) {

        $(element).on('click', function () {

            if ( $(element).closest(geographySidebarItem).hasClass('geography-sidebar__item_active') ) {

                $(element).siblings('.geography-sidebar__info').slideUp( 150, function() {
                        $(element).closest(geographySidebarItem).removeClass('geography-sidebar__item_active');
                    });

            } else {

                $(element).siblings('.geography-sidebar__info').slideDown( 150, function() {
                        $(element).closest(geographySidebarItem).addClass('geography-sidebar__item_active');
                    });
            }
        });
    });

})(jQuery);