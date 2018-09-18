$(window).scroll(function () {
    parallax();
})

function parallax() {
    var windowScroll = $(window).scrollTop();

    $('.parallax-image').css('background-position',
        'center ' + -1 * (windowScroll * .4) + 'px');

    $('.parallax-text').css('opacity',
        1 - (windowScroll / 350));

    //continue moving down until we reach windowScroll position of Tech Stack (963)
    if (windowScroll <= 963) {
        $('#aboutme-container').css('top',
            -7 + (windowScroll * .009) + 'rem');
    }

    //ensures opacity is 1 until it needs to change
    if (windowScroll <= 965) {
        $('#tech-stack').css('opacity', 1);
    }

    //Starts bringing opactity down when windowScroll is > 1000
    if (windowScroll > 965) {
        $('#tech-stack').css('opacity',
            1 - ((windowScroll - 1100) / 350));
    }
}