$(document).ready(function () {
    $('.clients-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<img class="slick-prev" src="./assets/images/svg/left-arrow.svg">',
        nextArrow: '<img class="slick-next" src="./assets/images/svg/right-arrow.svg">'
    });
    let navbarMenu = document.querySelector(".navbar .navbar-collapse");
    let closeMenu = document.querySelector(".navbar-collapse .close");
    let navbarMenuToggler = document.querySelector(".navbar-toggler");
    console.log(closeMenu);
    $(closeMenu).click(function () {
        $(navbarMenu).toggleClass("show");
        $("body").toggleClass("height-fixed");
        $(".height-fixed-overlay").remove();
    });
    $(navbarMenuToggler).click(function () {
        $("body").toggleClass("height-fixed");
        if ($("body").hasClass("height-fixed")) {
            $('body').append('<div class="height-fixed-overlay"></div>');
        } else {
            $(".height-fixed-overlay").remove();
        }
    });
    $(document).on('click', '.height-fixed-overlay', function () {
        $(navbarMenu).toggleClass("show");

        $("body").toggleClass("height-fixed");

        $(".height-fixed-overlay").remove();
    });

});