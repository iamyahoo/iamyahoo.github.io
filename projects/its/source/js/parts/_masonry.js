(function($) {
    var gridMain = $('.grid-news');
    var gridBlog = $('.grid-blog');
    var gridMainInit = false;
    var gridBlogInit = false;

    var gridMainSettings = {
        columnWidth: 480,
        itemSelector: '.news__item',
        gutter: '.news-gutter'
    };

    var gridBlogSettings = {
        columnWidth: 320,
        itemSelector: '.blog__item',
        gutter: '.blog-gutter'
    };


    $(window).on('load resize', function () {

        /* main page grid on/off*/
        if (mediaFrom1180.matches) {

            if ( !gridMainInit ) {

                gridMainInit = true;
                gridMain.masonry( gridMainSettings );
            }


        } else if (mediaTo1179.matches) {

            if (gridMainInit) {
                gridMainInit = false;
                gridMain.masonry('destroy');
            }
        }

        /* blog grid on/off*/
        if (mediaFrom790.matches) {

            if ( !gridBlogInit ) {

                gridBlogInit = true;
                gridBlog.masonry( gridBlogSettings );
            }


        } else if (mediaTo789.matches) {

            if (gridBlogInit) {
                gridBlogInit = false;
                gridBlog.masonry('destroy');
            }
        }
    });
})(jQuery);