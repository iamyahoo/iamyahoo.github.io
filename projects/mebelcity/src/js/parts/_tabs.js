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
