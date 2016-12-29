var $fiters = $('.filters');
var $fitersBtnOpen = $('.filters__btn-open');
var $fitersBtnSubmit = $('.filters__btn-submit');
var $fitersBtnReset = $('.filters__btn-reset');

function filtersOpen() {
    $fitersBtnOpen.addClass('filters__btn_active');
    $fiters.slideDown(250);
}

function filtersClose() {
    $fitersBtnOpen.removeClass('filters__btn_active');
    $fiters.slideUp(250);
}

$fitersBtnOpen.on('click', function () {
    if ( $(this).hasClass('filters__btn_active') ) {
        filtersClose();
    } else {
        filtersOpen();
    }
});

$fitersBtnSubmit.on('click', function () {
    filtersClose();
});

$fitersBtnReset.on('click', function () {
    filtersClose();
});