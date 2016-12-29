(function($) {
    var $item = $('.form__item');
    var $textarea = $('.form__textarea');

    //wrap input to element, add placeholder animation
    $.each($item, function() {

        var $this = $(this);
        var $description = $('.form__item-desc');
        var $descriptionText = $(this).attr('placeholder');


        $this.wrap('<div class="form__item-wrapper"></div>')
             .before('<label class="form__item-desc"></label>')
             .siblings($description).text($descriptionText);

        $this.on('click focus', function() {
            $this.parent().addClass('focused');
        });

        $this.on('blur', function() {
            if ( !$this.val() ) {
                $this.parent().removeClass('focused');
            }
        });
    });

    //wrap textarea to element, add placeholder animation
    $.each($textarea, function() {

        var $this = $(this);
        var $description = $('.form__textarea-desc');
        var $descriptionText = $(this).attr('placeholder');

        $this.wrap('<div class="form__textarea-wrapper"></div>')
             .before('<label class="form__textarea-desc"></label>')
             .siblings($description).text($descriptionText);

        $this.on('click focus', function() {
            $this.parent().addClass('focused');
        });

        $this.on('blur', function() {
            if ( !$this.val() ) {
                $this.parent().removeClass('focused');
            }
        });
    });
})(jQuery);
