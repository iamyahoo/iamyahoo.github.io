(function($) {

    //init jquery formstyler plugin
    $('select.dropdown-light').styler();

    $('select.dropdown-custom').styler({
        onFormStyled: function() {

            // cache styled select
            var $dropdown_custom = $('.jq-selectbox.dropdown-custom');

            // add custom description to each select
            $dropdown_custom.each( function() {
                $(this).append('<p class="jq-selectbox__desc"></p>');

                var $title_custom = $(this).attr('title');
                var $desc_custom  = $('.jq-selectbox__desc');
                $(this).find($desc_custom).text($title_custom);


                $(this).on('change', function() {
                    var $title_custom = $(this).attr('title');
                    var $desc_custom  = $('.jq-selectbox__desc');
                    $(this).find($desc_custom).text($title_custom);
                });
            });
        }
    });
})(jQuery);
