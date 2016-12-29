(function($) {
    function fillField(field) {
        $(document).on('input', field, function() {

            if ( $(this).val() ) {

                if( $(this).hasClass('form__input') ) {
                    $(this).addClass('form__input_filled');
                } else {
                    $(this).addClass('form__textarea_filled');
                }
            } else if ( !$(this).val()) {

                if( $(this).hasClass('form__input') ) {
                    $(this).removeClass('form__input_filled');
                } else {
                    $(this).removeClass('form__textarea_filled');
                }
            }
        });
    }

    fillField('input');
    fillField('textarea');
})(jQuery);