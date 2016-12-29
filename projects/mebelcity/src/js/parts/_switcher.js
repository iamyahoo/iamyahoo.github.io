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