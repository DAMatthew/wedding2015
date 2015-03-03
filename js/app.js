$(document).ready(function() {

    $("#menu-close").click(function(a) {
        a.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function(a) {
        a.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $(".popover-bottom").popover({
        placement: "bottom"
    });
    $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var a = $(this.hash);
                a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
                if (a.length) {
                    $("html,body").animate({
                        scrollTop: a.offset().top
                    }, 1e3);
                    return false;
                }
            }
        });
    });
});