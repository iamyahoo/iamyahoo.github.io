
$('.nav__link').each(function(index) {
    if(this.href.trim() == window.location)
        $(this).addClass('nav__link_active');
});

