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