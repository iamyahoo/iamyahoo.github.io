
var sliderFilter = $('.range-slider_filter');
var sliderMin = $('.range-slider__text_min');
var sliderMax = $('.range-slider__text_max');

$(sliderFilter).slider({
    range: true,
    min: 3000000,
    max: 5500000,
    values: [ 3000000, 5500000 ],
    slide: function( event, ui ) {
        $( sliderMin ).text( ui.values[ 0 ]  );
        $( sliderMax ).text( ui.values[ 1 ] );
    }
});

