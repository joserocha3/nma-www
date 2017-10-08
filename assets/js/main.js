;(function () {

    // Menu settings
    $('#menuToggle, .menu-close').on('click', function () {
        $('#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });

    // Carousel settings
    $('.carousel').swiperight(function () {
        $(this).carousel('prev');
    });
    $('.carousel').swipeleft(function () {
        $(this).carousel('next');
    });
    $('.carousel').carousel({
        interval: 5000
    })

})(jQuery)

function closeMenu() {
    $("#theMenu").toggleClass("menu-open");
}

var scroll = new SmoothScroll('a[href*="#"]');

if (window.location.search.indexOf('email-sent=yes') > -1) {
    classie.toggleClass(document.getElementById('email-alert'), 'hide');
    classie.addClass(document.getElementById('email-alert'), 'show');
} else {
    classie.removeClass(document.getElementById('email-alert'), 'show');
    classie.addClass(document.getElementById('email-alert'), 'hide');
}