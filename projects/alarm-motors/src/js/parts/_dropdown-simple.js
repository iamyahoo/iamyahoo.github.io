(function($) {
// Iterate over each dropdown element
    $('.dropdown-simple').each(function () {

        // Cache the number of options
        var $dropdown = $(this),
            $dropdownText = $('.dropdown-simple__text'),
            $dropdownLink = $('.dropdown-simple__link'),
            $dropdownList = $('.dropdown-simple__list'),
            $dropdownListItems = $('.dropdown-simple__item');

        // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
        $dropdown.on('click', function (e) {
            e.stopPropagation();
            if ($dropdown.hasClass('dropdown_opened')) {
                $dropdown.removeClass('dropdown_opened');
                $dropdown.find('.dropdown-simple__list').slideUp(150);
            } else {
                $dropdown.addClass('dropdown_opened');
                $dropdown.find('.dropdown-simple__list').slideDown(150);
            }
        });

        // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
        // Updates the select element to have the value of the equivalent option
        $dropdownListItems.on('click', function (e) {
            e.stopPropagation();
            $dropdownText.text($(this).find($dropdownLink).text());
            $dropdown.removeClass('dropdown_opened');
            $dropdownList.slideUp(150);
            //your code
        });

        // Hides the unordered list when clicking outside of it
        $(document.body).click(function () {
            $dropdown.removeClass('dropdown_opened');
            $dropdownList.slideUp(150);
        });
    });
})(jQuery);
