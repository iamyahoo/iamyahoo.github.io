(function($) {
    var accordionCheckbox = $('.accordion__checkbox_hidden');
    var accordionCheckboxIncluded = $('.accordion__checkbox_included');
    var accordionCheckboxUnavailable = $('.accordion__checkbox_unavailable');

    $(accordionCheckbox).each(function () {
        $(this).change(function () {
            if ( $(this).is(":checked") ) {
                $(this).closest('td').addClass('accordion-table_highlighted');
                $(this).closest('td').siblings().addClass('accordion-table_highlighted');
            } else {
                $(this).closest('td').removeClass('accordion-table_highlighted');
                $(this).closest('td').siblings().removeClass('accordion-table_highlighted');
            }
        });
    });

    $(accordionCheckboxUnavailable).each(function () {
        if ( $(this).length ) {
            $(this).closest('td').addClass('accordion-table_unavailable');
            $(this).closest('td').siblings().addClass('accordion-table_unavailable');
        } else {
            $(this).closest('td').removeClass('accordion-table_unavailable');
            $(this).closest('td').siblings().removeClass('accordion-table_unavailable');
        }
    });


})(jQuery);
