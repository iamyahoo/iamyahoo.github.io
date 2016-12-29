/**
 * slider: http://refreshless.com/nouislider/

(function($) {

    var rangeSlider = document.querySelector('.range-slider__item');

    noUiSlider.create(rangeSlider, {
        start: [ 565000, 1892000 ],
        connect: true,
        step: 10000,
        range: {
            'min': 565000,
            'max': 1892000
        }
    });



    var inputs = [
        document.getElementById('range-slider__input_lower'),
        document.getElementById('range-slider__input_upper')
    ];


    rangeSlider.noUiSlider.on('update', function( values, handle ) {
        inputs[handle].value = values[handle];
    });
})(jQuery);

 */