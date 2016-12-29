(function($) {
    var Accordion = function(el) {
        this.el = el || {};

        // btn
        var links = this.el.find('.table-accordion__btn');
        // event
        links.on('click', {
            el: this.el
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        if ( $this.parent().hasClass('table-accordion_opened') ) {
            $next.slideUp(150);
            $this.parent().removeClass('table-accordion_opened');
        } else {
            $next.slideDown(150);
            $this.parent().addClass('table-accordion_opened');
        }
    }

    var accordion = new Accordion($('.table-accordion'), false);
})(jQuery);
