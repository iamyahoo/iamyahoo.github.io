$('.tabs').each( function() {
    $('.tabs__buttons').on('click', '.tabs__btn:not(.active)', function () {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');

        $(this)
            .closest('.tabs')
            .find('.tabs__item')
            .removeClass('active')
            .eq($(this).index())
            .addClass('active');
    });
});
