(function($) {
    var MobileMenu = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.mobile-acc__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    MobileMenu.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('mobile-acc_open');

        if (!e.data.multiple) {
            $el.find('.mobile-acc__list').not($next).slideUp().parent().removeClass('mobile-acc_open');
        };
    }

    var accordion = new MobileMenu($('.mobile-acc'), false);

    $('.mobile-menu').on("touchmove scroll", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

})(jQuery);
