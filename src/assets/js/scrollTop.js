var scrollTop = $('.back-to-top');
$(window).scroll(function() {
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        $(scrollTop).css('opacity', '1');
    } else {
        $(scrollTop).css('opacity', '0');
    }
}); // scroll END

//animate hover scrolltop button
$(scrollTop).mouseenter(function() {
    $('.to-top-arrow').animate({
        marginBottom: '+=30px', //moves up
    });
}).mouseleave(function() {
    $('.to-top-arrow').animate({
        marginBottom: '-=30px', //moves down
    });
});

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
        scrollTop: 0,
    }, 1500);

    return false;
}); // click() scroll top END
