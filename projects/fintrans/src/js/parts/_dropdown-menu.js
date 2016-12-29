(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.dropdown-menu__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('dropdown-menu__item_open');

        //collapse other dropdown-menu
        //if (!e.data.multiple) {
        //    $el.find('.dropdown-menu__content').not($next).slideUp().parent().removeClass('dropdown-menu__item_open');
        //};
    };

    var dropdownMenu = new Accordion($('.dropdown-menu'), false);

})(jQuery);
