(function($) {

    $('.form__select_simple').styler();

    $('.form__select_dropdown').styler();

    $('.form__select_search').styler({
        selectSearch: true,
        selectSearchLimit: 0
    });

})(jQuery);

$('.form__select').on('click', function(e) {
    e.preventDefault();
});