;(function () {

    // Menu settings
    $('#menuToggle, .menu-close').on('click', function () {
        $('#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toleft');
        $('#theMenu').toggleClass('menu-open');
    });


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