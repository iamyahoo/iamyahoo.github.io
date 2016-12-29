(function($) {
    var MobileMenu = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    MobileMenu.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion_open');

        if (!e.data.multiple) {
            $el.find('.accordion__list').not($next).slideUp().parent().removeClass('accordion_open');
        };
    }

    var accordion = new MobileMenu($('.accordion'), false);

    $('.mobile-menu').on("touchmove scroll", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

})(jQuery);
