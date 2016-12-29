(function($) {

    if ( $('.page-container').hasClass('page-main') ) {
        mainBranchAnimate();
    }

    function mainBranchAnimate() {
        var mainBranch = $('.main-branch');
        var mainBranchPos = mainBranch.position();
        var mainBranchPosTop = mainBranchPos.top;

        $(window).on('load scroll', function() {

            if ( $(window).scrollTop() > mainBranchPosTop - 250 ) {
                mainBranch.addClass('main-branch_animated');
            }
        });
    }

})(jQuery);