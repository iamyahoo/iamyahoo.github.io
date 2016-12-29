// Iterate over each dropdown element
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdownText = $('.dropdown-text'),
        $dropdownMenu = $('.dropdown-menu'),
        $dropdownList = $('.dropdown-list'),
        $dropdownListItems = $('.dropdown-item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdownText.on('click', function(e) {
        e.stopPropagation();
        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown-list').slideUp(150);
            $dropdown.find('.dropdown-menu').slideUp(150);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown-list').slideDown(150);
            $dropdown.find('.dropdown-menu').slideDown(150);
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $dropdownListItems.click(function(e) {
        e.stopPropagation();
        $dropdownText.text($(this).text());
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
        $dropdownMenu.slideUp(150);
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
        $dropdownMenu.slideUp(150);
    });
});