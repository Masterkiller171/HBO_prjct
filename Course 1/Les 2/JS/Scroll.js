//Navigatie scroll Fade-in / fade-out
var lastScroll = 0,
    hundert;
$(window).scroll(function () {

    var st = $(document).scrollTop();
    if (st > 250 && st > lastScroll) {
        $('nav').addClass('hidden');
        hundert = st;
    } else if (st < (hundert - 33)) {
        $('nav').removeClass('hidden');
    }
    lastScroll = st;
});
