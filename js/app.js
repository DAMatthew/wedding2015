$(document).ready(function () {
        // CLOSES MENU
        $("#menu-close").click(function (i) {
            i.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

        // OPENS MENU
       $("#menu-toggle").click(function (i) {
            i.preventDefault();
            $("#sidebar-wrapper").toggleClass("active"); 
        });

        //INITIALIZES POPOVER
        $(".popover-bottom").popover({
            placement: 'bottom'
        });
    });

      /*  // SCROLLS TO MENU SELECTION
        $(function () {
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        }); */

        


        /*    var dataBase = new Firebase("https://luminous-fire-2300.firebaseio.com/");
            var pin = $("#pinNumber").val();
            function displayMessage() {
                $()
                }); */
    