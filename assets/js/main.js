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

function sendEmail() {
    Email.send(
        "test@test.com",
        "pablo@nomoreanalog.com",
        "This is a subject",
        "this is the body",
        "smtp.gmail.com",
        "pablo@nomoreanalog.com",
        "helpmenow101");
    // {token: "3de63837-50ce-43bf-9492-d34d9397f02c"});
}