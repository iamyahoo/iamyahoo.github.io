function showModal(id) {
    document.getElementById(id).classList.add('modal_opened');
    document.body.style.overflow = "hidden";
}

function hideModal(id) {
    document.getElementById(id).classList.remove('modal_opened');
    document.body.style.overflow = "visible";
}

(function($) {

    var modal = $('.modal')
    $('.modal__backdrop').on('click', function() {
        $(this).closest(modal).removeClass('modal_opened').addClass('modal_closed');
        $('body').css('overflow', 'visible');

        setTimeout(function() {
            modal.removeClass('modal_closed');
        }, 100);
    });

})(jQuery);