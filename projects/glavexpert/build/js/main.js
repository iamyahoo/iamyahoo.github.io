/*google map*/
function initMap() {

    //variables
    var map;
    var marker;
    var myLatLng = new google.maps.LatLng(59.85116, 30.308112);
    var icon = 'img/marker.png';


    //map properties
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_CENTER
        }
    });


    //marker
    marker = new google.maps.Marker({
        position: myLatLng,
        icon: icon,
        map: map,
        title: 'Главэкспертиза'
    });
}


;(function($) {

    /*1. highlight active menu item*/
    $(".submenu__link").each(function(index) {
        if(this.href.trim() == window.location)
            $(this).addClass("link_active");
    });


    /*2. dropdowns styling*/
    // Iterate over each select element
    $('select').each(function () {

        // Cache the number of options
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        // Hides the select element
        $this.addClass('dropdown_hidden');

        // Code for dropdown-btn
        if( $this.hasClass('dropdown-btn') ) {

            // Wrap the select element in a div
            $this.wrap('<div class="dropdown"></div>');

            // Cache wrapping element
            var $dropdown = $this.closest('div.dropdown');

            // Insert a styled div to sit over the top of the hidden select element
            $this.after('<div class="dropdown__btn"><p class="dropdown__text"></p><div class="dropdown__arrow"></div></div>');

            // Cache the styled div
            var $styledSelect = $this.next('div.dropdown__btn');

            // Cache the styled div text
            var $styledSelectText = $this.next().find('.dropdown__text');

            // Show the first select option in the styled div
            $styledSelectText.text($this.children('option').eq(0).text());

            // Insert an unordered list after the styled div and also cache the list
            var $list = $('<ul />', {
                'class': 'dropdown__list'
            }).insertAfter($styledSelect);

            // Insert a list item into the unordered list for each select option
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            // Cache the list items
            var $listItems = $list.children('li');

            // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
            $styledSelect.click(function (e) {
                e.stopPropagation();
                $('select').not(this).siblings('ul').slideUp(150);
                if ( $dropdown.hasClass('dropdown_opened') ) {
                    $dropdown.removeClass('dropdown_opened');
                    $styledSelect.next('ul.dropdown__list').slideUp(150);
                } else {
                    $dropdown.addClass('dropdown_opened');
                    $styledSelect.next('ul.dropdown__list').slideDown(150);
                }
            });

            // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
            // Updates the select element to have the value of the equivalent option
            $listItems.click(function (e) {
                e.stopPropagation();
                $this.val($(this).attr('rel'));
                $this.next().find('.dropdown__text').text($(this).text());
                $dropdown.removeClass('dropdown_opened');
                $list.slideUp(150);
                /* alert($this.val()); Uncomment this for demonstration! */
            });

            // Hides the unordered list when clicking outside of it
            $(document).click(function () {
                $dropdown.removeClass('dropdown_opened');
                $list.slideUp(150);
            });
        }

        // Code for dropdown-text
        else if( $this.hasClass('dropdown-text') ) {

            // Wrap the select element in a div
            $this.wrap('<div class="dropdown-light"></div>');

            // Cache wrapping element
            var $dropdown = $this.closest('div.dropdown-light');

            // Insert a styled div to sit over the top of the hidden select element
            $this.after('<span class="dropdown-light__text">В работе</span>');

            // Cache the styled div
            var $styledSelect = $this.next('.dropdown-light__text');

            // Show the first select option in the styled div
            $styledSelect.text($this.children('option').eq(0).text());

            // Insert an unordered list after the styled div and also cache the list
            var $list = $('<ul />', {
                'class': 'dropdown-light__list'
            }).insertAfter($styledSelect);

            // Insert a list item into the unordered list for each select option
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            // Cache the list items
            var $listItems = $list.children('li');

            // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
            $styledSelect.click(function (e) {
                e.stopPropagation();
                $('select').not(this).siblings('ul').slideUp(150);
                if ( $dropdown.hasClass('dropdown_opened') ) {
                    $dropdown.removeClass('dropdown_opened');
                    $styledSelect.next('ul.dropdown-light__list').slideUp(150);
                } else {
                    $dropdown.addClass('dropdown_opened');
                    $styledSelect.next('ul.dropdown-light__list').slideDown(150);
                }
            });

            // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
            // Updates the select element to have the value and attribute of the equivalent option
            $listItems.click(function (e) {
                e.stopPropagation();
                $this.val($(this).attr('rel'));
                $styledSelect.text($(this).text());
                $styledSelect.attr('title', $(this).text());
                $dropdown.removeClass('dropdown_opened');
                $list.slideUp(150);
                /* alert($this.val()); Uncomment this for demonstration! */
            });

            // Hides the unordered list when clicking outside of it
            $(document).click(function () {
                $dropdown.removeClass('dropdown_opened');
                $list.slideUp(150);
            });
        }
    });



    //3. lightbox settings
    lightbox.option({
        'fadeDuration': 300,
        'resizeDuration': 300
    });



    //4. input show and hide password
    $('.form-password input').each(function() {
        var input = $(this);
        var button = $(this).siblings('.form-password__btn');

        button.on('click', function (e) {
            e.preventDefault();
            if ($(input).attr('type') === 'password' ) {
                $(input).attr('type', 'text');
            } else {
                $(input).attr('type', 'password');
            }
        });
    });


    //5. set title attribute to links
    $('a.link_blue').each(function(){
        $(this).attr('title', $(this).text());
    });


})(jQuery);