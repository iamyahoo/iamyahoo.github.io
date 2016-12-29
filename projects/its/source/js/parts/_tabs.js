var pageContainer = $('.page-container');

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

        if( $(this).hasClass('tabs__btn_slider') ) {

            pageContainer.addClass('portfolio-slider_active');
            pageContainer.removeClass('portfolio-list_active')
            $('.portfolio-slider').slick('setPosition');

        } else if( $(this).hasClass('tabs__btn_list') ) {

            pageContainer.addClass('portfolio-list_active');
            pageContainer.removeClass('portfolio-slider_active');
        }
    });
});
